import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import BenefitsSection from "@/components/BenefitsSection";
import CriteriaSection from "@/components/CriteriaSection";
import SelectionProcess from "@/components/SelectionProcess";
import InstructionsSection from "@/components/InstructionsSection";
import QuotesSection from "@/components/QuotesSection";
import CTASection from "@/components/CTASection";
import CountdownTimer from "@/components/CountdownTimer";
import Footer from "@/components/Footer";

const Index = () => {
  // Application URL - configurable
  const applicationUrl = "#";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ObjectivesSection />
        <BenefitsSection />
        <CriteriaSection />
        <SelectionProcess />
        <InstructionsSection />
        <QuotesSection />
        <CTASection applicationUrl={applicationUrl} />
      </main>
      <Footer />
      <CountdownTimer />
    </div>
  );
};

export default Index;