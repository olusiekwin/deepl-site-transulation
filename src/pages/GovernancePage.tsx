import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Shield, Eye, Scale, Lock, FileCheck, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Ethical Conduct",
    description:
      "We maintain the highest ethical standards in all advisory activities, prioritizing client interests and market integrity.",
  },
  {
    icon: Eye,
    title: "Risk Identification",
    description:
      "Comprehensive risk assessment and mitigation strategies are integral to every engagement we undertake.",
  },
  {
    icon: Scale,
    title: "AML & KYC Awareness",
    description:
      "We maintain awareness of anti-money laundering requirements and conduct appropriate know-your-customer processes.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Client information is protected with strict confidentiality protocols and data protection measures.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "All engagements are conducted in accordance with applicable laws and regulatory expectations.",
  },
];

export default function GovernancePage() {
  return (
    <div>
      <PageHero
        subtitle="Governance, Risk & Compliance"
        title="Governance-Led Advisory"
        description="We operate under a governance-led advisory framework that prioritizes ethical conduct, risk management, and regulatory awareness."
      />

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeader
            subtitle="Core Principles"
            title="Our Governance Framework"
            description="Our advisory practice is built on foundational principles that guide every engagement."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <div
                key={i}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <principle.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Notice */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 md:p-12">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Regulatory Notice
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We do not provide regulated financial services in jurisdictions where
                  authorization is required unless explicitly stated.
                </p>
                <p>
                  Our advisory services are provided on a non-binding basis and do not
                  constitute investment advice, financial advice, or recommendations
                  to buy, sell, or hold any securities or financial instruments.
                </p>
                <p>
                  Clients should seek independent professional advice appropriate to
                  their circumstances before making any investment or financing
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Questions About Our Approach?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact our team to discuss our governance framework and advisory
            standards.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
