"use client";

import { startTransition, useActionState, useState } from "react";
import useSWR from "swr";
import Image from "next/image";

import { HeartIcon, LoaderCircleIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { cn, fetcher, usdFormatter } from "@/lib/utils";
import {
  GetProductByVariantSkuQuery,
  GetProductsQuery,
} from "@/lib/generated/graphql";
import AddOrRemoveLike from "@/lib/likes";

export interface ProductAttributeValue {
  value: string;
  display_order: number;
}

export interface ProductAttribute {
  attribute_id: number;
  attribute_name: string;
  display_name: string;
  available_values: ProductAttributeValue[];
}

export type GroupedAttributes = ProductAttribute[];

const ProductCard = ({
  product: initialValues,
  values,
  swr,
}: {
  product: GetProductsQuery["products_new"][0];
  values?: GetProductByVariantSkuQuery["attribute_values"];
  swr?: boolean;
}) => {
  let { data: product } = useSWR<GetProductsQuery["products_new"][0]>(
    swr ? `/api/product/${initialValues.product_variants[0].sku}` : null,
    fetcher,
    {
      fallback: {
        [`/api/product/${initialValues.product_variants[0].sku}`]:
          initialValues,
      },
    }
  );

  if (!product) product = initialValues;

  const variants: Record<
    string,
    { attribute_id: number | null | undefined; value: string }[]
  > = {};

  product.product_variants.forEach((variant) => {
    variants[variant.sku] = variant.variant_attributes.map((attr) => ({
      attribute_id: attr.attribute_value.attribute_id,
      value: attr.attribute_value.value,
    }));
  });

  const [currentVariant, setCurrentVariant] = useState(
    product.product_variants[0]
  );
  const [liked, setLiked, pending] = useActionState(
    (liked) => AddOrRemoveLike({ id: product.id, liked: !liked }),
    product.product_likes.length > 0
  );
  const checkAvailability = (attributeId: number, value: string) => {
    const values: string[] = [];
    Object.values(variants[currentVariant.sku]).forEach((attr) => {
      if (attr.attribute_id !== attributeId) {
        values.push(attr.value);
      }
    });

    values.push(value);

    const foundVariant = product.product_variants.find((variant) =>
      variant.variant_attributes.every((attr) =>
        values.includes(attr.attribute_value.value)
      )
    );

    return foundVariant;
  };

  const mainImage =
    currentVariant.variant_images.find((img) => img.image_type === "main") ||
    currentVariant.variant_images[0];

  return (
    <div className="relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg flex-col flex overflow-hidden">
      <Image
        src={mainImage.image_url.replace("800/800", "500/300")}
        alt={mainImage.alt_text || "Product Image"}
        width={500}
        className="bg-cover"
        height={300}
      />
      <Button
        size="icon"
        onClick={() => {
          startTransition(setLiked);
        }}
        className="bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 rounded-full"
      >
        {pending ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : (
          <HeartIcon
            className={cn(
              liked ? "fill-destructive stroke-destructive" : "stroke-white"
            )}
          />
        )}
        <span className="sr-only">Like</span>
      </Button>
      <Card className="border-none rounded-t-none rounded-b-xl flex flex-1 flex-col grow">
        <CardHeader>
          <CardTitle>
            {product?.name} {currentVariant.id}
          </CardTitle>
          <CardDescription>
            {product?.product_attributes_summary?.grouped_attributes.map(
              (attr: ProductAttribute) => (
                <div key={attr.attribute_id} className="mb-3">
                  <p className="text-sm font-medium mb-2">
                    {attr.display_name}
                  </p>
                  <div className="flex items-center gap-1 flex-wrap">
                    {attr.available_values.map((item) => {
                      const isSelected = Object.values(
                        variants[currentVariant.sku]
                      ).find((val) => val.value === item.value);

                      const isAvailable = checkAvailability(
                        attr.attribute_id,
                        item.value
                      );

                      return (
                        <Badge
                          key={item.value}
                          variant={isSelected ? "default" : "outline"}
                          className={cn(
                            "rounded-sm cursor-pointer transition-all hover:bg-primary/80",
                            !isAvailable &&
                              "opacity-30 cursor-not-allowed hover:bg-transparent"
                          )}
                          onClick={() =>
                            isAvailable && setCurrentVariant(isAvailable)
                          }
                        >
                          {item.value}{" "}
                          {
                            values?.find((item2) => item2.value === item.value)
                              ?.id
                          }
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="grow">
          <p>{product?.description}</p>
          <div className="text-xs text-muted-foreground">
            <p>SKU: {currentVariant.sku}</p>
            <p>Stock: {currentVariant.stock_quantity} available</p>
          </div>
        </CardContent>
        <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase">Price</span>
            <span className="text-xl font-semibold">
              {usdFormatter.format(currentVariant.price)}
            </span>
          </div>
          <Button size="lg">
            {currentVariant.stock_quantity ? "Add to cart" : "Out of stock"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
