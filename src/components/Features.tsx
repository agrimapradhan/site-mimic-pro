
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${className}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
            Solve the problem of siloed processes and scale to amplify your revenue potential
          </h2>
          <p className="text-gray-600">
            Simplify your workflow with our comprehensive solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<div className="w-12 h-12 bg-purple-light rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-purple"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>}
            title="Quote-to-Cash Connectedness"
            description="Seamlessly integrate your quote-to-cash processes with our comprehensive platform for improved efficiency."
          />
          <FeatureCard 
            icon={<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>}
            title="Frictionless Deployment"
            description="Fast and easy implementation with minimal disruption to your existing operations and systems."
          />
          <FeatureCard 
            icon={<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>}
            title="Insightful Analytics"
            description="Make data-driven decisions with comprehensive analytics and reporting features."
          />

          <FeatureCard 
            icon={<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>}
            title="Product to Revenue Mapping"
            description="Connect your product catalog directly to revenue systems for maximum profit potential."
          />
          <FeatureCard 
            icon={<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>}
            title="Revenue Optimization"
            description="Identify and capitalize on opportunities to maximize revenue across your organization."
          />
          <FeatureCard 
            icon={<div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>}
            title="Scalable & Secure"
            description="Built with enterprise needs in mind, our platform grows with your business while keeping data secure."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
