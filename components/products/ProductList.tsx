import ProductCard from "./ProductCard";
import { GetProductsQuery } from "@/lib/generated/graphql";

const ProductsList = ({
  products,
}: {
  products: GetProductsQuery["products_new"];
}) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
