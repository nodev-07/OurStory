import { useState } from "react";
import { PreLoader } from "@/components/PreLoader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { MemoriesSection } from "@/components/MemoriesSection";
import { SpecialMessage } from "@/components/SpecialMessage";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  if (showPreloader) {
    return <PreLoader onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Navigation />
      
      <main>
        <HeroSection />
        <StorySection />
        <MemoriesSection />
        <SpecialMessage />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
