import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { AppleNav } from "@/components/portfolio/AppleNav";
import { AppleHero } from "@/components/portfolio/AppleHero";

const AppleSections = lazy(() =>
  import("@/components/portfolio/AppleSections").then((module) => ({
    default: module.AppleSections,
  })),
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ali — Rust Blockchain Developer" },
      {
        name: "description",
        content:
          "Rust Blockchain Developer building high-performance decentralized systems across EVM, Solana and ICP.",
      },
      { property: "og:title", content: "Ali — Rust Blockchain Developer" },
      { property: "og:description", content: "Building high-performance decentralized systems." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen relative bg-background text-foreground">
      <AppleNav />
      <AppleHero />
      <Suspense fallback={null}>
        <AppleSections />
      </Suspense>
    </main>
  );
}
