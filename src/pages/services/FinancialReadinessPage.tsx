import { ServiceDetailLayout } from "@/components/shared/ServiceDetailLayout";

export default function FinancialReadinessPage() {
  return (
    <ServiceDetailLayout
      subtitle="Investment & Financial Readiness"
      title="Capital Readiness"
      description="Preparing clients for capital engagement by strengthening financial, operational, and governance frameworks."
      overview="We assist clients in preparing for capital engagement by strengthening financial, operational, and governance frameworks. Our readiness advisory ensures clients present professionally and credibly to potential capital partners."
      whatWeDo={[
        "Financial modeling and forecasting",
        "Documentation preparation and review",
        "Internal controls and reporting readiness",
        "Investor presentation support",
        "Management team preparation",
        "Due diligence readiness assessment",
      ]}
      outcomes="Clients achieve improved capital readiness, professional presentation materials, and confidence in engaging with institutional investors and lenders."
    />
  );
}
