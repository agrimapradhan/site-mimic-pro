
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import ProductSuite from "@/components/ProductSuite";
import KnowledgeHub from "@/components/KnowledgeHub";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Solutions />
        <ProductSuite />
        <KnowledgeHub />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
