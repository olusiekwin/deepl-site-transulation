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
    sm: "h-9",
    md: "h-11",
    lg: "h-12",
    xl: "h-14",
    "2xl": "h-16",
  };

  const dimensions = {
    sm: { w: 180, h: 36 },
    md: { w: 220, h: 44 },
    lg: { w: 260, h: 52 },
    xl: { w: 320, h: 64 },
    "2xl": { w: 380, h: 76 },
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
