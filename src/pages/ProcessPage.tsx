import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Assessment",
    description:
      "We begin with a comprehensive assessment of your capital requirements, business context, and strategic objectives. This phase establishes the foundation for our advisory relationship.",
  },
  {
    number: "02",
    title: "Capital Readiness Review",
    description:
      "Our team conducts a thorough review of your financial, operational, and governance frameworks to identify areas for improvement before engaging with capital providers.",
  },
  {
    number: "03",
    title: "Structuring & Positioning",
    description:
      "We develop appropriate financing structures and position your opportunity for optimal engagement with target investors and lenders.",
  },
  {
    number: "04",
    title: "Investor Engagement",
    description:
      "Systematic engagement with qualified capital providers, managing the process professionally and maintaining appropriate confidentiality.",
  },
  {
    number: "05",
    title: "Due Diligence Coordination",
    description:
      "We coordinate the due diligence process, managing information flow and ensuring timely responses to investor and lender inquiries.",
  },
  {
    number: "06",
    title: "Transaction Support",
    description:
      "Active support through negotiation, documentation, and closing processes to ensure successful transaction completion.",
  },
  {
    number: "07",
    title: "Post-Transaction Advisory",
    description:
      "Continued advisory support following transaction close, including reporting frameworks and stakeholder relationship management.",
  },
];

export default function ProcessPage() {
  return (
    <div>
      <PageHero
        subtitle="Process & Methodology"
        title="Structured Advisory Process"
        description="Each engagement follows a documented, disciplined process aligned with best practices in capital advisory."
      />

      {/* Process Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-navy rounded-lg flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-full bg-border ml-8 mt-4" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6 max-w-2xl mx-auto">
            Begin Your Advisory Engagement
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact our team to discuss how our structured process can support your capital requirements.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start the Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
