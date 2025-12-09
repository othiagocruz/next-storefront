"use server";

import { getSessionId } from "./sessionManager";
import request, { gql } from "graphql-request";
import {
  DeleteLikeMutation,
  DeleteLikeMutationVariables,
  InsertLikeMutation,
  InsertLikeMutationVariables,
} from "./generated/graphql";
import { updateTag } from "next/cache";

const InsertLike = gql`
  mutation InsertLike($product_id: Int!) {
    insert_product_likes_one(object: { product_id: $product_id }) {
      product_id
      user_id
    }
  }
`;

const DeleteLike = gql`
  mutation DeleteLike($product_id: Int!) {
    delete_product_likes(where: { product_id: { _eq: $product_id } }) {
      affected_rows
    }
  }
`;

export default async function AddOrRemoveLike({
  id,
  liked,
}: {
  id: number;
  liked: boolean;
}) {
  const userId = await getSessionId();

  try {
    if (liked) {
      await request<InsertLikeMutation, InsertLikeMutationVariables>(
        process.env.HASURA_GRAPHQL_ENDPOINT as string,
        InsertLike,
        {
          product_id: id,
        },
        {
          "x-hasura-user-id": userId,
        }
      );
      updateTag("likes");
      return true;
    } else {
      await request<DeleteLikeMutation, DeleteLikeMutationVariables>(
        process.env.HASURA_GRAPHQL_ENDPOINT as string,
        DeleteLike,
        {
          product_id: id,
        },
        {
          "x-hasura-user-id": userId,
        }
      );
      updateTag("likes");
      return false;
    }
  } catch (error) {
    console.error("Error setting liked status:", error);
    return false;
  }
}
