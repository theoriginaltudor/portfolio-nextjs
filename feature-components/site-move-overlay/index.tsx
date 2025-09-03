"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SiteMoveOverlayProps {
  className?: string;
  storageKey?: string;
}

export const SiteMoveOverlay: React.FC<SiteMoveOverlayProps> = ({
  className,
  storageKey = "site-move-dismissed",
}) => {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored === "true") {
        setDismissed(true);
        return;
      }
    } catch {}
    // small delay for nicer fade-in
    const id = setTimeout(() => setOpen(true), 80);
    return () => clearTimeout(id);
  }, [storageKey]);

  const handleDismiss = useCallback(() => {
    try {
      localStorage.setItem(storageKey, "true");
    } catch {}
    setOpen(false);
    // allow animation to finish then mark dismissed
    setTimeout(() => setDismissed(true), 220);
  }, [storageKey]);

  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6",
        "transition-opacity duration-200",
        open ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      <Card
        className={cn(
          "relative w-full max-w-lg border-primary/30 shadow-lg",
          "animate-in fade-in zoom-in-50 duration-300",
          !open && "opacity-0 scale-95"
        )}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">I&apos;ve moved!</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            I moved the site to a new domain with a completely self‑hosted architecture. This version will keep working for a bit, but new features and fixes now live on the new project.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">
            Head over to the new domain to see the freshest updates, improved performance, and infrastructure details.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="ghost"
            className="w-full sm:w-auto order-2 sm:order-1"
            onClick={handleDismiss}
            aria-label="Dismiss announcement"
          >
            Stay here
          </Button>
          <Button asChild className="w-full sm:w-auto order-1 sm:order-2">
            <Link
              href="https://tudor-dev.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit new site"
            >
              Go to tudor-dev.com
            </Link>
          </Button>
        </CardFooter>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          ✕
        </Button>
      </Card>
    </div>
  );
};
