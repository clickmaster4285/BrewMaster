import { useGsapScale } from "@/hooks/useGsap";
import painImg from "@/assets/painpoints.jpg";
import { ClipboardList, Package, Clock, BarChart3 } from "lucide-react";

const pains = [
  { icon: ClipboardList, text: "Batch tracking getting messy?" },
  { icon: Package, text: "Stock inconsistencies?" },
  { icon: Clock, text: "Manual processes slowing production?" },
  { icon: BarChart3, text: "Lack of real-time insights?" },
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
              <div 
                key={i} 
                className="gsap-scale group bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <pain.icon className="w-8 h-8 text-primary mb-3 block stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground font-medium text-base md:text-lg group-hover:text-primary transition-colors">
                  {pain.text}
                </p>
              </div>
            ))}
          </div>
          <div className="gsap-scale overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={painImg} 
              alt="Brewery challenges" 
              loading="lazy" 
              width={1280} 
              height={720} 
              className="w-full h-80 md:h-[450px] object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;