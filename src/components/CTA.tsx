
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-dark-blue relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-purple-dark opacity-90"></div>
        <img 
          src="/placeholder.svg"
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Supercharge Your Revenue Teams. Let AI Drive the Playbook.
            </h2>
            <p className="text-gray-300 mb-8">
              Join leading enterprises that have transformed their revenue operations with Crenovent's AI-powered platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-purple-dark hover:bg-gray-100">Schedule a Demo</Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">Contact Sales</Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/placeholder.svg" 
              alt="Crenovent Dashboard" 
              className="rounded-xl shadow-2xl border border-white/20"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 rounded-full bg-purple"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">C</div>
                </div>
                <div>
                  <div className="text-sm font-bold">Crenovent AI</div>
                  <div className="text-xs text-gray-500">Revenue Assistant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
