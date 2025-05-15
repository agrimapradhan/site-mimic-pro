
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import useCarousel directly from the carousel file
import useEmblaCarousel from "embla-carousel-react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  image: string;
  isActive?: boolean;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  title,
  description,
  image,
  isActive = false,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full transition-all duration-300",
        isActive 
          ? "scale-110 z-10 shadow-[0_10px_30px_rgba(60,122,159,0.3)]" 
          : "scale-95 opacity-85"
      )}
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
        <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
        <Button className="text-[#2977b5] font-medium hover:underline p-0 bg-transparent hover:bg-transparent flex items-center">
          Discover More
        </Button>
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

        <div className="mt-16 relative px-2 md:px-16">
          <CarouselWithCenteredActive />
        </div>
      </div>
    </section>
  );
};

// Extracted carousel component with enhanced functionality
const CarouselWithCenteredActive = () => {
  const carouselCards = [
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
  
  const [activeIndex, setActiveIndex] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true
  });
  
  // Update active index when carousel changes
  useEffect(() => {
    if (!emblaApi) return;
    
    const onChange = () => {
      if (!emblaApi) return;
      // Get current slide index
      const currentSlide = emblaApi.selectedScrollSnap();
      setActiveIndex(currentSlide);
    };
    
    emblaApi.on("select", onChange);
    return () => {
      emblaApi.off("select", onChange);
    };
  }, [emblaApi]);
  
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full"
      setApi={(carouselApi) => {
        if (carouselApi) {
          // Initialize with middle card active
          carouselApi.scrollTo(1);
        }
      }}
    >
      <CarouselContent className="py-4">
        {carouselCards.map((card, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 pl-4">
            <KnowledgeCard
              title={card.title}
              description={card.description}
              image={card.image}
              isActive={index === activeIndex}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-dark shadow-md" />
      <CarouselNext className="absolute -right-6 md:-right-12 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-dark shadow-md" />
    </Carousel>
  );
};

export default KnowledgeHub;
