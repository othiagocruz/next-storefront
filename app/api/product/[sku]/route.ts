import getProductBySku from "@/lib/data/getProductBySku";
import { getOrCreateSessionId } from "@/lib/sessionManager";
import { stackServerApp } from "@/stack/server";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/product/[sku]">
) {
  const { sku } = await ctx.params;
  const user = await stackServerApp.getUser();
  const userId = user ? user.id : await getOrCreateSessionId();
  const {
    products_new: [product],
  } = await getProductBySku({ sku, userId });

  return Response.json({ ...product });
}
