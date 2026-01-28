import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      )}
      <div
        className={cn(
          "w-12 h-0.5 bg-accent mt-6",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
