import { useGsapFadeIn } from "@/hooks/useGsap";
import hero1 from "@/assets/hero-1.jpg";

const steps = [
  { num: "01", title: "Consultation", desc: "We learn your brewery's unique workflow and challenges." },
  { num: "02", title: "Custom Setup", desc: "Tailored configuration to match your brewing operations." },
  { num: "03", title: "Integration", desc: "Seamless connection with your existing tools and equipment." },
  { num: "04", title: "Launch", desc: "Go live with full training and ongoing support." },
];

const HowItWorksSection = () => {
  const ref = useGsapFadeIn();

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">Process</p>
            <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold mb-10">
              How It <span className="text-gradient">Works</span>
            </h2>
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="gsap-fade flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-heading font-bold text-lg">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gsap-fade overflow-hidden rounded-2xl">
            <img src={hero1} alt="Brewery setup" loading="lazy" width={1920} height={1080} className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
