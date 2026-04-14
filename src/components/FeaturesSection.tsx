import { useGsapScale } from "@/hooks/useGsap";
import featuresImg from "@/assets/features.jpg";

const features = [
  { icon: "🔬", title: "Batch Tracking System", desc: "Monitor every batch from mash to fermentation with precision." },
  { icon: "📦", title: "Inventory Management", desc: "Real-time stock levels for raw materials and finished products." },
  { icon: "📈", title: "Sales Analytics", desc: "Comprehensive insights into revenue, trends, and forecasts." },
  { icon: "🌐", title: "Multi-Location Control", desc: "Manage multiple brewery sites from a single dashboard." },
  { icon: "⚙️", title: "Production Insights", desc: "Optimize brewing schedules and equipment utilization." },
];

const FeaturesSection = () => {
  const ref = useGsapScale();

  return (
    <section id="features" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-scale text-primary font-semibold uppercase tracking-widest text-sm mb-3">Features</p>
          <h2 className="gsap-scale font-heading text-3xl md:text-5xl font-bold">
            Everything You Need to <span className="text-gradient">Brew Smarter</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="gsap-scale flex gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300">
                <span className="text-2xl shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="gsap-scale overflow-hidden rounded-2xl sticky top-24">
            <img src={featuresImg} alt="Brewery analytics dashboard" loading="lazy" width={1280} height={720} className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
