import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Brewery"
            className="w-full h-full object-cover scale-105"
            width={1920}
            height={1080}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4" ref={textRef}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 max-w-4xl">
            Brew Better.{" "}
            <span className="text-gradient">Serve Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-xl mb-10">
            Complete digital solution for modern breweries.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-light transition-all duration-300 glow-amber"
          >
            Book a Demo
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
