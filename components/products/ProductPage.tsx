import getProductBySku from "@/lib/data/getProductBySku";
import { getSessionId } from "@/lib/sessionManager";
import Container from "@/components/Container";
import ProductCard from "./ProductCard";

async function CachedContent({ sku, userId }: { sku: string; userId: string }) {
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

export async function ProductPage({ sku }: { sku: string }) {
  const userId = await getSessionId();

  return <CachedContent sku={sku} userId={userId} />;
}
