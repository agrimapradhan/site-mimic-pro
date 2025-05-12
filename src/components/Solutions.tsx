
import React from "react";
import { Activity, Check, Flag, TrendingDown, Clock, Calendar } from "lucide-react";

const Solutions = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-dark">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-500">
            Revolutionizing Revenue Challenges with 
            <br />
            AI-Powered Solutions
          </h2>
          <p className="text-gray-700 mb-16">
            Unlock scalable solutions that turn complexity into clarity and drive unstoppable revenue momentum.
          </p>
        </div>

        {/* "What are we solving" wheel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Central circle */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center z-30 solving-center-circle">
            <div className="text-center">
              <div className="text-xl font-bold text-white">What are we</div>
              <div className="text-3xl font-bold text-white">Solving?</div>
            </div>
          </div>

          {/* Multiple concentric circles */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-dashed border-gray-400 z-10"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-300 z-10"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed border-gray-200 z-10"></div>

          {/* Problem cards */}
          <div className="w-full h-[600px] relative">
            {/* Card 1 - Top Left */}
            <div className="absolute top-0 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-red-500 p-1 rounded-full mt-1">
                      <Activity size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Are Your Systems Siloed and Blocking Execution?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>

            {/* Card 2 - Top Right */}
            <div className="absolute top-[15%] right-[10%] transform translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-green-500 p-1 rounded-full mt-1">
                      <Check size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Are You Still Reacting Instead of Predicting?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>
            
            {/* Card 3 - Mid Right */}
            <div className="absolute top-[50%] right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-green-500 p-1 rounded-full mt-1">
                      <Clock size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Are Manual Workflows Dragging Down Speed?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>

            {/* Card 4 - Bottom Right */}
            <div className="absolute bottom-[15%] right-[10%] transform translate-x-1/2 translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-72">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-red-500 p-1 rounded-full mt-1">
                      <Calendar size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Are you waiting until the next quarterly review to identify what's off track?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>

            {/* Card 5 - Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-500 p-1 rounded-full mt-1">
                      <TrendingDown size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Are Your Revenue Forecasts Static and Inaccurate?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>

            {/* Card 6 - Bottom Left */}
            <div className="absolute bottom-[15%] left-[10%] transform -translate-x-1/2 translate-y-1/2 z-20">
              <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                  <div className="flex items-start gap-2">
                    <div className="bg-yellow-500 p-1 rounded-full mt-1">
                      <Flag size={16} className="text-white" />
                    </div>
                    <p className="text-black text-sm">
                      Is Strategy Failing at the Execution Level?
                    </p>
                  </div>
                </div>
              </div>
              {/* Connection dot */}
              <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-6 h-6 bg-blue-400 rounded-full border-4 border-white"></div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-500">
              Check Our Demo's To
              <br />
              Solving Above Problems.
            </h3>
            <p className="text-gray-600 mb-6">
              Solve the problems of siloed processes and data to unleash your revenue potential
            </p>
            
            {/* Demo steps */}
            <div className="flex items-center space-x-4 mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium">{step}</span>
                  </div>
                  {step < 4 && <div className="w-4 border-t border-dashed border-gray-500"></div>}
                </div>
              ))}
            </div>
            
            <h4 className="text-lg font-bold text-blue-400 mb-3">
              Do Missed Revenue Opportunities Keep You Up at Night?
            </h4>
            <p className="text-gray-600 mb-6">
              With Crenovent, leverage leading indicators and AI insights to identify and act on revenue opportunities before they pass by, ensuring you never miss out on potential gains.
            </p>
            
            <button className="flex items-center text-gray-600 hover:text-blue-500">
              <span>Play Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          <div className="bg-transparent rounded-xl p-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/d12ba7a0-1418-47cc-8fcf-1b85c48a666e.png" 
                alt="Platform Demo" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
