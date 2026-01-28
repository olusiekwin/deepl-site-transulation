import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PartnersSlider } from "@/components/shared/PartnersSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Building, Users, Landmark, Briefcase, Handshake } from "lucide-react";

const partnerCategories = [
  {
    icon: Building,
    title: "Institutional Investors",
    description: "Pension funds, sovereign wealth funds, and asset managers seeking structured investment opportunities across infrastructure, real estate, and private markets.",
  },
  {
    icon: Landmark,
    title: "Development Finance Institutions",
    description: "Multilateral and bilateral development banks focused on infrastructure, energy, and development projects in emerging and frontier markets.",
  },
  {
    icon: Briefcase,
    title: "Private Lenders & Credit Funds",
    description: "Alternative credit providers, direct lenders, and specialty finance firms providing structured debt solutions across sectors.",
  },
  {
    icon: Users,
    title: "Family Offices",
    description: "Single and multi-family offices seeking direct investment opportunities, co-investment arrangements, and long-term capital deployment.",
  },
  {
    icon: Handshake,
    title: "Strategic Co-Investors",
    description: "Corporate investors, industry operators, and strategic partners seeking aligned investment opportunities and operational partnerships.",
  },
];

export default function CapitalPartnersPage() {
  const { country } = useLanguage();
  const countryPrefix = `/${country}`;

  return (
    <div>
      <PageHero
        subtitle="Capital Partners & Networks"
        title="Institutional Capital Ecosystem"
        description="We maintain relationships with a broad network of institutional capital providers, facilitating structured engagement between qualified sponsors and appropriate funding partners."
      />

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeader
                subtitle="Our Role"
                title="Facilitator, Not Fund"
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                We position ourselves as a structuring and facilitation platform, not a fund. Our role is to prepare clients for capital engagement and coordinate professional introductions to appropriate institutional partners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                All capital partner engagements are subject to rigorous qualification, due diligence, and alignment assessment.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-8 md:p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Our Facilitation Approach
              </h3>
              <ul className="space-y-4">
                {[
                  "Rigorous partner qualification",
                  "Alignment assessment",
                  "Professional introductions",
                  "Transaction coordination",
                  "Ongoing relationship support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Slider */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <PartnersSlider
            partners={[
              {
                name: "Institutional Investor 1",
                logo: "/images/partners/institutional-1.png",
                category: "Institutional",
                website: "https://example.com",
              },
              {
                name: "Development Finance Institution 1",
                logo: "/images/partners/dfi-1.png",
                category: "DFI",
                website: "https://example.com",
              },
              {
                name: "Private Credit Fund 1",
                logo: "/images/partners/credit-fund-1.png",
                category: "Credit Fund",
                website: "https://example.com",
              },
              {
                name: "Family Office 1",
                logo: "/images/partners/family-office-1.png",
                category: "Family Office",
                website: "https://example.com",
              },
              {
                name: "Strategic Co-Investor 1",
                logo: "/images/partners/strategic-1.png",
                category: "Strategic",
                website: "https://example.com",
              },
              {
                name: "Institutional Investor 2",
                logo: "/images/partners/institutional-2.png",
                category: "Institutional",
                website: "https://example.com",
              },
              {
                name: "Development Finance Institution 2",
                logo: "/images/partners/dfi-2.png",
                category: "DFI",
                website: "https://example.com",
              },
              {
                name: "Private Credit Fund 2",
                logo: "/images/partners/credit-fund-2.png",
                category: "Credit Fund",
                website: "https://example.com",
              },
            ]}
            title="Our Capital Partners"
            description="We maintain relationships with leading institutional capital providers, development finance institutions, and strategic investors across global markets."
            slidesToShow={4}
            autoplay={true}
          />
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            subtitle="Partner Categories"
            title="Capital Partner Network"
            description="We work with a diverse range of institutional capital providers across sectors and geographies."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((partner, i) => (
              <div
                key={i}
                className="p-8 bg-card border border-border rounded-lg hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <partner.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {partner.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-secondary py-12">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4 text-center">
              Partnership Disclaimer
            </h3>
            <p className="text-center text-sm text-muted-foreground">
              We do not guarantee introductions, funding outcomes, or investment commitments. All capital partner engagements are subject to independent assessment, due diligence, and commercial negotiation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
            Discuss Capital Partnership Opportunities
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact our team to explore how we can facilitate structured engagement with appropriate capital partners.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to={`${countryPrefix}/contact`}>
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
