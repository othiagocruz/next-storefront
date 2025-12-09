import getProductBySku from "@/lib/data/getProductBySku";
import { getSessionId } from "@/lib/sessionManager";
import Container from "@/components/Container";
import ProductCard from "@/components/products/ProductCard";
import getUserLikes from "@/lib/data/getUserLikes";

async function CachedContent({ sku, userId }: { sku: string; userId: string }) {
  const product = await getProductBySku({ sku, userId });
  const productsLiked = await getUserLikes({ userId });
  return (
    <Container center>
      <ProductCard
        swr
        product={product.products_new[0]}
        values={product.attribute_values}
        productsLiked={productsLiked}
      />
    </Container>
  );
}

export async function ProductPage({ sku }: { sku: string }) {
  const userId = await getSessionId();

  return <CachedContent sku={sku} userId={userId} />;
}
