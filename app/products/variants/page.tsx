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
import Link from "next/link";

export default async function ProductVariants() {
  const variants = await getProductVariants();

  return (
    <Container>
      <Table>
        <TableCaption>Default table.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">ID</TableHead>
            <TableHead className="w-25">SKU</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {variants.map((variant) => (
            <TableRow key={variant.sku}>
              <TableCell className="font-medium">{variant.id}</TableCell>
              <TableCell className="font-medium">
                <Link href={`/${variant.sku}`}>{variant.sku}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Container>
  );
}
