const testimonials = [
  { 
    text: "WebForge helped us build a strong and authentic online presence for Nature’s Flow. Our brand now truly connects with our audience.", 
    name: "Sunil Rai", 
    role: "Founder, Nature’s Flow" 
  },
  { 
    text: "From website to branding, WebForge handled everything perfectly. The final result exceeded our expectations.", 
    name: "Vedant Shukla", 
    role: "Owner, Vizer Online" 
  },
  { 
    text: "We started getting more local customers after our website went live. Simple, effective, and great support from the team.", 
    name: "Rajesh Kumar", 
    role: "Owner, Mega-Print" 
  },
  { 
    text: "WebForge built my website and personal brand from scratch. It gave me a professional identity and boosted my online growth.", 
    name: "Tanmay", 
    role: "Influencer (52K+ Followers)" 
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground">
          What Our Clients <span className="text-primary">Say</span>
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="animate-testimonial flex gap-6 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-80 md:w-96 shrink-0 bg-card border border-border rounded-2xl p-8 hover:-translate-y-2 transition-transform">
              <div className="text-primary text-5xl font-heading mb-4">"</div>
              <p className="text-foreground text-lg mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{
                  background: `linear-gradient(135deg, hsl(37 70% 50%), hsl(37 40% 30%))`,
                }} />
                <div>
                  <div className="text-foreground font-semibold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
