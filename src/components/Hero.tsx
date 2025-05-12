
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-bg py-12 md:py-20">
      <div className="container flex flex-col lg:flex-row items-center">
        {/* Left content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0 lg:pr-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-6">
            Reinvent your <span className="text-primary">Enterprise Revenue Fabric</span> with Crenovent!
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-md">
            Transform how your enterprise quotes, prices, and captures revenue with the only platform that connects your product catalog to your sales and finance systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary text-white hover:bg-primary/90">Get Started</Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Play size={16} className="text-primary fill-primary" />
              <span>Watch Demo</span>
            </Button>
          </div>
        </div>

        {/* Right content - Charts and graphics */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative z-10">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                  <span className="ml-2 font-medium">REVENUE</span>
                </div>
                <div className="text-sm font-medium">$3.4M</div>
              </div>
              <div className="h-32 bg-white rounded-lg overflow-hidden">
                <div className="h-full w-full relative">
                  {/* Mock chart with gradient */}
                  <div className="absolute bottom-0 w-full h-3/4 chart-gradient"></div>
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path
                      d="M0,80 C30,70 60,90 90,60 C120,30 150,50 180,40 C210,30 240,10 270,30 C290,40 300,30 300,30 L300,100 L0,100 Z"
                      fill="#4956E3" fillOpacity="0.2"
                    />
                    <path
                      d="M0,80 C30,70 60,90 90,60 C120,30 150,50 180,40 C210,30 240,10 270,30 C290,40 300,30 300,30"
                      fill="none" stroke="#4956E3" strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-500 w-3 h-3 rounded-full"></div>
                  <span className="ml-2 text-xs font-medium">Monthly Revenue</span>
                </div>
                <div className="h-24 flex items-end space-x-1">
                  {[30, 45, 25, 60, 35, 50, 70, 40, 55, 65, 75, 50].map((height, index) => (
                    <div 
                      key={index} 
                      className="bg-blue-500 rounded-t w-full" 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                    <span className="ml-2 text-xs font-medium">Growth</span>
                  </div>
                  <span className="text-xs font-bold text-green-500">+24%</span>
                </div>
                <div className="h-24 flex items-end space-x-1">
                  {[20, 30, 40, 35, 45, 50, 55, 60, 65, 70, 75, 80].map((height, index) => (
                    <div 
                      key={index} 
                      className="bg-green-500 rounded-t w-full" 
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
