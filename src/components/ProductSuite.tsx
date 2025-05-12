
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProductCardProps {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ logo, title, subtitle, description, image }) => {
  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-8">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {logo}
        </div>
        <h3 className="text-xl font-bold text-dark mb-1">{title}</h3>
        <h4 className="text-md font-medium mb-4">{subtitle}</h4>
        <p className="text-gray-700 mb-6">
          {description}
        </p>
        <div className="mt-auto">
          <Button 
            className="bg-[#2977b5] hover:bg-[#256a9e] text-white rounded-md"
          >
            Discover More
          </Button>
        </div>
      </div>
      <div className="mt-6">
        <img src={image} alt={title} className="w-full rounded-lg" />
      </div>
    </Card>
  );
};

const ProductSuite = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-dark">
            Discover Our Product Suite
          </h2>
          <p className="text-gray-600">
            Explore cutting-edge AI solutions that fuel your growth.
          </p>
        </div>

        <div className="space-y-8">
          {/* Product 1 */}
          <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-0">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">RevAiPro</h3>
                  <h4 className="text-md font-medium mb-4">AI Agents + Predictive Data Analytics for Revenue Intelligence</h4>
                  <p className="text-gray-700 mb-6">
                    Rev AI unites AI agents and predictive data analytics to deliver real-time insights and automation across your revenue operations. From revenue forecasting to sales automation and marketing automation, Rev AI is the intelligence layer that powers smarter, faster decisions.
                  </p>
                  <div className="mt-6">
                    <Button 
                      className="bg-[#2977b5] hover:bg-[#256a9e] text-white rounded-md"
                    >
                      Discover More
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 p-4">
                  <img 
                    src="/lovable-uploads/d52b6e88-421a-41a8-8dba-0e8e3935ad9d.png" 
                    alt="RevAiPro Dashboard" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-0">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center bg-gray-50 p-4 md:order-first lg:order-last">
                  <img 
                    src="/lovable-uploads/d52b6e88-421a-41a8-8dba-0e8e3935ad9d.png" 
                    alt="RevOpMax Dashboard" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">RevOpMax</h3>
                  <h4 className="text-md font-medium mb-4">Optimize Every Element of RevOps</h4>
                  <p className="text-gray-700 mb-6">
                    RevOps Max supercharges your revenue operations with advanced data analytics, revenue cycle automation, AI agents, and generative AI tools. From forecasting to execution, RevOps Max ensures your teams are aligned, efficient, and growth focused.
                  </p>
                  <div className="mt-6">
                    <Button 
                      className="bg-[#2977b5] hover:bg-[#256a9e] text-white rounded-md"
                    >
                      Discover More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product 3 */}
          <Card className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-0">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">Crux In</h3>
                  <h4 className="text-md font-medium mb-4">Integration Hub for Revenue Cycle Automation</h4>
                  <p className="text-gray-700 mb-6">
                    Crux In connects your entire tech stack, ensuring seamless data flow across marketing, sales, and customer systems. Your AI agents and generative AI tools can access clean, reliable data for powerful predictive data analytics and revenue forecasting.
                  </p>
                  <div className="mt-6">
                    <Button 
                      className="bg-[#2977b5] hover:bg-[#256a9e] text-white rounded-md"
                    >
                      Discover More
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 p-4">
                  <img 
                    src="/lovable-uploads/d52b6e88-421a-41a8-8dba-0e8e3935ad9d.png" 
                    alt="Crux In Dashboard" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="link" className="text-gray-500 hover:text-gray-700">
            View more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;
