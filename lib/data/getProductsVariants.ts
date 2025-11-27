import request, { gql } from "graphql-request";
import { GetProductVariantsQuery } from "../generated/graphql";

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
  const data = await request<GetProductVariantsQuery>(
    process.env.HASURA_GRAPHQL_ENDPOINT as string,
    query
  );

  return data.product_variants;
}
