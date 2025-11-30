import Container from "@/components/Container";
import ProductCard from "@/components/products/ProductCard";
import getProductBySku from "@/lib/data/getProductBySku";
import { getOrCreateSessionId } from "@/lib/sessionManager";
import { stackServerApp } from "@/stack/server";

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}) {
  const { sku } = await params;

  const user = await stackServerApp.getUser();
  const userId = user ? user.id : await getOrCreateSessionId();

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
  "use server";
  const { sku } = await params;

  const user = await stackServerApp.getUser();
  const userId = user ? user.id : await getOrCreateSessionId();

  const product = await getProductBySku({ sku, userId });

  return (
    <Container center>
      <ProductCard
        swr
        product={product.products_new[0]}
        values={product.attribute_values}
      />
    </Container>
  );
}
