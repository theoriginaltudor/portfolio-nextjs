"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavigationMenu({ className }: { className?: string }) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("flex justify-end w-full", className)}
    >
      <NavigationMenuPrimitive.List className="flex gap-8">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/">Home</Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/project">Projects</Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link asChild>
            <Link href="/contact">Contact</Link>
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
}
