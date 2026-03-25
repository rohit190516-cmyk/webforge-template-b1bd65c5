const works = [
  {
    num: "01", cat: "Web Development", title: "E-Commerce Platform",
    desc: "Built a blazing-fast e-commerce platform from scratch.",
    metrics: ["Traffic +140%", "Satisfaction 98%"],
  },
  {
    num: "02", cat: "SEO", title: "Retail Brand Growth",
    desc: "Drove 3x organic traffic in 6 months for a retail brand.",
    metrics: ["Traffic +200%", "Rankings #1-3"],
  },
  {
    num: "03", cat: "Branding", title: "D2C Visual Identity",
    desc: "Crafted a full visual identity for a D2C startup.",
    metrics: ["Brand Recall +85%", "Engagement +60%"],
  },
];

export default function RecentWorks() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          Recent <span className="text-primary">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {works.map((w) => (
            <div key={w.num} className="scroll-reveal group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-400">
              <div className="aspect-video" style={{
                background: `linear-gradient(135deg, hsl(37 80% 40% / 0.4), hsl(0 0% 12%))`,
              }} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-primary font-heading font-bold text-sm">{w.num}</span>
                  <span className="text-muted-foreground text-xs uppercase tracking-wider">{w.cat}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{w.desc}</p>
                <div className="flex gap-2">
                  {w.metrics.map((m) => (
                    <span key={m} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
