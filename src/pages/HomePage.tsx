import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
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
  { name: "Europe" },
  { name: "Middle East" },
  { name: "Asia" },
  { name: "North America" },
  { name: "Africa" },
];

const capitalLifecycleData = [
  { phase: "Strategy", value: 100 },
  { phase: "Structuring", value: 85 },
  { phase: "Execution", value: 90 },
  { phase: "Monitoring", value: 75 },
];

export default function HomePage() {
  const { country } = useLanguage();
  const countryPrefix = `/${country}`;

  return (
    <div>
      {/* Hero – full bleed to top, header floats inside */}
      <section className="relative min-h-[70vh] flex items-center text-primary-foreground overflow-hidden -mt-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-deep-blue/75 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/70 to-deep-blue/85" />

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

      {/* Value Proposition – DD-friendly, straightforward */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                subtitle="Our platform"
                title="Capital advisory and structuring"
                description="We work with qualified clients to design financing structures and facilitate engagement with institutional capital partners."
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Governance-led, risk-disciplined, and aligned to long-term outcomes.
              </p>
              <Button variant="goldLink" asChild>
                <Link to={`${countryPrefix}/about`} className="flex items-center gap-2">
                  About us
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Capital lifecycle</p>
              <ChartContainer config={{ phase: { label: "Phase" }, value: { label: "Score", color: "hsl(var(--accent))" } }} className="h-[200px] w-full">
                <BarChart data={capitalLifecycleData} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" vertical={false} />
                  <XAxis dataKey="phase" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} width={28} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
                  <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                  <Bar dataKey="value" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeader
            subtitle="Services"
            title="What we do"
            description="Advisory and transaction support across the capital lifecycle."
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

      {/* Sectors & reach */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                subtitle="Sectors"
                title="Sector coverage"
                description="Infrastructure, energy, real estate, industrial, agribusiness, financial services, public sector."
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {sectors.map((sector) => (
                  <span key={sector} className="px-3 py-1.5 bg-secondary text-foreground text-xs font-medium rounded-md border border-border">
                    {sector}
                  </span>
                ))}
              </div>
              <Button variant="goldLink" asChild>
                <Link to={`${countryPrefix}/sectors`} className="inline-flex items-center gap-2 mt-6">
                  Sectors
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-navy rounded-lg p-8 text-primary-foreground">
              <Globe className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-heading text-lg font-semibold mb-2">Coverage</h3>
              <p className="text-primary-foreground/70 text-sm mb-4">Europe through Africa.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary-foreground/80">
                {regions.map((region) => (
                  <span key={region.name}>{region.name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners – DD-friendly */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center max-w-xl mx-auto">
          <p className="text-muted-foreground text-sm">
            We work with institutional investors, DFIs, private credit providers, family offices, and strategic capital partners.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold mb-4">Contact us</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto text-sm">
            Discuss your capital requirements with our advisory team.
          </p>
          <Button variant="hero" size="lg" asChild>
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
