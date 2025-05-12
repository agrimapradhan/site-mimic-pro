
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-6">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full flex items-center justify-center gap-2 bg-primary text-white">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

const ProductSuite = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-dark">
          Crenovent's Full Product Suite
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="QuoteFlow"
            description="Accelerate revenue generation with automated quoting processes"
            image="/placeholder.svg"
            features={[
              "Dynamic product configurations",
              "Automated approval workflows",
              "Integration with CRM systems",
              "Real-time pricing engine"
            ]}
          />
          
          <ProductCard 
            title="RevolvData"
            description="Gain actionable insights from your revenue data"
            image="/placeholder.svg"
            features={[
              "Custom dashboards and reports",
              "Revenue forecasting with AI",
              "Performance metrics tracking",
              "Data visualization tools"
            ]}
          />
          
          <ProductCard 
            title="CrateBase"
            description="Comprehensive product catalog management solution"
            image="/placeholder.svg"
            features={[
              "Centralized product information",
              "Variant and bundle management",
              "Dynamic pricing capabilities",
              "API-first architecture"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
