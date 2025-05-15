
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface KnowledgeCardProps {
  title: string;
  description: string;
  image: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
        <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
        <Button className="text-[#3C7A9F] font-medium hover:underline p-0 bg-transparent hover:bg-transparent flex items-center">
          Discover More
        </Button>
      </div>
    </div>
  );
};

const KnowledgeHub = () => {
  const knowledgeCards = [
    {
      title: "Harnessing AI for Revenue Growth",
      description: "Discover how advanced AI tools are transforming revenue operations and driving sustainable growth in today's competitive landscape.",
      image: "/placeholder.svg"
    },
    {
      title: "How AI Agents Are Revolutionizing Revenue Operations",
      description: "Discover how intelligent AI agents are transforming the way RevOps teams automate processes, align departments, and drive smarter decision-making.",
      image: "/placeholder.svg"
    },
    {
      title: "Future-Ready Revenue Strategies",
      description: "Learn about emerging revenue strategies that leverage AI and advanced analytics to future-proof your business against market disruptions.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-50 opacity-80"></div>
      <div className="container relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Crenovent's Knowledge Hub
          </h2>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            Unlock Expert Insights on AI, RevOps, and Revenue Growth Strategies.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          {knowledgeCards.map((card, index) => (
            <KnowledgeCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
