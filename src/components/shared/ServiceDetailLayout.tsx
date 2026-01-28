import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceDetailLayoutProps {
  subtitle: string;
  title: string;
  description: string;
  overview: string;
  whoIsFor?: string[];
  whatWeDo?: string[];
  scope?: string[];
  outcomes?: string;
  importantNote?: string;
}

export function ServiceDetailLayout({
  subtitle,
  title,
  description,
  overview,
  whoIsFor,
  whatWeDo,
  scope,
  outcomes,
  importantNote,
}: ServiceDetailLayoutProps) {
  return (
    <div>
      <PageHero subtitle={subtitle} title={title} description={description} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">{overview}</p>
              </div>

              {/* Who Is For */}
              {whoIsFor && (
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Who This Is For
                  </h3>
                  <ul className="space-y-3">
                    {whoIsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* What We Do */}
              {whatWeDo && (
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    What We Do
                  </h3>
                  <ul className="space-y-3">
                    {whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Scope */}
              {scope && (
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Scope of Support
                  </h3>
                  <ul className="space-y-3">
                    {scope.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes */}
              {outcomes && (
                <div className="bg-muted rounded-lg p-6 md:p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    Outcomes
                  </h3>
                  <p className="text-muted-foreground">{outcomes}</p>
                </div>
              )}

              {/* Important Note */}
              {importantNote && (
                <div className="bg-secondary border-l-4 border-accent p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    Important Note
                  </h3>
                  <p className="text-muted-foreground text-sm">{importantNote}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-gradient-navy rounded-lg p-8 text-primary-foreground">
                  <h3 className="font-heading text-xl font-semibold mb-4 text-accent">
                    Ready to Begin?
                  </h3>
                  <p className="text-sm text-primary-foreground/80 mb-6">
                    Engage our advisory team to discuss your specific requirements.
                  </p>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Other Services
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        to="/services/capital-advisory"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Capital Advisory
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/project-finance"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Project & Structured Finance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/private-credit"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Private Credit & Lending
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/investment-structuring"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Investment Structuring
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/strategic-partnerships"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Strategic Partnerships
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/financial-readiness"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        Financial Readiness
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
