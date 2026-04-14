import { useGsapScale } from "@/hooks/useGsap";
import blogImg from "@/assets/blog.jpg";
import solutionImg from "@/assets/solution.jpg";
import featuresImg from "@/assets/features.jpg";

const posts = [
  { img: blogImg, title: "How Technology Is Transforming Breweries", date: "Mar 15, 2026", excerpt: "From IoT sensors to AI-driven analytics, discover how modern breweries are leveraging tech." },
  { img: solutionImg, title: "Inventory Tips for Craft Brewers", date: "Mar 8, 2026", excerpt: "Practical strategies for managing raw materials and reducing waste in small-batch operations." },
  { img: featuresImg, title: "The Future of Brewery POS Systems", date: "Feb 28, 2026", excerpt: "What to look for in a modern POS system designed specifically for taproom operations." },
];

const BlogSection = () => {
  const ref = useGsapScale();

  return (
    <section id="blog" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="gsap-scale text-primary font-semibold uppercase tracking-widest text-sm mb-3">Blog</p>
          <h2 className="gsap-scale font-heading text-3xl md:text-5xl font-bold">
            Latest <span className="text-gradient">Insights</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article key={i} className="gsap-scale bg-card border border-border rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <div className="overflow-hidden h-48">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={720} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-xs mb-2">{p.date}</p>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
