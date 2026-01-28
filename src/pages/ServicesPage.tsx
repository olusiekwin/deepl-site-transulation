import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import {
  TrendingUp,
  Building2,
  Landmark,
  Users,
  Handshake,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Capital Advisory",
    description: "Strategic capital strategy development aligned with business objectives, risk profiles, and growth requirements.",
    href: "/services/capital-advisory",
    icon: TrendingUp,
  },
  {
    title: "Project & Structured Finance",
    description: "Comprehensive advisory for complex infrastructure, energy, and large-scale development initiatives.",
    href: "/services/project-finance",
    icon: Building2,
  },
  {
    title: "Private Credit & Lending Solutions",
    description: "Advisory and facilitation services for accessing private credit through structured lender engagement.",
    href: "/services/private-credit",
    icon: Landmark,
  },
  {
    title: "Investment Structuring & Syndication",
    description: "Structuring investment opportunities and coordinating co-investment and syndication arrangements.",
    href: "/services/investment-structuring",
    icon: Users,
  },
  {
    title: "Strategic Capital Partnerships",
    description: "Facilitation of strategic partnerships between project sponsors and institutional capital providers.",
    href: "/services/strategic-partnerships",
    icon: Handshake,
  },
  {
    title: "Investment & Financial Readiness",
    description: "Preparation of financial, operational, and governance frameworks for capital market engagement.",
    href: "/services/financial-readiness",
    icon: FileCheck,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        subtitle="Our Services"
        title="Advisory & Transaction Support"
        description="We provide comprehensive advisory and transaction support services across the capital lifecycle, from early-stage preparation to execution and post-transaction advisory."
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 max-w-2xl mx-auto">
            Discuss Your Capital Requirements
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our team is ready to understand your needs and develop a tailored advisory approach.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Engage the Advisory Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
