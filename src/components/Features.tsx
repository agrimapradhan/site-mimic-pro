
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, image }) => {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Card className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer h-full">
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="mb-6 w-20 h-20 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-dark">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      
      {image && (
        <HoverCardContent className="w-96 p-0 bg-white border border-gray-200 shadow-lg">
          <AspectRatio ratio={16/9} className="bg-muted">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </AspectRatio>
          <div className="p-4">
            <h4 className="font-semibold text-lg">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-accent py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Solve the problem of siloed processes
            and data to unleash your revenue potential
          </h2>
          <p className="text-gray-600">
            Beyond Metrics: Driving Revenue Leadership, Transforming Industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                  <path d="M2 8h20M2 12h20"></path>
                </svg>
              </div>
            }
            title="Unified Data Integration"
            description="Consolidates data across CRM, sales, marketing, and customer support for comprehensive analysis."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />
          <FeatureCard 
            icon={
              <div className="w-full h-full bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
            }
            title="Precision Analytics"
            description="Employs advanced algorithms and machine learning to provide insights into key metrics like win-rate, CAC, CLV, NPS, and ARR."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />
          <FeatureCard 
            icon={
              <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M12 14l2 2 4-4"></path>
                </svg>
              </div>
            }
            title="Cross-Functional Collaboration"
            description="Facilitates seamless interaction across departments to align strategies and operations."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />

          <FeatureCard 
            icon={
              <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#68d391" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
            }
            title="Predictive Insights"
            description="Offers forecasting and scenario planning tools to anticipate future trends and adjust strategies proactively."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />
          <FeatureCard 
            icon={
              <div className="w-full h-full bg-red-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff8787" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                </svg>
              </div>
            }
            title="Automated Processes"
            description="Streamlines data processing to enhance accuracy and free up resources for strategic tasks."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />
          <FeatureCard 
            icon={
              <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            }
            title="Client Success Framework"
            description="Provides structured methodologies to ensure consistent delivery and customer satisfaction across all clients."
            image="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
