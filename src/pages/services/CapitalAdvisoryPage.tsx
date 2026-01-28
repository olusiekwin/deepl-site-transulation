import { ServiceDetailLayout } from "@/components/shared/ServiceDetailLayout";

export default function CapitalAdvisoryPage() {
  return (
    <ServiceDetailLayout
      subtitle="Capital Advisory"
      title="Strategic Capital Strategy"
      description="Defining appropriate capital strategies aligned with your business model, risk profile, and growth objectives."
      overview="Our Capital Advisory services support clients in defining appropriate capital strategies aligned with their business models, risk profiles, and growth objectives. We provide independent, objective guidance to help clients navigate complex capital markets and identify optimal financing solutions."
      whoIsFor={[
        "Corporates seeking growth or expansion capital",
        "Project sponsors and developers",
        "Public and quasi-public entities",
        "Investment holding companies",
      ]}
      whatWeDo={[
        "Capital strategy development",
        "Funding option analysis (debt, equity, blended finance)",
        "Investor positioning and preparation",
        "Transaction planning and sequencing",
        "Market analysis and benchmarking",
      ]}
      outcomes="Clients gain clarity on capital options, improved investor readiness, and structured engagement with appropriate funding partners."
    />
  );
}
