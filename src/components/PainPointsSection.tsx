import { useGsapScale } from "@/hooks/useGsap";
import painImg from "@/assets/painpoints.jpg";

const pains = [
  { icon: "📋", text: "Batch tracking getting messy?" },
  { icon: "📦", text: "Stock inconsistencies?" },
  { icon: "⏳", text: "Manual processes slowing production?" },
  { icon: "📊", text: "Lack of real-time insights?" },
];

const PainPointsSection = () => {
  const ref = useGsapScale();

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-scale text-primary font-semibold uppercase tracking-widest text-sm mb-3">Sound Familiar?</p>
          <h2 className="gsap-scale font-heading text-3xl md:text-5xl font-bold">
            Brewery <span className="text-gradient">Pain Points</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pains.map((pain, i) => (
              <div key={i} className="gsap-scale bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl mb-3 block">{pain.icon}</span>
                <p className="text-foreground font-medium">{pain.text}</p>
              </div>
            ))}
          </div>
          <div className="gsap-scale overflow-hidden rounded-2xl">
            <img src={painImg} alt="Brewery challenges" loading="lazy" width={1280} height={720} className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
