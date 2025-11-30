import getProducts from "@/lib/data/getProducts";
import ProductCard from "./ProductCard";
import { getOrCreateSessionId } from "@/lib/sessionManager";
import { stackServerApp } from "@/stack/server";

export default async function ProductList() {
  const user = await stackServerApp.getUser();
  const userId = user ? user.id : await getOrCreateSessionId();
  return <CachedContent userId={userId} />;
}

async function CachedContent({ userId }: { userId: string }) {
  const products = await getProducts({ userId });
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
