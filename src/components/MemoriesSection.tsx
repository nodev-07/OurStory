import { useEffect, useRef } from "react";
import { MemoryCard } from "./MemoryCard";
import Garden from "@/assets/garden.jpg";
import First from "@/assets/first.jpg";
import Ring from "@/assets/ring.jpg";
import Fingers from "@/assets/fingers.jpg";
import Chaotic from "@/assets/chaotic.jpg";
import Scandals from "@/assets/scandals.jpg";
import Pink2 from "@/assets/pink2.jpg";
import Summer2 from "@/assets/summer2.jpg"
// Sample memories - you can replace these with real data
const memories = [
  {
    id: "1",
    title: "A perfect first date",
    shortDescription: "The day we decided to make things official, and...",
    fullDescription: `The day we decided to make things official, and it felt like the world was in full bloom just for us.

I had spent hours getting ready. The sun filtered through the leaves, creating a soft, ethereal light that seemed to follow us as we wandered through the vibrant paths. We talked for what felt like an eternity, sharing dreams and silly stories, our hands brushing against each other as we walked. Then, as we paused in a quiet corner, surrounded by blooming flowers, you reached into your pocket. Hand trembled slightly as you presented me with a delicate ring. You gave it to me not just as a piece of jewelry, but as a promise—a promise of all the adventures still to come.

My heart was so full in that moment. It was there, with the promise ring now on my finger.`,
    image: First,
    date: "Our Favorite Picture",
  },
  {
    id: "2", 
    title: "A Month Apart",
    shortDescription: "The day we were forced to be physically apart...",
    fullDescription: `The day we were forced to be physically apart, a month-long silence descended upon us, broken only by the rare messages. The distance felt like an immense weight. There were no calls, no texts, and no video chats to fill the void, only the quiet hum of missing each other. It was a period of solitude that stretched on, making every day feel a little longer than the last.

When we did get a chance to speak, our conversations were short and strained. The pressure of time and the emotional toll of separation turned what should have been a moment of connection into a flurry of arguments. We struggled to express our feelings in five short minutes, each conversation ending in frustration and tears. But it was in those very arguments, in that desperation to be heard and understood, that we realized just how essential we were to each other. The pain of the distance and the arguments became proof that our lives were better together.

That time taught us that love is not just about being together in the good times, but about surviving the hard ones. It taught us that our bond was not just a convenience, but a necessity, and that a few difficult minutes were still more valuable than an eternity apart.`,
    image: Scandals,
    date: "A perfect test of commitment",
  },
  {
    id: "3",
    title: "Our First Fight",
    shortDescription: "The day we faced a challenge that felt bigger than us...",
    fullDescription: `The day we faced a challenge that felt bigger than us, a day filled with misunderstandings and heavy words.

A simple disagreement spiraled into a whirlwind of arguments, each word feeling like a blow to the beautiful story we were just beginning to write. Tears flowed, not just from anger, but from the fear that this might be the end. The silence that followed the shouting was the heaviest I had ever known. My heart ached, convinced that we had broken something beyond repair.

But then, you broke the silence. you apologized, your voice soft and sincere, and in that moment, I saw a vulnerability I hadn't expected. It was an apology that wasn't about being right or wrong; it was about protecting us, about prioritizing our bond over our own pride.

That day taught us that love isn't just about sharing laughter and joy; it's also about navigating the storms together. It taught us that true strength is not in never fighting, but in finding a way back to each other, stronger than before, after the fight is over.`,
    image: Fingers,
    date: "A perfect storm",
  },
  {
    id: "4",
    title: "The Best Birthday",
    shortDescription: "My outfit was chosen, the place was perfect, and...",
    fullDescription: `My outfit was chosen, the place was perfect, and the entire day felt like it was plucked from a dream. We were a whirlwind of laughter and energy, our usual calm demeanor replaced by a delightful chaos as we navigated the day's events.We acted like we were the only two people in the world. 

Those gifts that were chosen with such care—each one perfectly. The most precious gift, however, was the letter made with lots of love and colours, and for the first time, I felt the immense weight of someone's effort, someone's desire to make me smile.

That day taught us that the greatest gifts aren't about the price tag, but about the thought and love behind them. It taught me that being truly seen and celebrated is the most beautiful gift of all.`,
    image: Chaotic,
    date: "A perfect day of celebration",
  },
  {
    id: "5",
    title: "Our Summer Escapades",
    shortDescription: "The days we choose adventure over attendance...",
    fullDescription: `The days we choose adventure over attendance, trading classroom walls for open roads and the endless summer sky.

We'd meet with a mischievous grin, hop on the little scooty, and set off on our own little road trips. The sun was relentless, painting the world in a shimmering haze and leaving us with sun-kissed skin and windswept hair. We didn't have a specific destination in mind or a perfect place to hang out, so we simply rode, letting the road guide us. The heat was often unbearable, and we'd get tired, but the exhaustion was always overshadowed by the pure joy of being side-by-side.

Every mile we traveled was a memory made. We shared quiet conversations over the hum of the engine and laughed until our cheeks hurt. We had nothing but each other and the simple freedom of the ride. We found our perfect place was never a location, but just being together.

That summer taught us that the greatest moments aren't found in perfect comfort, but in the shared journey—even if it's a little bumpy and a lot sweaty—as long as you have someone to share it with.`,
    image: Summer2,
    date: "A perfect summer of freedom",
  },
  {
    id: "6",
    title: "Our Honest Beginning",
    shortDescription: "The day we laid our pasts bare, choosing to build our...",
    fullDescription: `The day we laid our pasts bare, choosing to build our future on a foundation of complete honesty.

For a while, a part of my story remained a secret, a quiet corner of my heart I was too afraid to open. The fear of judgment, of losing what we had, was a heavy weight. But one day, I knew I had to be brave. I sat down and confessed everything, sharing the mistakes and the messy parts of my history. I prepared myself for anger, for disappointment, for the worst. But instead, there was a profound calm. You listened to every word without interruption, your eyes holding no judgment, only love.

When I finished, a simple, gentle smile spread across your face. You didn't speak of my past as flaws or errors, but simply as the things that made me who I am. You pulled me into an embrace that felt like coming home, accepting me completely—every mistake, every insecurity, every single part of my story. You not only forgave my past but embraced it, and in every argument since, you never used it against me.

That day taught us that love is not about finding a perfect person, but about accepting an imperfect one. It taught me that true love is a safe space where you are seen, known, and cherished, not in spite of your past, but with it.`,
    image: Pink2, 
    date: "A perfect moment of truth",
  },
];

export const MemoriesSection = () => {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.story-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="memories" ref={sectionRef} className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 story-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Precious Memories
          </h2>
          <p className="text-xl text-muted-foreground font-inter">
            Each moment we've shared is a treasure worth remembering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div 
              key={memory.id} 
              className="story-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MemoryCard memory={memory} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};