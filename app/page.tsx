import ProductsList from "@/components/products/ProductList";
import getProducts from "@/lib/data/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
}
