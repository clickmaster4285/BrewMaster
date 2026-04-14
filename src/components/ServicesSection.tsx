import { useGsapFadeIn } from "@/hooks/useGsap";
import servicesImg from "@/assets/services.jpg";

const services = [
  { icon: "💳", title: "Brewery POS", desc: "Fast, reliable point-of-sale systems designed for taprooms." },
  { icon: "📊", title: "Custom Dashboards", desc: "Tailored analytics dashboards for brewery operations." },
  { icon: "🤖", title: "Inventory Automation", desc: "Automated stock tracking and reorder notifications." },
  { icon: "☁️", title: "Cloud Integration", desc: "Seamless cloud connectivity for remote management." },
];

const ServicesSection = () => {
  const ref = useGsapFadeIn();

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">Services</p>
          <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold">
            What We <span className="text-gradient">Deliver</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="gsap-fade overflow-hidden rounded-2xl">
            <img src={servicesImg} alt="Brewery POS system" loading="lazy" width={1280} height={720} className="w-full h-80 object-cover" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="gsap-fade bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
