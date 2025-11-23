import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Fresh new drops
          </h2>
          <p className="text-muted-foreground text-xl">We love papatos</p>
          <Button
            variant="outline"
            className="rounded-lg text-base shadow-none has-[>svg]:px-6"
            size="lg"
            asChild
          >
            <a href="#">
              See all papatos
              <ArrowRightIcon />
            </a>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
