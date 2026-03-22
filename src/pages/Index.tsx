import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="site-shell">
        <div className="hero-layout">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <AboutSection />
            <ResumeSection />
          </main>
        </div>
        <div className="space-y-4 md:space-y-6 pb-16">
          <PortfolioSection />
          <SkillsSection />
          <CertificationsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
