import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has moved.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
      <p className="text-lg font-semibold text-primary">404</p>
      <h1 className="mt-3 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-pretty text-muted-foreground">
        Sorry, we could not find the page you are looking for. It may have
        been moved or no longer exists.
      </p>
      <Button
        size="lg"
        className="mt-8 rounded-full px-8"
        render={<Link href="/" />}
        nativeButton={false}
      >
        Back to Home
      </Button>
    </main>
  );
}
