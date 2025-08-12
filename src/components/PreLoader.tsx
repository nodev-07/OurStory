import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PreLoaderProps {
  onComplete: () => void;
}

export const PreLoader = ({ onComplete }: PreLoaderProps) => {
  const [loading, setLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    "Are you ready to relive our journey?",
    "Are you absolutely, positively sure you don't want to smile today?",
    "Just one click, for me? 💕",
    "Seriously?",
    "Tussi pyar ni krrte? ",
    "Bebe last warning a shistit aikun ghe",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowDialog(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setShowDialog(false);
    onComplete();
  };

  const handleNotYet = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      // Maybe show a sweet message or just proceed
      handleYes();
    }
  };

  if (!loading && !showDialog) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-hero flex items-center justify-center">
      {loading && (
        <div className="flex flex-col items-center">
          <div className="relative">
            <Heart 
              size={120} 
              className="text-primary/20 stroke-2" 
            />
            <Heart 
              size={120} 
              className="absolute inset-0 text-primary fill-primary heart-fill stroke-2" 
            />
          </div>
          <p className="mt-8 text-xl font-playfair text-primary">
            Loading our love story...
          </p>
        </div>
      )}

      <Dialog open={showDialog} onOpenChange={() => {}}>
        <DialogContent className="max-w-md text-center border-primary/20 bg-card/95 backdrop-blur-sm">
          <div className="space-y-6 p-4">
            <Heart size={60} className="mx-auto text-primary fill-primary pulse-heart" />
            <h2 className="text-2xl font-playfair text-primary">
              {questions[questionIndex]}
            </h2>
            <div className="flex space-x-4">
              <Button 
                onClick={handleYes}
                className="flex-1 ripple-effect bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Yes, I am! 💖
              </Button>
              <Button 
                onClick={handleNotYet}
                variant="outline"
                className="flex-1 ripple-effect border-primary text-primary hover:bg-primary/10"
              >
                Not yet...
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};