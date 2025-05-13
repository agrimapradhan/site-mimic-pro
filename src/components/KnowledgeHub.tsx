
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
        <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
        <button className="text-[#2977b5] font-medium hover:underline flex items-center">
          Discover More
        </button>
      </div>
    </div>
  );
};

const KnowledgeHub = () => {
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

        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 pl-4">
                  <KnowledgeCard
                    title="How AI Agents Are Revolutionizing Revenue Operations"
                    description="Discover how intelligent AI agents are transforming the way RevOps teams automate processes, align departments, and drive smarter decision-making."
                    image="/placeholder.svg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-dark" />
              <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-dark" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
