
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const ProductSuite = React.lazy(() => import("@/components/ProductSuite"));
const KnowledgeHub = React.lazy(() => import("@/components/KnowledgeHub"));
const CTA = React.lazy(() => import("@/components/CTA"));
const Footer = React.lazy(() => import("@/components/Footer"));

// Loading fallbacks
const ProductSuiteFallback = () => (
  <div className="py-16 md:py-24 bg-white">
    <div className="container">
      <Skeleton className="h-10 w-1/3 mx-auto mb-8" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-16" />
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-96 w-full rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const KnowledgeHubFallback = () => (
  <div className="py-16 md:py-24 bg-white">
    <div className="container">
      <Skeleton className="h-10 w-1/3 mx-auto mb-8" />
      <Skeleton className="h-6 w-1/2 mx-auto mb-16" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-80 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

const CTAFallback = () => (
  <div className="py-16 md:py-24 bg-dark">
    <div className="container">
      <Skeleton className="h-10 w-1/3 mb-8 bg-gray-700" />
      <Skeleton className="h-6 w-1/2 mb-16 bg-gray-700" />
      <Skeleton className="h-12 w-40 mb-8 bg-gray-700" />
    </div>
  </div>
);

const FooterFallback = () => (
  <div className="py-16 bg-white">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-60" />
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Solutions />
        <Suspense fallback={<ProductSuiteFallback />}>
          <ProductSuite />
        </Suspense>
        <Suspense fallback={<KnowledgeHubFallback />}>
          <KnowledgeHub />
        </Suspense>
        <Suspense fallback={<CTAFallback />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
