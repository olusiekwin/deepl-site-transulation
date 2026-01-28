import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight, FileText, TrendingUp, Globe } from "lucide-react";

const insights = [
  {
    category: "Capital Structuring",
    title: "Emerging Trends in Project Finance Structures",
    excerpt:
      "An analysis of evolving project finance structures and their application in infrastructure and energy sectors.",
    date: "January 2026",
  },
  {
    category: "Investment Frameworks",
    title: "Governance Frameworks for Co-Investment Vehicles",
    excerpt:
      "Best practices for establishing governance and reporting frameworks in co-investment structures.",
    date: "December 2025",
  },
  {
    category: "Market Developments",
    title: "Private Credit Markets: Regional Perspectives",
    excerpt:
      "A review of private credit market developments across emerging and developed markets.",
    date: "November 2025",
  },
  {
    category: "Capital Structuring",
    title: "Risk Allocation in Public-Private Partnerships",
    excerpt:
      "Examining risk allocation frameworks and their impact on PPP financing success.",
    date: "October 2025",
  },
];

const topics = [
  { icon: FileText, title: "Capital Structuring Trends", count: 12 },
  { icon: TrendingUp, title: "Investment Frameworks", count: 8 },
  { icon: Globe, title: "Market Developments", count: 15 },
];

export default function InsightsPage() {
  return (
    <div>
      <PageHero
        subtitle="Insights & Publications"
        title="Market Perspectives"
        description="Informational content on capital structuring trends, investment frameworks, and market developments across emerging and developed markets."
      />

      {/* Topics */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <topic.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {topic.count} articles
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {insights.map((insight, i) => (
              <article
                key={i}
                className="group p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {insight.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {insight.date}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {insight.excerpt}
                </p>
                <span className="text-accent text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-secondary py-12">
        <div className="container-wide">
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Publications are informational and do not constitute investment
            advice. Content is provided for general informational purposes only.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl font-semibold mb-6">
            Stay Informed
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to discuss our latest perspectives on capital markets
            and financing trends.
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
