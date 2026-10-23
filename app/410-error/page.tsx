import type { Metadata } from "next";
import { RemovedPage } from "@/components/ui/removedPage";

export const metadata: Metadata = {
  title: "Page Permanently Removed",
  description:
    "This page has been permanently removed. Visit Vallejo 420 MD to get your California medical marijuana card online.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
};

export default function GonePage() {
  return <RemovedPage />;
}
