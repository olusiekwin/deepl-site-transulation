import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Layout } from "@/components/layout/Layout";
import { GeolocationGuard } from "@/components/GeolocationGuard";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import SectorsPage from "./pages/SectorsPage";
import ProcessPage from "./pages/ProcessPage";
import GovernancePage from "./pages/GovernancePage";
import InsightsPage from "./pages/InsightsPage";
import GlobalPresencePage from "./pages/GlobalPresencePage";
import ContactPage from "./pages/ContactPage";
import CapitalPartnersPage from "./pages/CapitalPartnersPage";

// Service Detail Pages
import CapitalAdvisoryPage from "./pages/services/CapitalAdvisoryPage";
import ProjectFinancePage from "./pages/services/ProjectFinancePage";
import PrivateCreditPage from "./pages/services/PrivateCreditPage";
import InvestmentStructuringPage from "./pages/services/InvestmentStructuringPage";
import StrategicPartnershipsPage from "./pages/services/StrategicPartnershipsPage";
import FinancialReadinessPage from "./pages/services/FinancialReadinessPage";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Country and language-aware routes wrapper
function AppRoutes() {
  return (
    <Routes>
      {/* Redirect root to US (default) */}
      <Route path="/" element={<Navigate to="/us" replace />} />
      
      {/* Country-specific routes (us, uk, fr, de) */}
      <Route path="/us">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/capital-advisory" element={<CapitalAdvisoryPage />} />
        <Route path="services/project-finance" element={<ProjectFinancePage />} />
        <Route path="services/private-credit" element={<PrivateCreditPage />} />
        <Route path="services/investment-structuring" element={<InvestmentStructuringPage />} />
        <Route path="services/strategic-partnerships" element={<StrategicPartnershipsPage />} />
        <Route path="services/financial-readiness" element={<FinancialReadinessPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="partners" element={<CapitalPartnersPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="global-presence" element={<GlobalPresencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      <Route path="/uk">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/capital-advisory" element={<CapitalAdvisoryPage />} />
        <Route path="services/project-finance" element={<ProjectFinancePage />} />
        <Route path="services/private-credit" element={<PrivateCreditPage />} />
        <Route path="services/investment-structuring" element={<InvestmentStructuringPage />} />
        <Route path="services/strategic-partnerships" element={<StrategicPartnershipsPage />} />
        <Route path="services/financial-readiness" element={<FinancialReadinessPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="partners" element={<CapitalPartnersPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="global-presence" element={<GlobalPresencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      <Route path="/fr">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/capital-advisory" element={<CapitalAdvisoryPage />} />
        <Route path="services/project-finance" element={<ProjectFinancePage />} />
        <Route path="services/private-credit" element={<PrivateCreditPage />} />
        <Route path="services/investment-structuring" element={<InvestmentStructuringPage />} />
        <Route path="services/strategic-partnerships" element={<StrategicPartnershipsPage />} />
        <Route path="services/financial-readiness" element={<FinancialReadinessPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="partners" element={<CapitalPartnersPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="global-presence" element={<GlobalPresencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      <Route path="/de">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/capital-advisory" element={<CapitalAdvisoryPage />} />
        <Route path="services/project-finance" element={<ProjectFinancePage />} />
        <Route path="services/private-credit" element={<PrivateCreditPage />} />
        <Route path="services/investment-structuring" element={<InvestmentStructuringPage />} />
        <Route path="services/strategic-partnerships" element={<StrategicPartnershipsPage />} />
        <Route path="services/financial-readiness" element={<FinancialReadinessPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="partners" element={<CapitalPartnersPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="global-presence" element={<GlobalPresencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      {/* Legacy language routes - redirect to country routes */}
      <Route path="/en" element={<Navigate to="/us" replace />} />
      <Route path="/:lang">
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/capital-advisory" element={<CapitalAdvisoryPage />} />
        <Route path="services/project-finance" element={<ProjectFinancePage />} />
        <Route path="services/private-credit" element={<PrivateCreditPage />} />
        <Route path="services/investment-structuring" element={<InvestmentStructuringPage />} />
        <Route path="services/strategic-partnerships" element={<StrategicPartnershipsPage />} />
        <Route path="services/financial-readiness" element={<FinancialReadinessPage />} />
        <Route path="sectors" element={<SectorsPage />} />
        <Route path="partners" element={<CapitalPartnersPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="global-presence" element={<GlobalPresencePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <LanguageProvider>
          <GeolocationGuard 
            allowedCountries={['us', 'uk', 'fr', 'de']}
            redirectTo="us"
            blockAccess={false}
          >
            <Layout>
              <AppRoutes />
            </Layout>
          </GeolocationGuard>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
