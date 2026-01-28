import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { OptimizedImage } from "./OptimizedImage";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

interface Partner {
  name: string;
  logo: string;
  category?: string;
  website?: string;
}

interface PartnersSliderProps {
  partners: Partner[];
  title?: string;
  description?: string;
  className?: string;
  autoplay?: boolean;
  slidesToShow?: number;
}

/**
 * Professional Partners Slider Component
 * Displays partner logos in an elegant carousel
 */
export function PartnersSlider({
  partners,
  title = "Our Capital Partners",
  description,
  className,
  autoplay = true,
  slidesToShow = 4,
}: PartnersSliderProps) {
  const [plugin] = useState(() => 
    autoplay ? Autoplay({ delay: 3000, stopOnInteraction: false }) : undefined
  );

  return (
    <div className={cn("w-full", className)}>
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        plugins={plugin ? [plugin] : undefined}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "pl-2 md:pl-4",
                slidesToShow === 2 && "basis-1/2",
                slidesToShow === 3 && "md:basis-1/3",
                slidesToShow === 4 && "md:basis-1/4",
                slidesToShow === 5 && "md:basis-1/5",
                slidesToShow === 6 && "md:basis-1/6"
              )}
            >
              <div className="group relative h-32 md:h-40 bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-accent transition-all duration-300 hover:shadow-md">
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                    aria-label={`Visit ${partner.name}`}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo${partner.category ? ` - ${partner.category}` : ""}`}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo${partner.category ? ` - ${partner.category}` : ""}`}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                  />
                )}
                {partner.category && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-center block">
                      {partner.category}
                    </span>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>

      {/* Auto-scroll indicator */}
      {autoplay && (
        <div className="flex justify-center gap-2 mt-8">
          {partners.slice(0, Math.min(partners.length, 10)).map((_, index) => (
            <div
              key={index}
              className="h-1 w-1 rounded-full bg-muted-foreground/30"
            />
          ))}
        </div>
      )}
    </div>
  );
}
