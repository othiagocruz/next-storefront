"use client";

import { useState } from "react";
import Image from "next/image";

import { HeartIcon } from "lucide-react";

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

import { cn } from "@/lib/utils";
import { GetProductsQuery } from "@/lib/generated/graphql";
import { useVariantSelector } from "@/lib/useVariantSelector";

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

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export type GroupedAttributes = ProductAttribute[];

const ProductCard = ({
  product,
}: {
  product: GetProductsQuery["products_new"][0];
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const {
    selectedAttributes,
    currentVariant,
    isAttributeAvailable,
    selectAttribute,
  } = useVariantSelector(product);

  const handleAttributeSelect = (
    attributeName: string,
    value: string
  ): void => {
    if (isAttributeAvailable(attributeName, value)) {
      selectAttribute(attributeName, value);
    }
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
        onClick={() => setLiked(!liked)}
        className="bg-primary/10 hover:bg-primary/20 absolute top-4 right-4 rounded-full"
      >
        <HeartIcon
          className={cn(
            liked ? "fill-destructive stroke-destructive" : "stroke-white"
          )}
        />
        <span className="sr-only">Like</span>
      </Button>
      <Card className="border-none rounded-t-none rounded-b-xl flex flex-1 flex-col grow">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {product.product_attributes_summary?.grouped_attributes.map(
              (attr: ProductAttribute) => (
                <div key={attr.attribute_id} className="mb-3">
                  <p className="text-sm font-medium mb-2">
                    {attr.display_name}
                  </p>
                  <div className="flex items-center gap-1 flex-wrap">
                    {attr.available_values.map((item) => {
                      const isSelected =
                        selectedAttributes[attr.attribute_name] === item.value;
                      const isAvailable = isAttributeAvailable(
                        attr.attribute_name,
                        item.value
                      );

                      return (
                        <Badge
                          key={item.value}
                          variant={isSelected ? "default" : "outline"}
                          className={`rounded-sm cursor-pointer transition-all ${
                            !isAvailable
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-primary/80"
                          }`}
                          onClick={() =>
                            isAvailable &&
                            handleAttributeSelect(
                              attr.attribute_name,
                              item.value
                            )
                          }
                        >
                          {item.value}
                          {!isAvailable && " (unavailable)"}
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
          <p>{product.description}</p>
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
