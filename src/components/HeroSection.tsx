import { Button } from "@/components/ui/button";
import { ArrowDown, Heart } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

export const HeroSection = () => {
  const scrollToStory = () => {
    const element = document.querySelector('#story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in-up space-y-8">
          <Heart size={80} className="mx-auto text-primary fill-primary pulse-heart" />
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight">
            Our Everlasting 11.11
            <span className="block text-primary">Love Story</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where two hearts became one, and every moment became a cherished memory
          </p>
          
          <Button 
            onClick={scrollToStory}
            size="lg"
            className="ripple-effect bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            Begin Our Journey
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Heart 
          size={32} 
          className="text-primary fill-primary animate-pulse" 
        />
      </div>
    </section>
  );
};