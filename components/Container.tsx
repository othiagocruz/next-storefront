import { cn } from "@/lib/utils";

export default function Container({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <main>
      <section className="py-8 sm:py-16 lg:py-24">
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            center && "justify-center flex"
          )}
        >
          {children}
        </div>
      </section>
    </main>
  );
}
