import getProductBySku from "@/lib/data/getProductBySku";
import { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/product/[sku]">
) {
  const { sku } = await ctx.params;
  const {
    products_new: [product],
  } = await getProductBySku({ sku });

  return Response.json({ ...product });
}
