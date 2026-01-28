import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block p-8 bg-card border border-border rounded-lg transition-all duration-300 hover:border-accent hover:shadow-lg",
        className
      )}
    >
      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center text-accent text-sm font-medium group-hover:gap-2 transition-all">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
