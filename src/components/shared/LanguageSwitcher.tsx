import { Link } from "react-router-dom";
import { useLanguage, countries, Country } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { country, setCountry } = useLanguage();

  const currentCountry = countries.find((c) => c.code === country);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentCountry?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {countries.map((countryOption) => (
          <DropdownMenuItem
            key={countryOption.code}
            onClick={() => setCountry(countryOption.code as Country)}
            className={country === countryOption.code ? "bg-accent" : ""}
          >
            <span className="font-medium">{countryOption.name}</span>
            <span className="ml-2 text-muted-foreground text-xs uppercase">
              ({countryOption.code})
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
