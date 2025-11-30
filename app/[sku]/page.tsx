import { ProductPage } from "@/components/products/ProductPage";
import getProductBySku from "@/lib/data/getProductBySku";
import { getSessionId } from "@/lib/sessionManager";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}) {
  const { sku } = await params;
  const userId = await getSessionId();
  const product = await getProductBySku({ sku, userId });
  return {
    title: `${product.products_new[0].product_variants[0].id} - ${sku}`,
    description: product.products_new[0].description || "Product details page",
  };
}

export default async function Product({
  params,
}: {
  params: Promise<{ sku: string }>;
}) {
  const { sku } = await params;

  return (
    <Suspense>
      <ProductPage sku={sku} />
    </Suspense>
  );
}
