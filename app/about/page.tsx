import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqItems = [
  {
    question: "What is this about?",
    answer:
      "Just a side project by Thiago Cruz, fullstack developer. Intended to showcase a modern e-commerce storefront built with Next.js and Shadcn UI components.",
  },
  {
    question: "Whats the backend?",
    answer:
      "The backend is powered by Hasura GraphQL 2.X, providing a robust and scalable API for managing products, variants, and user interactions. We also run PostgreSQL as our main database.",
  },
  {
    question: "What are the future plans for this project?",
    answer:
      "Keep growing it with more features, optimizations to contribute to the developer community with a painless GraphQL approach into e-commerce.",
  },
];

export default function About() {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Meet the next generation storefront
          </h2>
          <p className="text-muted-foreground text-xl">
            Built with Next.js and Shadcn UI, this storefront offers a seamless
            shopping experience with a modern design and robust features.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
          <AccordionItem value={`item-${faqItems.length + 1}`}>
            <AccordionTrigger className="text-lg">
              How can I reach the creator?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Please leave me a message in the{" "}
              <Link className="font-bold hover:text-primary" href="/contact">
                contact section of this website
              </Link>{" "}
              or reach out via my{" "}
              <Link
                className="font-bold hover:text-primary"
                href="https://github.com/othiagocruz"
                target="_blank"
              >
                GitHub profile
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
