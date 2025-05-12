
import React from "react";

const Solutions = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-dark">
          Revolutionary Revenue Challenges with AI-Powered Solutions
        </h2>

        {/* Solutions wheel diagram */}
        <div className="relative max-w-3xl mx-auto mb-20">
          {/* Central circle */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white border-2 border-purple rounded-full flex items-center justify-center z-20">
            <div className="text-center">
              <div className="text-lg font-bold text-purple">Revenue</div>
              <div className="text-lg font-bold text-purple">Solving</div>
            </div>
          </div>

          {/* Outer circles */}
          <div className="w-full h-[400px] relative">
            {/* Circle 1 */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
            {/* Circle 2 */}
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
            {/* Circle 3 */}
            <div className="absolute top-3/4 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
            {/* Circle 4 */}
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-red-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">4</div>
            {/* Circle 5 */}
            <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">5</div>
            {/* Circle 6 */}
            <div className="absolute top-3/4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">6</div>
            {/* Circle 7 */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">7</div>
            {/* Circle 8 */}
            <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white">8</div>

            {/* Lines connecting to center */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-200 z-10"></div>
          </div>
        </div>

        {/* Product Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark">
              Cloud-First Revenue To Solve Global Business Problems
            </h3>
            <p className="text-gray-600 mb-6">
              Our platform integrates with your existing systems to provide a seamless experience for your team and customers. Leveraging cloud technology, we ensure flexibility, security, and scalability.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-gray-700">Real-time synchronization across systems</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-gray-700">Automated workflows to reduce manual errors</span>
              </li>
              <li className="flex items-start">
                <div className="mr-2 mt-1 bg-green-100 p-1 rounded-full">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-gray-700">Comprehensive analytics for strategic decision-making</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="bg-gray-100 rounded-lg h-64 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="32" height="32" stroke="white" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm font-bold">Crenovent Platform Demo</div>
                <div className="text-xs text-gray-600">3:45 min • Product overview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
