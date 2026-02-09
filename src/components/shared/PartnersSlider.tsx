import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
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

function PartnerTile({ partner, index }: { partner: Partner; index: number }) {
  const [logoError, setLogoError] = useState(false);
  const initials = partner.name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const content = (
    <div className="group relative h-32 md:h-40 bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-accent transition-all duration-300 hover:shadow-md">
      {!logoError && partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          onError={() => setLogoError(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
            <span className="font-heading text-lg font-semibold text-accent">{initials}</span>
          </div>
          <span className="text-xs text-muted-foreground text-center line-clamp-2 px-1">{partner.name}</span>
        </div>
      )}
      {partner.category && (
        <div className="absolute bottom-2 left-2 right-2">
          <span className="text-xs text-muted-foreground bg-background/90 px-2 py-1 rounded text-center block">
            {partner.category}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div className="cursor-default">
          {partner.website ? (
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
              aria-label={partner.name}
            >
              {content}
            </a>
          ) : (
            content
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-64 rounded-lg border border-border shadow-lg">
        <div className="space-y-2">
          <p className="font-heading font-semibold text-foreground text-sm">{partner.name}</p>
          {partner.category && (
            <p className="text-xs text-muted-foreground">{partner.category}</p>
          )}
          <p className="text-xs text-muted-foreground">Capital partner</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

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
        opts={{ align: "start", loop: true, slidesToScroll: 1 }}
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
              <PartnerTile partner={partner} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12" />
        <CarouselNext className="hidden md:flex -right-12" />
      </Carousel>

      {autoplay && (
        <div className="flex justify-center gap-2 mt-8">
          {partners.slice(0, Math.min(partners.length, 10)).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          ))}
        </div>
      )}
    </div>
  );
}
