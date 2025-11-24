"use client";

import { Fragment, useState } from "react";
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

  return (
    <div className="relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg flex-col flex overflow-hidden">
      <Image
        src={product.product_variants[0].variant_images[0].image_url.replace(
          "800/800",
          "500/300"
        )}
        alt={product.product_variants[0].variant_images[0].alt_text || ""}
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
                <Fragment key={attr.attribute_id}>
                  <p>{attr.display_name}</p>
                  <div className={"flex items-center gap-1 flex-wrap"}>
                    {attr.available_values.map((attribute, i) => (
                      <Badge
                        key={attribute.value}
                        variant={i === 0 ? "default" : "outline"}
                        className="rounded-sm"
                      >
                        {attribute.value}
                      </Badge>
                    ))}
                  </div>
                </Fragment>
              )
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="grow">
          <p>{product.description}</p>
        </CardContent>
        <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
          <div className="flex flex-col">
            <span className="text-sm font-medium uppercase">Price</span>
            <span className="text-xl font-semibold">
              {usdFormatter.format(product.product_variants[0].price)}
            </span>
          </div>
          <Button size="lg">Add to cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
