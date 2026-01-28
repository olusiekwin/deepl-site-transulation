import { ServiceDetailLayout } from "@/components/shared/ServiceDetailLayout";

export default function ProjectFinancePage() {
  return (
    <ServiceDetailLayout
      subtitle="Project & Structured Finance"
      title="Complex Project Advisory"
      description="Comprehensive advisory for infrastructure, energy, and large-scale development initiatives requiring structured financing solutions."
      overview="We advise on the structuring and financing of complex projects, including infrastructure, energy, and large-scale development initiatives. Our team brings deep experience in project finance structures and stakeholder coordination."
      scope={[
        "Financial structuring and modeling",
        "Capital stack design and optimization",
        "Lender and investor coordination",
        "Due diligence support and management",
        "Risk allocation frameworks",
        "Contract and term sheet advisory",
      ]}
      outcomes="All project advisory engagements are evaluated based on risk allocation, commercial viability, and long-term sustainability. We help clients navigate complex multi-stakeholder environments to achieve optimal financing outcomes."
      importantNote="Project finance advisory requires extensive due diligence and stakeholder alignment. Timeline and outcomes depend on project complexity and market conditions."
    />
  );
}
