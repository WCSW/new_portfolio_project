import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-24">
        <div className="flex gap-10">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <AboutSection />
            <ResumeSection />
          </main>
        </div>
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <PricingSection />
        <PartnersSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
