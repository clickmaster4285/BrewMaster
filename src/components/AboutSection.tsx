import { useGsapFadeIn } from "@/hooks/useGsap";
import aboutImg from "@/assets/about.jpg";

const AboutSection = () => {
  const ref = useGsapFadeIn();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="gsap-fade overflow-hidden rounded-2xl">
            <img src={aboutImg} alt="Clickmasters team" loading="lazy" width={1280} height={720} className="w-full h-80 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div>
            <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">About Us</p>
            <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold mb-6">
              Crafting Software <span className="text-gradient">That Matters</span>
            </h2>
            <p className="gsap-fade text-foreground/70 leading-relaxed mb-4">
              Clickmasters began as a passionate team of developers with one vision — building meaningful software that solves real business problems. Today, we're a full-service software company delivering modern, scalable, and high-performance digital solutions.
            </p>
            <p className="gsap-fade text-foreground/70 leading-relaxed mb-4">
              From early-stage startups to established enterprises, each collaboration has refined our approach to building web, mobile, and cloud-based applications that are practical, scalable, and impact-driven.
            </p>
            <p className="gsap-fade text-foreground/70 leading-relaxed">
              As a leading software development company in Pakistan, we specialize in custom POS systems, cloud integrations, and enterprise platforms — empowering businesses with technology that drives performance, innovation, and long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
