const Footer = () => (
  <footer className="border-t border-border py-12 bg-card/50">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold text-gradient mb-4">BrewMaster</h3>
          <p className="text-muted-foreground text-sm">Complete digital solution for modern breweries. By Clickmasters.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="#about" className="block hover:text-primary transition-colors">About</a>
            <a href="#features" className="block hover:text-primary transition-colors">Features</a>
            <a href="#services" className="block hover:text-primary transition-colors">Services</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Resources</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="#casestudies" className="block hover:text-primary transition-colors">Case Studies</a>
            <a href="#blog" className="block hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>info@clickmasters.com</p>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
        © 2026 BrewMaster by Clickmasters. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
