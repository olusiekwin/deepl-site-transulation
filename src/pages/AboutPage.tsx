import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CheckCircle, ArrowRight } from "lucide-react";

const values = [
  {
    title: "Financial and Structural Rigor",
    description: "Every engagement is grounded in robust financial analysis and sound structural design.",
  },
  {
    title: "Risk Identification and Mitigation",
    description: "We proactively identify risks and develop strategies to address them effectively.",
  },
  {
    title: "Transparency and Governance",
    description: "Our processes prioritize clear communication and adherence to governance standards.",
  },
  {
    title: "Sponsor-Investor Alignment",
    description: "We structure transactions to ensure alignment between all stakeholders.",
  },
];

const ethics = [
  "Confidentiality and data protection",
  "Integrity in all dealings",
  "Responsible advisory practices",
  "Compliance with applicable laws",
  "Regulatory awareness",
  "Professional standards adherence",
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        subtitle="About Us"
        title="Who We Are"
        description="An independent capital advisory firm focused on supporting clients through complex financing and investment processes across multiple regions and sectors."
      />

      {/* Mandate Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeader
                subtitle="Our Mandate"
                title="Enabling Access to Appropriate Capital"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mandate is to assist clients in accessing appropriate capital by improving investment readiness, structuring transactions responsibly, and facilitating engagement with suitable funding partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with enterprises, project sponsors, and public institutions that require sophisticated capital advisory support. Our focus is on creating sustainable financing solutions that serve long-term objectives.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 md:p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Client Focus
              </h3>
              <ul className="space-y-4">
                {[
                  "Corporates seeking growth or expansion capital",
                  "Project sponsors and developers",
                  "Public and quasi-public entities",
                  "Investment holding companies",
                  "Institutional investors seeking deal flow",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            subtitle="Our Approach"
            title="Disciplined, Process-Driven Advisory"
            description="We apply a structured approach that emphasizes rigor, risk management, and alignment."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-heading text-xl font-bold text-accent">{i + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="bg-gradient-navy rounded-lg p-8 md:p-12 text-primary-foreground">
              <h3 className="font-heading text-2xl font-semibold mb-4 text-accent">
                Governance & Ethics
              </h3>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                We operate under strict ethical standards, prioritizing integrity and responsible advisory practices in all engagements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ethics.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                subtitle="Leadership Philosophy"
                title="Accountability and Independence"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our leadership philosophy emphasizes accountability, long-term relationships, and advisory independence. We focus on delivering sound analysis and structured guidance rather than promotional outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                All engagements are conducted in accordance with applicable laws, regulatory expectations, and professional standards. We maintain clear boundaries and transparent communication throughout every advisory relationship.
              </p>
              <Button variant="hero" asChild>
                <Link to="/governance">
                  Learn About Our Governance
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
