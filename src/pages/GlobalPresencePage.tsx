import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { MapPin, Building, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Europe",
    offices: [
      { city: "London, United Kingdom", type: "Virtual Office" },
      { city: "Frankfurt, Germany", type: "Virtual Office" },
      { city: "Zurich, Switzerland", type: "Virtual Office" },
    ],
  },
  {
    name: "Middle East",
    offices: [
      { city: "Dubai, UAE", type: "Virtual Office" },
      { city: "Riyadh, Saudi Arabia", type: "Virtual Office" },
    ],
  },
  {
    name: "Asia",
    offices: [
      { city: "Singapore", type: "Virtual Office" },
      { city: "Hong Kong", type: "Virtual Office" },
    ],
  },
  {
    name: "North America",
    offices: [
      { city: "New York, USA", type: "Head Office / Virtual Office Space" },
      { city: "Toronto, Canada", type: "Virtual Office" },
    ],
  },
  {
    name: "Africa",
    offices: [
      { city: "Nairobi, Kenya", type: "Virtual Office" },
      { city: "Lagos, Nigeria", type: "Virtual Office" },
      { city: "Johannesburg, South Africa", type: "Virtual Office" },
    ],
  },
];

export default function GlobalPresencePage() {
  return (
    <div>
      <PageHero
        subtitle="Global Presence"
        title="Worldwide Advisory Platform"
        description="Our advisory platform spans five continents, providing localized expertise with global perspective."
      />

      {/* Head Office */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-xl mx-auto text-center">
            <Building className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Head Office
            </h2>
            <p className="text-muted-foreground mb-1">W. 25th Street, Virtual Office Space</p>
            <p className="text-foreground font-medium">New York, NY 10001</p>
            <p className="text-sm text-muted-foreground mt-2"><a href="tel:+13042669322" className="hover:text-accent">+1 (304) 266-9322</a></p>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            subtitle="Regional coverage"
            title="Offices"
            description="Virtual office and coordination points. Europe through Africa."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="p-8 bg-card border border-border rounded-lg"
              >
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  {region.name}
                </h3>
                <ul className="space-y-4">
                  {region.offices.map((office, i) => (
                    <li key={i} className="border-l-2 border-border pl-4">
                      <p className="font-medium text-foreground">{office.city}</p>
                      <p className="text-sm text-muted-foreground">{office.type}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-secondary py-10">
        <div className="container-wide">
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Virtual offices support coordination and client engagement. Head office: New York.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Connect With Us Globally
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Reach out to discuss your capital requirements with our regional teams.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
