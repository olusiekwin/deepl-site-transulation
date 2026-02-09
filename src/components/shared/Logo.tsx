import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "default" | "light";
}

/**
 * Quantavus logo – clean image, no box or rectangle.
 */
export function Logo({
  className,
  size = "md",
  variant = "default",
}: LogoProps) {
  const { country } = useLanguage();
  const countryPrefix = `/${country}`;

  const sizeClasses = {
    sm: "h-10",
    md: "h-12",
    lg: "h-14",
    xl: "h-18",
    "2xl": "h-22",
  };

  const dimensions = {
    sm: { w: 200, h: 40 },
    md: { w: 240, h: 48 },
    lg: { w: 280, h: 56 },
    xl: { w: 360, h: 72 },
    "2xl": { w: 440, h: 88 },
  };
  const { w, h } = dimensions[size];

  return (
    <Link
      to={countryPrefix}
      className={cn("flex items-center group", className)}
      aria-label="Quantavus – Capital Advisory"
    >
      <img
        src="/logo.png"
        alt="Quantavus"
        className={cn(
          "object-contain object-left w-auto transition-opacity duration-200 group-hover:opacity-90",
          sizeClasses[size],
          variant === "light" && "brightness-110 contrast-110"
        )}
        width={w}
        height={h}
      />
    </Link>
  );
}
