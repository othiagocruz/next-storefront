import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navigationData } from "@/lib/utils";

export default async function Footer() {
  "use cache";
  return (
    <footer>
      <div className="mx-auto flex flex-col max-w-7xl justify-center items-center px-4 py-8 sm:px-6">
        <NavigationMenu className="mb-4 max-md:hidden">
          <NavigationMenuList className="flex-wrap justify-start gap-0">
            {navigationData.map((navItem) => (
              <NavigationMenuItem key={navItem.title}>
                <NavigationMenuLink
                  href={navItem.href}
                  className="text-muted-foreground hover:text-primary px-3 py-1.5 text-base! font-medium hover:bg-transparent"
                >
                  {navItem.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <a
            href="https://github.com/othiagocruz"
            className="hover:text-primary/80"
            target="_blank"
          >
            othiagocruz
          </a>
          , theme and components by{" "}
          <a
            href="https://shadcnstudio.com"
            className="hover:text-primary/80"
            target="_blank"
          >
            shadcnstudio.
          </a>{" "}
          <br />
          built with{" "}
          <a
            href="https://nextjs.org"
            className="hover:text-primary/80"
            target="_blank"
          >
            Next.js
          </a>
          , hosted on{" "}
          <a
            href="https://vercel.com"
            className="hover:text-primary/80"
            target="_blank"
          >
            Vercel
          </a>
        </p>
      </div>
    </footer>
  );
}
