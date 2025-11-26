import Container from "@/components/Container";
import ProductCard from "@/components/products/ProductCard";
import getProductBySku from "@/lib/data/getProductBySku";

export async function generateMetadata({
  params,
}: {
  params: { sku: string };
}) {
  const { sku } = await params;

  const product = await getProductBySku({ sku });
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
  const product = await getProductBySku({ sku });

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
