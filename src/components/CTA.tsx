
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-[#06114F] text-white relative overflow-hidden">      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Smash Silos.<br />
              Align Revenue Teams.<br />
              Let AI Run the Playbook.
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-lg">
              Crenovent unifies marketing, sales, and customer success on one smart platform — 
              giving your GTM teams real-time insights, automated nudges, and complete pipeline 
              visibility. No more handoffs lost in Slack or campaigns flying blind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#4ACCCD] text-dark hover:bg-[#3dbdbe] px-8 py-6 h-auto text-base font-medium">
                Book a Demo
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 h-auto text-base font-medium">
                Discover more
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <img 
              src="/lovable-uploads/d52b6e88-421a-41a8-8dba-0e8e3935ad9d.png"
              alt="AI Dashboard" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
