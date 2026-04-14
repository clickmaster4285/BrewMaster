import { useState } from "react";
import { useGsapFadeIn } from "@/hooks/useGsap";
import servicesImg from "@/assets/services.jpg";

const ContactSection = () => {
  const ref = useGsapFadeIn();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-fade text-primary font-semibold uppercase tracking-widest text-sm mb-3">Contact</p>
          <h2 className="gsap-fade font-heading text-3xl md:text-5xl font-bold">
            Let's Brew <span className="text-gradient">Something Great</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="gsap-fade overflow-hidden rounded-2xl">
            <img src={servicesImg} alt="Contact us" loading="lazy" width={1280} height={720} className="w-full h-80 md:h-[450px] object-cover" />
          </div>
          <div className="gsap-fade">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🍺</div>
                <h3 className="font-heading text-2xl font-bold mb-2">Thanks for reaching out!</h3>
                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1.5 block">Full Name</label>
                  <input type="text" required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1.5 block">Email</label>
                  <input type="email" required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="john@brewery.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1.5 block">Brewery Name</label>
                  <input type="text" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Mountain Peak Brewing" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground/70 mb-1.5 block">Message</label>
                  <textarea rows={4} required className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your brewery..." />
                </div>
                <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-amber-light transition-colors duration-300 glow-amber">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
