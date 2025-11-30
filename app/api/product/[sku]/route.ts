import getProductBySku from "@/lib/data/getProductBySku";
import { getSessionId } from "@/lib/sessionManager";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/product/[sku]">
) {
  const { sku } = await ctx.params;
  const userId = await getSessionId();
  const {
    products_new: [product],
  } = await getProductBySku({ sku, userId });

  return Response.json({ ...product });
}
