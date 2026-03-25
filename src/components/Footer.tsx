const quickLinks = ["Home", "About", "Services", "Work", "Contact"];
const serviceLinks = ["Web Dev", "SEO", "Branding", "Digital Marketing"];
const socialLinks = ["Instagram", "LinkedIn", "Twitter/X"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-primary/30 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-heading font-bold text-2xl text-foreground mb-4">WebForge</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Turning ideas into powerful digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l} className="text-muted-foreground text-sm">{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Social</h4>
            <ul className="space-y-2">
              {socialLinks.map((l) => (
                <li key={l}><a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-heading font-bold text-foreground mb-3 text-sm">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-card border border-border rounded-l-lg px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary flex-1 min-w-0"
                />
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg font-semibold text-sm hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          © 2025 WebForge. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
