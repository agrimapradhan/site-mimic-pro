
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface KnowledgeCardProps {
  title: string;
  description: string;
  image: string;
  isCenter?: boolean;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({
  title,
  description,
  image,
  isCenter = false,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 h-full transition-all duration-300",
        isCenter ? "transform scale-110 shadow-lg z-10" : "scale-100"
      )}
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });

      // Initialize with center card
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
    
    return () => {
      if (emblaApi) {
        emblaApi.off('select');
      }
    };
  }, [emblaApi]);

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

        <div className="mt-16 px-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 py-8">
              {knowledgeCards.map((card, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 transition-all duration-300",
                  )}
                >
                  <KnowledgeCard
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    isCenter={index === selectedIndex}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline"
              size="icon"
              className="rounded-full bg-white border-[#3C7A9F] text-[#3C7A9F] hover:bg-[#3C7A9F] hover:text-white"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full bg-white border-[#3C7A9F] text-[#3C7A9F] hover:bg-[#3C7A9F] hover:text-white"
              onClick={() => emblaApi?.scrollNext()}
            >
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
