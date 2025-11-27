import request, { gql } from "graphql-request";
import {
  GetProductByVariantSkuQuery,
  GetProductByVariantSkuQueryVariables,
} from "../generated/graphql";
import { cacheLife, cacheTag } from "next/cache";

export const GetProductByVariantSku = gql`
  query GetProductByVariantSku($sku: String = "") {
    products_new(where: { product_variants: { sku: { _eq: $sku } } }) {
      base_price
      created_at
      description
      id
      name
      product_attributes_summary {
        grouped_attributes
      }
      product_variants(
        where: { is_active: { _eq: true }, sku: { _eq: $sku } }
      ) {
        created_at
        id
        price
        sku
        stock_quantity
        variant_images {
          alt_text
          display_order
          id
          image_type
          image_url
        }
        variant_attributes {
          attribute_value {
            product_attribute {
              display_name
            }
            value
            id
            attribute_id
          }
        }
      }
    }
    attribute_values {
      id
      value
    }
  }
`;

export default async function getProductBySku({ sku }: { sku: string }) {
  "use cache";

  cacheLife("hasura");
  cacheTag("products");

  const data = await request<
    GetProductByVariantSkuQuery,
    GetProductByVariantSkuQueryVariables
  >(process.env.HASURA_GRAPHQL_ENDPOINT as string, GetProductByVariantSku, {
    sku,
  });

  return data;
}
