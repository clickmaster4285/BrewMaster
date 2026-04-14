import { useGsapFadeIn } from "@/hooks/useGsap";
import solutionImg from "@/assets/solution.jpg";

const SolutionSection = () => {
  const ref = useGsapFadeIn();

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">The Solution</p>
            <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold mb-6">
              From Grain to Glass — <span className="text-gradient">Digitally Perfected</span>
            </h2>
            <p className="gsap-fade text-foreground/70 leading-relaxed mb-6">
              Our integrated brewery management platform handles everything from production scheduling and batch tracking to sales analytics and inventory — all in one seamless dashboard.
            </p>
            <div className="gsap-fade flex flex-wrap gap-3">
              {["Brewing", "Inventory", "Sales", "Analytics"].map((tag) => (
                <span key={tag} className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="gsap-fade overflow-hidden rounded-2xl glow-amber">
            <img src={solutionImg} alt="Brewery management dashboard" loading="lazy" width={1280} height={720} className="w-full h-80 md:h-[450px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
