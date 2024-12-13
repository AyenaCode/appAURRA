import { servicesPage } from "@/app/modules/Setting";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ServiceNaveProps = {
  className?: string;
};

export const ServiceNav = ({ className }: ServiceNaveProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuItem className="flex items-center gap-1">
        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent px-1">
          <span className={cn("text-white", className)}>Services</span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="fixed left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-900 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <ul className="grid w-[90vw] max-w-[800px] gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
              {servicesPage.map((service, index) => (
                <ListItem
                  key={index}
                  href={service.href}
                  title={service.title}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blueColor to-violetColor flex items-center justify-center">
                      <span className="text-xl text-white">{service.icon}</span>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </ListItem>
              ))}
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
};

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "block select-none rounded-lg p-4 no-underline outline-none transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus:bg-accent focus:text-accent-foreground",
          "dark:hover:bg-gray-800",
          className
        )}
        {...props}
      >
        <div className="text-lg font-semibold mb-2">{title}</div>
        {children}
      </Link>
    </NavigationMenuLink>
  </li>
);
