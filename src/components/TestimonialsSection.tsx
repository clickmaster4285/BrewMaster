import { useState, useEffect } from "react";
import { useGsapFadeIn } from "@/hooks/useGsap";
import hero1 from "@/assets/hero-1.jpg";

const testimonials = [
  { name: "James Kirkwood", role: "Head Brewer, Mountain Peak", quote: "BrewMaster transformed how we track batches. We've cut waste by 30% and our team finally has the visibility they need.", avatar: "JK" },
  { name: "Sarah Chen", role: "Operations Manager, Golden Valley", quote: "The real-time analytics alone are worth it. We can predict demand and adjust production before issues arise.", avatar: "SC" },
  { name: "Mike Rodriguez", role: "Owner, Barrel & Hop Co.", quote: "From POS to inventory — everything just works. It's like having an extra team member who never sleeps.", avatar: "MR" },
  { name: "Emily Foster", role: "CFO, Craft Union Brewing", quote: "The multi-location dashboard gave us the oversight we desperately needed. Scaling has never been this smooth.", avatar: "EF" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useGsapFadeIn();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={hero1} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">Testimonials</p>
          <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold">
            What Brewers <span className="text-gradient">Say About Us</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64 flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-heading font-bold text-xl mb-6">
                  {t.avatar}
                </div>
                <p className="text-lg md:text-xl text-foreground/90 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <p className="font-heading font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
