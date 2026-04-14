import { useGsapScale } from "@/hooks/useGsap";
import casestudyImg from "@/assets/casestudy.jpg";
import hero3 from "@/assets/hero-3.jpg";

const cases = [
  {
    img: casestudyImg,
    title: "Mountain Peak Brewery",
    stat: "45% increase in production efficiency",
    desc: "Streamlined batch tracking and inventory reduced waste by 30% in the first quarter.",
  },
  {
    img: hero3,
    title: "Golden Valley Craft Co.",
    stat: "3x faster order processing",
    desc: "Our POS system transformed their taproom operations and boosted customer throughput.",
  },
];

const CaseStudiesSection = () => {
  const ref = useGsapScale();

  return (
    <section id="casestudies" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-scale text-primary font-semibold uppercase tracking-widest text-sm mb-3">Case Studies</p>
          <h2 className="gsap-scale font-heading text-3xl md:text-5xl font-bold">
            Brewery <span className="text-gradient">Success Stories</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="gsap-scale bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="overflow-hidden h-64">
                <img src={c.img} alt={c.title} loading="lazy" width={1280} height={720} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <p className="text-primary font-semibold text-sm mb-2">{c.stat}</p>
                <h3 className="font-heading font-bold text-2xl mb-3">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
