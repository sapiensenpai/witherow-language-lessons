
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
