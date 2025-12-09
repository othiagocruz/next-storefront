import request, { gql } from "graphql-request";
import { UserLikesQuery } from "../generated/graphql";
import { cacheLife, cacheTag } from "next/cache";

const query = gql`
  query UserLikes {
    likes: product_likes {
      product_id
    }
  }
`;

export default async function getUserLikes({ userId }: { userId: string }) {
  "use cache";

  cacheLife("hasura");
  cacheTag("likes");

  const data = await request<UserLikesQuery>(
    process.env.HASURA_GRAPHQL_ENDPOINT as string,
    query,
    undefined,
    {
      "x-hasura-user-id": userId,
    }
  );

  return data;
}
