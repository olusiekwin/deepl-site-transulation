import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
}

/**
 * Professional Quantavus Logo Component
 * QCA lettermark using brand colors:
 * Deep Blue (#1A2A52) and Gold (#D4AF37)
 */
export function Logo({
  className,
  showText = true,
  size = "md",
  variant = "default",
}: LogoProps) {
  const { country } = useLanguage();
  const countryPrefix = `/${country}`;

  const isLight = variant === "light";

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link 
      to={countryPrefix} 
      className={cn("flex items-center gap-3 group", className)}
      aria-label="Quantavus - Capital Advisory"
    >
      {/* Logo Icon - QCA Lettermark */}
      <div className={cn(
        "relative flex items-center justify-center rounded-lg transition-transform group-hover:scale-105",
        sizeClasses[size],
        isLight 
          ? "bg-accent/20 border border-accent/30" 
          : "bg-gradient-to-br from-deep-blue to-deep-blue/90"
      )}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="p-2"
        >
          {/* QCA lettermark */}
          <rect
            x="6"
            y="6"
            width="52"
            height="52"
            rx="12"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
          />

          {/* Q */}
          <path
            d="M18 22C18 18.6863 20.6863 16 24 16H30C33.3137 16 36 18.6863 36 22V28C36 31.3137 33.3137 34 30 34H24C20.6863 34 18 31.3137 18 28V22Z"
            stroke="#D4AF37"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 30L34 34"
            stroke="#D4AF37"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* C */}
          <path
            d="M40 20C44 20 46 22 46 22"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M40 28C42.5 28 44 29 44 29"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M40 36C44 36 46 34 46 34"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* A */}
          <path
            d="M24 40L20 48"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 40L28 48"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 44H26"
            stroke="#D4AF37"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="hidden sm:block">
          <span className={cn(
            "font-heading font-bold tracking-tight block",
            textSizeClasses[size],
            isLight ? "text-primary-foreground" : "text-foreground"
          )}>
            Quantavus
          </span>
          <span className={cn(
            "block text-xs tracking-widest uppercase",
            isLight ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            Capital Advisory
          </span>
        </div>
      )}
    </Link>
  );
}
