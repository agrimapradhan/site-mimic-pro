
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ title, description, image, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="text-xs font-semibold text-primary mb-2">{category}</div>
        <h3 className="text-lg font-semibold mb-3 text-dark">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <span>Read Article</span>
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const KnowledgeHub = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-dark">
          Crenovent's Knowledge Hub
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore our latest insights, guides, and best practices for optimizing revenue operations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <KnowledgeCard 
            title="How to Scale Your Revenue Operations with AI"
            description="Learn how artificial intelligence can transform your revenue operations and drive growth across your organization."
            image="/placeholder.svg"
            category="Revenue Intelligence"
          />
          
          <KnowledgeCard 
            title="Why a Unified Quote-to-Cash Process Matters"
            description="Discover how integrating your quote-to-cash processes can eliminate silos and increase revenue efficiency."
            image="/placeholder.svg"
            category="Process Optimization"
          />
          
          <KnowledgeCard 
            title="5 Ways to Accelerate Sales Cycles with Automation"
            description="Explore practical strategies to shorten your sales cycles and close deals faster using automation technology."
            image="/placeholder.svg"
            category="Sales Enablement"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
