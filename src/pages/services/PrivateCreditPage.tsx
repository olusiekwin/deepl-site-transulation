import { ServiceDetailLayout } from "@/components/shared/ServiceDetailLayout";

export default function PrivateCreditPage() {
  return (
    <ServiceDetailLayout
      subtitle="Private Credit & Lending Solutions"
      title="Private Credit Advisory"
      description="Advisory and facilitation services for evaluating and accessing private credit solutions through structured lender engagement."
      overview="We assist clients in evaluating and accessing private credit solutions through structured advisory and lender engagement. Our approach focuses on matching client requirements with appropriate private credit providers."
      whatWeDo={[
        "Assess financing requirements and eligibility",
        "Prepare lending documentation and information memoranda",
        "Facilitate engagement with private lenders and credit funds",
        "Support negotiation and closing processes",
        "Structure appropriate security and covenant frameworks",
      ]}
      outcomes="Clients benefit from structured access to private credit markets, improved documentation quality, and professional representation in lender discussions."
      importantNote="We do not provide direct lending and do not guarantee financing outcomes. Our role is advisory and facilitation only."
    />
  );
}
