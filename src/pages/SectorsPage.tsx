import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Building,
  Zap,
  Home,
  Factory,
  Wheat,
  Landmark,
  Building2,
  ArrowRight,
} from "lucide-react";

const sectors = [
  {
    icon: Building,
    title: "Infrastructure & PPPs",
    description:
      "Advisory support for large-scale infrastructure and public-private partnership projects with complex capital requirements. We work across transportation, utilities, and social infrastructure sectors.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Support for conventional and renewable energy projects, including generation, transmission, and utility infrastructure. Our experience spans solar, wind, thermal, and grid infrastructure.",
  },
  {
    icon: Home,
    title: "Real Estate & Housing",
    description:
      "Capital structuring for commercial, residential, and mixed-use developments. We support developers and investors across the real estate value chain.",
  },
  {
    icon: Factory,
    title: "Industrial & Manufacturing",
    description:
      "Growth and expansion financing for industrial operators and manufacturers. We understand the capital requirements of production facilities and supply chain infrastructure.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Agribusiness",
    description:
      "Structured finance advisory for agricultural value chains and agribusiness platforms. Our expertise covers production, processing, and distribution infrastructure.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description:
      "Advisory support for financial institutions, investment vehicles, and regulated entities. We help financial services firms optimize their capital structures.",
  },
  {
    icon: Building2,
    title: "Public Sector & Development",
    description:
      "Capital advisory and transaction support for public and development-oriented initiatives. We work with governments and development agencies on financing frameworks.",
  },
];

export default function SectorsPage() {
  return (
    <div>
      <PageHero
        subtitle="Sectors We Serve"
        title="Deep Sector Expertise"
        description="We work across multiple sectors, applying specialized knowledge and established networks to support complex capital requirements."
      />

      {/* Sectors Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <sector.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {sector.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-navy text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              subtitle="Cross-Sector Experience"
              title="Sector-Specific Solutions"
              description="Our advisory team brings specialized knowledge to each sector, understanding the unique capital requirements and market dynamics."
              align="center"
            />
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Sector
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
