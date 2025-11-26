import Container from "@/components/Container";
import ProductsList from "@/components/products/ProductList";
import { Button } from "@/components/ui/button";
import getProducts from "@/lib/data/getProducts";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <Container>
      <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Fresh new drops
        </h2>
        <p className="text-muted-foreground text-xl">
          Check out our selection of products
        </p>
        <Button
          variant="outline"
          className="rounded-lg text-base shadow-none has-[>svg]:px-6"
          size="lg"
          asChild
        >
          <Link href="/products/variants">
            See all Products
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>

      <ProductsList products={products} />
    </Container>
  );
}
