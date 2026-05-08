import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductThinkingSection from "@/components/ProductThinkingSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import CareerSection from "@/components/CareerSection";
import WhyHireMeSection from "@/components/WhyHireMeSection";
import Footer from "@/components/Footer";
import VideoAssignmentWizard from "@/components/VideoAssignmentWizard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductThinkingSection />
      <ProjectsSection />
      <StackSection />
      <CareerSection />
      <WhyHireMeSection />
      <Footer />
      <VideoAssignmentWizard />
    </div>
  );
};

export default Index;
