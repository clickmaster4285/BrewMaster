import { useGsapFadeIn, useParallax } from "@/hooks/useGsap";
import hero2 from "@/assets/hero-2.jpg";

const reasons = [
  { title: "Built for Craft & Commercial Breweries", desc: "Whether you run a small taproom or a large-scale operation, our platform scales with you." },
  { title: "Real-Time Brewing Insights", desc: "Monitor every stage of production with live data and predictive analytics." },
  { title: "Scalable Operations", desc: "Grow from a single location to a multi-site enterprise without changing systems." },
];

const WhyChooseUsSection = () => {
  const ref = useGsapFadeIn();
  const parallaxRef = useParallax(0.2);

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img ref={parallaxRef} src={hero2} alt="" className="w-full h-[130%] object-cover opacity-20 -mt-[15%]" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">Why Choose Us</p>
          <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold">
            The <span className="text-gradient">BrewMaster</span> Advantage
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="gsap-fade bg-card/80 backdrop-blur border border-border rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-heading font-bold">
                {i + 1}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
