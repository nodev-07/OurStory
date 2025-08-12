import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <span className="font-inter">Made with</span>
          <Heart className="h-4 w-4 text-primary fill-primary pulse-heart" />
          <span className="font-inter">by someone who loves you infinitely</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground font-inter">
          Our love story continues with every sunrise ✨
        </p>
      </div>
    </footer>
  );
};