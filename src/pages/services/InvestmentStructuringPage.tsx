import { ServiceDetailLayout } from "@/components/shared/ServiceDetailLayout";

export default function InvestmentStructuringPage() {
  return (
    <ServiceDetailLayout
      subtitle="Investment Structuring & Syndication"
      title="Investment Structuring"
      description="Supporting the structuring of investment opportunities and coordination of co-investment and syndication arrangements."
      overview="We support the structuring of investment opportunities and the coordination of co-investment and syndication arrangements. Our services help sponsors and investors achieve efficient capital deployment through well-structured investment frameworks."
      scope={[
        "Investment vehicle structuring and design",
        "Co-investment framework development",
        "Investor coordination and syndication",
        "Transaction governance support",
        "Terms negotiation advisory",
        "Investor reporting frameworks",
      ]}
      outcomes="Clients achieve efficient capital deployment through well-structured investment vehicles with appropriate governance and alignment mechanisms."
    />
  );
}
