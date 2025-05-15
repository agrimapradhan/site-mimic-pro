
import React from "react";
import { Activity, TrendingDown, Clock, Calendar, Check, Flag } from "lucide-react";

interface SolvingCard {
  id: number;
  icon: React.ReactNode;
  color: string;
  question: string;
}

const Solutions = () => {
  // Data for solving cards
  const solvingCards: SolvingCard[] = [
    {
      id: 1,
      icon: <Check size={16} className="text-white" />,
      color: "green",
      question: "Do Missed Revenue Opportunities Keep You Up at Night?",
    },
    {
      id: 2,
      icon: <Activity size={16} className="text-white" />,
      color: "red",
      question: "Still Relying on Gut Feelings to Make Critical Revenue Decisions?",
    },
    {
      id: 3,
      icon: <Check size={16} className="text-white" />,
      color: "green",
      question: "Are Inefficiencies in Your Revenue Cycle Eroding Your Bottom Line?",
    },
    {
      id: 4,
      icon: <Clock size={16} className="text-white" />,
      color: "red",
      question: "Is Manual Data Processing Slowing Down Your Growth?",
    },
    {
      id: 5,
      icon: <Flag size={16} className="text-white" />,
      color: "yellow",
      question: "Is Your Current Revenue System Ready for all the inevitable disruptions?",
    },
    {
      id: 6,
      icon: <Calendar size={16} className="text-white" />,
      color: "yellow",
      question: "Does your Revenue Intelligence give you the clarity you need?",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white text-black">
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

        {/* "What are we solving" section */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center z-50 shadow-lg">
            <div className="text-center">
              <div className="text-xl font-bold text-white">What are we</div>
              <div className="text-3xl font-bold text-white">Solving?</div>
            </div>
          </div>

          {/* Multiple concentric circles */}
          <div className="relative mx-auto h-[600px]">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-dashed border-gray-400 z-10"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-dashed border-gray-300 z-10"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-2 border-dashed border-gray-200 z-10"></div>

            {/* Fixed positioned cards */}
            {solvingCards.map((card, index) => {
              // Calculate angle for proper placement in a circle
              const angle = (index * 60) % 360; // 6 cards evenly distributed (360/6 = 60 degrees)
              const radians = (angle * Math.PI) / 180;
              const radius = 250; // Distance from center - increased to match the image
              
              // Calculate position in the circle
              const x = Math.cos(radians) * radius;
              const y = Math.sin(radians) * radius;

              // Set z-index for proper layering based on index
              const zIndex = 30 + index;
              
              // Get the icon color based on the card's color property
              let iconBgColor = "bg-green-500";
              if (card.color === "red") {
                iconBgColor = "bg-red-500";
              } else if (card.color === "yellow") {
                iconBgColor = "bg-yellow-500";
              }

              return (
                <div 
                  key={card.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-150"
                  style={{ 
                    left: `calc(50% + ${x}px)`, 
                    top: `calc(50% + ${y}px)`,
                    zIndex: zIndex
                  }}
                >
                  <div className="bg-white shadow-lg rounded-lg p-4 w-64">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start gap-2">
                        <div className={`${iconBgColor} p-1 rounded-full mt-1`}>
                          {card.icon}
                        </div>
                        <p className="text-black text-sm font-medium">
                          {card.question}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Gray connecting dots */}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => {
              const radians = (angle * Math.PI) / 180;
              const radius = 180; // Middle of the circle paths - adjusted to match the image
              const x = Math.cos(radians) * radius;
              const y = Math.sin(radians) * radius;
              
              return (
                <div 
                  key={`dot-${i}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  style={{ 
                    marginLeft: x, 
                    marginTop: y 
                  }}
                >
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
              );
            })}
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
            <p className="text-black mb-6">
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
            <p className="text-black mb-6">
              With Crenovent, leverage leading indicators and AI insights to identify and act on revenue opportunities before they pass by, ensuring you never miss out on potential gains.
            </p>
            
            <button className="flex items-center text-black hover:text-blue-500">
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
