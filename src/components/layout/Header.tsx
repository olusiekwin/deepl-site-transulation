import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { country, t, isRTL } = useLanguage();

  const countryPrefix = `/${country}`;

  const services = [
    { name: "Capital Advisory", href: `${countryPrefix}/services/capital-advisory` },
    { name: "Project & Structured Finance", href: `${countryPrefix}/services/project-finance` },
    { name: "Private Credit & Lending", href: `${countryPrefix}/services/private-credit` },
    { name: "Investment Structuring", href: `${countryPrefix}/services/investment-structuring` },
    { name: "Strategic Partnerships", href: `${countryPrefix}/services/strategic-partnerships` },
    { name: "Financial Readiness", href: `${countryPrefix}/services/financial-readiness` },
  ];

  const navigation = [
    { name: t("nav.about"), href: `${countryPrefix}/about` },
    { name: t("nav.services"), href: `${countryPrefix}/services`, hasDropdown: true },
    { name: t("nav.sectors"), href: `${countryPrefix}/sectors` },
    { name: t("nav.partners"), href: `${countryPrefix}/partners` },
    { name: t("nav.contact"), href: `${countryPrefix}/contact` },
  ];

  const isActive = (href: string) => {
    if (href.includes("/services") && !href.includes("/services/")) {
      return location.pathname.includes("/services");
    }
    return location.pathname === href;
  };

  const isHome = location.pathname === "/" || location.pathname === countryPrefix || location.pathname === `${countryPrefix}/`;
  const navLight = isHome;

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-8 pt-4", isRTL && "rtl")}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-6">
        <Logo size="lg" variant={navLight ? "light" : "default"} />

        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) =>
            item.hasDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent", navLight ? (isActive(item.href) ? "text-accent" : "text-white/80") : (isActive(item.href) ? "text-accent" : "text-muted-foreground"))}>
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64">
                  <DropdownMenuItem asChild>
                    <Link to={`${countryPrefix}/services`} className="font-medium">All Services</Link>
                  </DropdownMenuItem>
                  <div className="h-px bg-border my-1" />
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link to={service.href}>{service.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.name} to={item.href} className={cn("text-sm font-medium transition-colors hover:text-accent", navLight ? (isActive(item.href) ? "text-accent" : "text-white/80") : (isActive(item.href) ? "text-accent" : "text-muted-foreground"))}>
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="hero" size="sm" asChild>
            <Link to={`${countryPrefix}/contact`}>{t("common.engageUs")}</Link>
          </Button>
        </div>

        <button className={cn("lg:hidden p-2", navLight ? "text-white" : "text-foreground")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden px-4 sm:px-6 lg:px-8 mt-2">
          <div className={cn("max-w-7xl mx-auto rounded-lg backdrop-blur-md border shadow-lg animate-fade-in overflow-hidden", navLight ? "bg-deep-blue/95 border-white/20" : "bg-background/95 border-border")}>
          <div className="p-5 space-y-3">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link to={item.href} className={cn("block py-2 text-base font-medium transition-colors hover:text-accent", navLight ? "text-primary-foreground" : (isActive(item.href) ? "text-accent" : "text-foreground"))} onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <LanguageSwitcher />
              <Button variant="hero" size="sm" className="flex-1" asChild>
                <Link to={`${countryPrefix}/contact`} onClick={() => setMobileMenuOpen(false)}>{t("common.engageUs")}</Link>
              </Button>
            </div>
          </div>
          </div>
        </div>
      )}
    </header>
  );
}
