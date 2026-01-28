import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function PageHero({ title, subtitle, description, className }: PageHeroProps) {
  return (
    <section className={cn("bg-gradient-hero text-primary-foreground section-padding", className)}>
      <div className="container-wide">
        <div className="max-w-3xl animate-fade-in-up">
          {subtitle && (
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {description}
            </p>
          )}
          <div className="w-16 h-1 bg-accent mt-8" />
        </div>
      </div>
    </section>
  );
}
