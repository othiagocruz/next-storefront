import Container from "@/components/Container";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getProductVariants from "@/lib/data/getProductsVariants";
import { usdFormatter } from "@/lib/utils";
import Link from "next/link";

export default async function ProductVariants() {
  const variants = await getProductVariants();
  let total = 0;
  variants.forEach((variant) => {
    total += variant.price * (variant.stock_quantity || 0);
  });

  return (
    <Container>
      <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl mb-8">
        Inventory
      </h2>
      <Table>
        <TableCaption>EOF</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">ID</TableHead>
            <TableHead className="w-1/2">SKU</TableHead>
            <TableHead className="w-1/4">Stock</TableHead>
            <TableHead className="w-1/4">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map((variant) => (
            <TableRow key={variant.sku}>
              <TableCell className="font-medium">{variant.id}</TableCell>
              <TableCell className="font-medium">
                <Link href={`/${variant.sku}`}>{variant.sku}</Link>
              </TableCell>
              <TableCell className="font-medium">
                {variant.stock_quantity}
              </TableCell>
              <TableCell className="font-medium">
                {usdFormatter.format(variant.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {usdFormatter.format(total)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
}
