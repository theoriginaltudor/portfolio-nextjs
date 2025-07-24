import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import { User as UserIcon } from "lucide-react";
import { User } from "@supabase/supabase-js";

export const NavigationMenu = ({
  className,
  onNavigate,
  user,
}: {
  className?: string;
  onNavigate?: () => void;
  user?: User;
}) => {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("flex justify-end w-full", className)}
    >
      <NavigationMenuPrimitive.List className="flex flex-col items-center gap-6 w-full md:flex-row md:gap-8">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/" onClick={onNavigate}>
              Home
            </Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/projects" onClick={onNavigate}>
              Projects
            </Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/contact" onClick={onNavigate}>
              Contact
            </Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        {user && (
          <NavigationMenuPrimitive.Item className="flex items-center gap-2">
            <UserIcon /> {user.email}
          </NavigationMenuPrimitive.Item>
        )}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
};
