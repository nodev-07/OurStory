import { useEffect, useRef } from "react";
import { Heart, Calendar, MapPin, Star } from "lucide-react";

const storyEvents = [
  {
    title: "First Meeting- 19/02/2025",
    date: "A magical day",
    location: "Where destiny brought us together.. ",
    description: "The moment our eyes met & time stood still. Little did we know this was the beginning of our love life.",
    icon: Heart,
  },
  {
    title: "First Date- 22/02/2025", 
    date: "An unforgettable evening",
    location: "Our special place - Hideout",
    description: "Nervous conversations, endless butterflies, and the Kit-kat smoothie",
    icon: Star,
  },
  {
    title: "First call- 03/03/2025",
    date: "The love felt in voice",
    location: "In balcony's",
    description: "When minutes turned into hours, 'lub uh' became the sweetest word and 'bui' became the hardest word",
    icon: Heart,
  },
  {
    title: "Falling in Love- 28/03/2025",
    date: "Every day since",
    location: "In each other's hearts",
    description: "When 'like' became 'love', every day started with good morning kalesh & ended with our 11.11 wish",
    icon: Heart,
  },
  {
    title: "Our Journey Continues",
    date: "Forever and always",
    location: "Wherever we're together",
    description: "Building dreams, making memories, and writing our love story one beautiful chapter at a time.",
    icon: Star,
  },
];

export const StorySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.story-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 story-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Every love story is beautiful, but ours is my favorite
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block"></div>

          {storyEvents.map((event, index) => {
            const Icon = event.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative mb-16 story-reveal ${
                  isEven ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-romantic hidden md:block z-10"></div>

                {/* Content card */}
                <div
                  className={`bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-romantic transition-all duration-300 ${
                    isEven ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-8 w-8 text-primary mr-3 fill-primary/20" />
                    <div>
                      <h3 className="text-2xl font-playfair font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-inter">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-inter">{event.location}</span>
                  </div>

                  <p className="text-foreground font-inter leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};