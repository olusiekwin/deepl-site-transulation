import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const { country, t, isRTL } = useLanguage();
  const countryPrefix = `/${country}`;

  const footerLinks = {
    services: [
      { name: "Capital Advisory", href: `${countryPrefix}/services/capital-advisory` },
      { name: "Project Finance", href: `${countryPrefix}/services/project-finance` },
      { name: "Private Credit", href: `${countryPrefix}/services/private-credit` },
      { name: "Investment Structuring", href: `${countryPrefix}/services/investment-structuring` },
      { name: "Strategic Partnerships", href: `${countryPrefix}/services/strategic-partnerships` },
    ],
    company: [
      { name: t("nav.about"), href: `${countryPrefix}/about` },
      { name: t("nav.sectors"), href: `${countryPrefix}/sectors` },
      { name: t("nav.process"), href: `${countryPrefix}/process` },
      { name: t("nav.governance"), href: `${countryPrefix}/governance` },
      { name: t("nav.partners"), href: `${countryPrefix}/partners` },
    ],
    connect: [
      { name: t("nav.globalPresence"), href: `${countryPrefix}/global-presence` },
      { name: t("nav.contact"), href: `${countryPrefix}/contact` },
    ],
  };

  return (
    <footer className={`bg-gradient-navy text-primary-foreground ${isRTL ? "rtl" : ""}`}>
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="2xl" variant="light" />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">{t("footer.tagline")}</p>
            <div className="text-sm text-primary-foreground/70 space-y-1">
              <p><a href="tel:+13042669322" className="hover:text-accent">+1 (304) 266-9322</a></p>
              <p>W. 25th Street, Virtual Office Space</p>
              <p>New York, NY 10001</p>
              <p><a href="https://quantavus.us" target="_blank" rel="noopener noreferrer" className="hover:text-accent break-all">https://quantavus.us</a></p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">{t("common.services")}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">{t("common.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-accent">{t("common.connect")}</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-primary-foreground/10 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="text-xs text-primary-foreground/50 max-w-3xl leading-relaxed">{t("footer.disclaimer")}</div>
          <div className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Quantavus Capital Advisory</div>
        </div>
      </div>
    </footer>
  );
}
