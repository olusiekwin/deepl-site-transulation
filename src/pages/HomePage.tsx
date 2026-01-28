import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { PartnersSlider } from "@/components/shared/PartnersSlider";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  TrendingUp,
  Building2,
  Landmark,
  Users,
  Handshake,
  FileCheck,
  Globe,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Capital Advisory",
    description: "Strategic capital strategy development aligned with your business objectives and risk profile.",
    href: "/services/capital-advisory",
    icon: TrendingUp,
  },
  {
    title: "Project & Structured Finance",
    description: "Comprehensive advisory for complex infrastructure, energy, and development projects.",
    href: "/services/project-finance",
    icon: Building2,
  },
  {
    title: "Private Credit & Lending",
    description: "Access to private credit solutions through structured advisory and lender engagement.",
    href: "/services/private-credit",
    icon: Landmark,
  },
  {
    title: "Investment Structuring & Syndication",
    description: "Coordination of co-investment and syndication arrangements for institutional investors.",
    href: "/services/investment-structuring",
    icon: Users,
  },
  {
    title: "Strategic Capital Partnerships",
    description: "Facilitation of long-term partnerships between sponsors and institutional capital providers.",
    href: "/services/strategic-partnerships",
    icon: Handshake,
  },
  {
    title: "Investment & Financial Readiness",
    description: "Preparation of financial, operational, and governance frameworks for capital engagement.",
    href: "/services/financial-readiness",
    icon: FileCheck,
  },
];

const sectors = [
  "Infrastructure",
  "Energy",
  "Real Estate",
  "Industrial & Manufacturing",
  "Agribusiness",
  "Financial Services",
  "Public Sector",
];

const regions = [
  { name: "Africa", cities: "Nairobi • Lagos • Johannesburg" },
  { name: "Middle East", cities: "Dubai • Riyadh" },
  { name: "Europe", cities: "London • Frankfurt • Zurich" },
  { name: "Asia", cities: "Singapore • Hong Kong" },
  { name: "North America", cities: "New York • Toronto" },
];

export default function HomePage() {
  const { country } = useLanguage();
  const countryPrefix = `/${country}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center text-primary-foreground overflow-hidden">
        {/* Background Cover Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-cover.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/95 via-deep-blue/90 to-deep-blue/80"></div>
        </div>
        
        {/* Content */}
        <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in">
              Independent Capital Advisory
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up">
              Capital Advisory and Investment Structuring
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in-up delay-100">
              We support enterprises, project sponsors, and public institutions in structuring capital, engaging investors, and executing disciplined financing strategies across global markets.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
                <Button variant="hero" size="xl" asChild>
                  <Link to={`${countryPrefix}/contact`}>
                    Engage the Advisory Team
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to={`${countryPrefix}/services`}>Our Services</Link>
                </Button>
              </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeader
                subtitle="Our Platform"
                title="Disciplined Capital Structuring"
                description="We operate as a capital advisory and transaction support platform, working with qualified clients to design financing structures, improve capital readiness, and facilitate engagement with institutional capital partners."
              />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our work is guided by governance, risk discipline, and long-term alignment. We prioritize transparent processes and sustainable outcomes over transactional volume.
              </p>
              <Button variant="goldLink" asChild>
                <Link to={`${countryPrefix}/about`} className="flex items-center gap-2">
                  Learn About Our Approach
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                <OptimizedImage
                  src="/images/financial-planning.jpg"
                  alt="Strategic financial planning session with capital structuring analysis and investment frameworks"
                  className=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none"></div>
              </div>
              <div className="mt-6 bg-secondary rounded-lg p-8">
                <div className="space-y-6">
                  {[
                    { label: "Governance-Led", desc: "Ethical standards and regulatory awareness" },
                    { label: "Risk Disciplined", desc: "Comprehensive risk identification and mitigation" },
                    { label: "Long-Term Aligned", desc: "Sustainable partnerships over quick transactions" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-1 bg-accent rounded-full" />
                      <div>
                        <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                          {item.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-deep-blue rounded-full blur-3xl"></div>
        </div>
        <div className="container-wide relative z-10">
          <SectionHeader
            subtitle="Our Services"
            title="Core Service Pillars"
            description="Comprehensive advisory and transaction support services across the capital lifecycle."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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

      {/* Sectors Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <OptimizedImage
                  src="/images/infrastructure-projects.jpg"
                  alt="Infrastructure and energy sector projects"
                  className=""
                />
                <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/60 to-transparent pointer-events-none"></div>
              </div>
              <SectionHeader
                subtitle="Sectors Served"
                title="Deep Sector Expertise"
                description="We work across multiple sectors, applying specialized knowledge and established networks to support complex capital requirements."
              />
              <div className="flex flex-wrap gap-3 mt-6">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-full border border-border hover:border-accent transition-colors cursor-default"
                  >
                    {sector}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="goldLink" asChild>
                  <Link to={`${countryPrefix}/sectors`} className="flex items-center gap-2">
                    Explore All Sectors
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-navy rounded-lg p-8 md:p-12 text-primary-foreground relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <Globe className="w-12 h-12 text-accent mb-6" />
                  <h3 className="font-heading text-2xl font-semibold mb-4">Global Reach</h3>
                  <p className="text-primary-foreground/70 mb-8">
                    Our advisory platform spans five continents, providing localized expertise with global perspective.
                  </p>
                  <div className="space-y-4">
                    {regions.map((region) => (
                      <div key={region.name} className="flex justify-between items-center">
                        <span className="font-medium">{region.name}</span>
                        <span className="text-sm text-primary-foreground/60">{region.cities}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 relative aspect-[16/9] rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/images/global-finance.jpg"
                  alt="Global financial markets, international business networks, and cross-border capital flows"
                  aspectRatio="aspect-[16/9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <PartnersSlider
            partners={[
              {
                name: "Institutional Investor 1",
                logo: "/images/partners/institutional-1.png",
                category: "Institutional",
              },
              {
                name: "Development Finance Institution 1",
                logo: "/images/partners/dfi-1.png",
                category: "DFI",
              },
              {
                name: "Private Credit Fund 1",
                logo: "/images/partners/credit-fund-1.png",
                category: "Credit Fund",
              },
              {
                name: "Family Office 1",
                logo: "/images/partners/family-office-1.png",
                category: "Family Office",
              },
              {
                name: "Strategic Co-Investor 1",
                logo: "/images/partners/strategic-1.png",
                category: "Strategic",
              },
              {
                name: "Institutional Investor 2",
                logo: "/images/partners/institutional-2.png",
                category: "Institutional",
              },
            ]}
            title="Trusted by Leading Capital Partners"
            description="We work with premier institutional investors, development finance institutions, and strategic partners worldwide."
            slidesToShow={5}
            autoplay={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 max-w-3xl mx-auto">
            Ready to Structure Your Capital Strategy?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Engage our advisory team to discuss your capital requirements and explore structured financing solutions.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to={`${countryPrefix}/contact`}>
              Engage the Advisory Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
