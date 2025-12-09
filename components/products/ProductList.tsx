import getProducts from "@/lib/data/getProducts";
import ProductCard from "@/components/products/ProductCard";
import { getSessionId } from "@/lib/sessionManager";
import getUserLikes from "@/lib/data/getUserLikes";

export default async function ProductList() {
  const userId = await getSessionId();
  return <CachedContent userId={userId} />;
}

async function CachedContent({ userId }: { userId: string }) {
  const products = await getProducts({ userId });
  const productsLiked = await getUserLikes({ userId });
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productsLiked={productsLiked}
        />
      ))}
    </div>
  );
}
