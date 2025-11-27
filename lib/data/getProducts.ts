import request, { gql } from "graphql-request";
import { GetProductsQuery } from "../generated/graphql";
import { cacheLife, cacheTag } from "next/cache";

const query = gql`
  query GetProducts @cached {
    products_new {
      base_price
      created_at
      description
      id
      name
      product_attributes_summary {
        grouped_attributes
      }
      product_variants(where: { is_active: { _eq: true } }) {
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
  }
`;

export default async function getProducts() {
  "use cache";

  cacheLife("hasura");
  cacheTag("products");

  const data = await request<GetProductsQuery>(
    process.env.HASURA_GRAPHQL_ENDPOINT as string,
    query
  );

  return data.products_new;
}
