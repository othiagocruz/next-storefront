import request, { gql } from "graphql-request";
import { GetProductVariantsQuery } from "../generated/graphql";
import { cacheLife, cacheTag } from "next/cache";

const query = gql`
  query GetProductVariants {
    product_variants {
      sku
      id
      stock_quantity
      price
    }
  }
`;

export default async function getProductVariants() {
  "use cache";

  cacheLife("hasura");
  cacheTag("products");

  const data = await request<GetProductVariantsQuery>(
    process.env.HASURA_GRAPHQL_ENDPOINT as string,
    query
  );

  return data.product_variants;
}
