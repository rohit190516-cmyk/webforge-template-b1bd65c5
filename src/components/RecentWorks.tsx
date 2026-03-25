const works = [
  {
    num: "01", cat: "shopping website", title: "vizeronline",
    desc: "Experience the fusion of technology and elegance in every sip. Intelligent hydration experience.",
    metrics: ["Tech-Fused", "Smart Hydration"],
    color: "from-zinc-800 via-slate-900 to-black",
    link: "https://vizeronline.co.in"
  },
  {
    num: "02", cat: "web development", title: "Natures Flow",
    desc: "Nature's Flow - Pure Water, Pure Bliss",
    metrics: ["Purity 100%", "Delivery 24/7"],
    color: "from-blue-600 to-cyan-500",
    link: "https://nature-flow-water.vercel.app/"
  },
  {
    num: "03", cat: "SEO", title: "Retail Brand Growth",
    desc: "Drove 3x organic traffic in 6 months for a retail brand.",
    metrics: ["Traffic +200%", "Rankings #1-3"],
    color: "from-orange-600 to-amber-500",
    link: "#"
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
            <a 
              key={w.num} 
              href={w.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="scroll-reveal group block bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`aspect-video bg-gradient-to-br ${w.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-heading font-extrabold text-sm tracking-tighter">{w.num}</span>
                  <div className="h-px w-8 bg-border" />
                  <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-[0.2em]">{w.cat}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{w.desc}"</p>
                <div className="flex flex-wrap gap-2">
                  {w.metrics.map((m) => (
                    <span key={m} className="text-[10px] bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
