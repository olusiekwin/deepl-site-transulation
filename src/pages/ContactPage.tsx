import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
  { value: "advisory", label: "Advisory Engagement" },
  { value: "loan", label: "Loan Inquiry" },
  { value: "funding", label: "Funding or Capital Inquiry" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "general", label: "General Inquiry" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Submitted",
      description:
        "Thank you for your inquiry. Our team will review and respond within 2-3 business days.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <PageHero
        subtitle="Contact"
        title="Engage the Advisory Team"
        description="Submit your inquiry and our team will respond within 2-3 business days."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company / Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Nature of Inquiry *</Label>
                    <Select 
                      name="inquiryType" 
                      required
                      value={inquiryType}
                      onValueChange={setInquiryType}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Loan/Capital Inquiry Specific Fields */}
                {(inquiryType === "loan" || inquiryType === "funding") && (
                  <div className="bg-muted rounded-lg p-6 space-y-6 border border-border">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {inquiryType === "loan" ? "Loan Details" : "Capital Requirements"}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount">
                          {inquiryType === "loan" ? "Loan Amount Needed *" : "Capital Amount Needed *"}
                        </Label>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          required
                          min="0"
                          step="0.01"
                          placeholder="Enter amount (e.g., 1000000)"
                        />
                        <p className="text-xs text-muted-foreground">Enter amount in USD</p>
                      </div>

                      {inquiryType === "loan" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="loanPeriod">Loan Period (Months) *</Label>
                            <Input
                              id="loanPeriod"
                              name="loanPeriod"
                              type="number"
                              required
                              min="1"
                              placeholder="e.g., 12, 24, 36"
                            />
                            <p className="text-xs text-muted-foreground">Loan term in months</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="interestRate">Expected Interest Rate (%)</Label>
                            <Input
                              id="interestRate"
                              name="interestRate"
                              type="number"
                              min="0"
                              max="100"
                              step="0.01"
                              placeholder="e.g., 5.5"
                            />
                            <p className="text-xs text-muted-foreground">Annual interest rate percentage</p>
                          </div>
                        </>
                      )}
                    </div>

                    {inquiryType === "loan" && (
                      <div className="space-y-2">
                        <Label htmlFor="loanPurpose">Loan Purpose *</Label>
                        <Textarea
                          id="loanPurpose"
                          name="loanPurpose"
                          required
                          rows={3}
                          placeholder="Describe the purpose of the loan (e.g., business expansion, equipment purchase, working capital)"
                        />
                      </div>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Please describe your inquiry, capital requirements, or how we may assist you..."
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    <Send className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  Submissions are non-binding and subject to internal review.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-gradient-navy rounded-lg p-8 text-primary-foreground">
                  <h3 className="font-heading text-xl font-semibold mb-6 text-accent">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-sm text-primary-foreground/80">
                          advisory@quantavus.us
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <p className="text-sm text-primary-foreground/80">
                          +1 (212) 555-0100
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Head Office</p>
                        <p className="text-sm text-primary-foreground/80">
                          Primary Coordination Office
                          <br />
                          City, Country
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Response Time
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team typically responds within 2-3 business days. For
                    urgent matters, please indicate in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
