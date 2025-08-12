import { useState } from "react";
import { Heart, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Memory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  date?: string;
}

interface MemoryCardProps {
  memory: Memory;
}

export const MemoryCard = ({ memory }: MemoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="memory-card bg-card border border-border rounded-2xl p-6 cursor-pointer shadow-card hover:shadow-romantic group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video bg-gradient-romantic rounded-xl mb-4 overflow-hidden">
          <img 
            src={memory.image} 
            alt={memory.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-playfair font-semibold text-foreground group-hover:text-primary transition-colors">
            {memory.title}
          </h3>
          {memory.date && (
            <p className="text-sm text-muted-foreground font-inter">
              {memory.date}
            </p>
          )}
          <p className="text-foreground font-inter text-sm leading-relaxed">
            {memory.shortDescription}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <Heart className="h-5 w-5 text-primary fill-primary/20" />
          <span className="text-primary font-inter text-sm font-medium">
            Read more
          </span>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <div className="space-y-6">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="absolute -top-2 -right-2 z-10 bg-background/80 hover:bg-background"
              >
                <X className="h-4 w-4" />
              </Button>
              
              <div className="aspect-video bg-gradient-romantic rounded-xl overflow-hidden">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
                {memory.title}
              </h2>
              {memory.date && (
                <p className="text-muted-foreground font-inter mb-4">
                  {memory.date}
                </p>
              )}
              <p className="text-foreground font-inter leading-relaxed whitespace-pre-line">
                {memory.fullDescription}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};