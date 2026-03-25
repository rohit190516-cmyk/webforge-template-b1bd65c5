const team = [
  { 
    name: "Krish Sharma", 
    role: "Full Stack Dev & Tech Lead",
    image: "/team/krish.png"
  },
  { name: "Rohit Yadav", role: "UI/UX Designer" },
  { name: "Ayush Rai", role: "SEO Optimizer" },
  { name: "Samarth", role: "Media Management" },
];

export default function Team() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          Meet the <span className="text-primary">Team</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <div key={t.name} className="scroll-reveal group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className="aspect-[3/4] relative overflow-hidden">
                {t.image ? (
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100" />
                ) : (
                  <div className="w-full h-full" style={{
                    background: `linear-gradient(180deg, hsl(${37 + i * 20} 40% 25%), hsl(0 0% 8%))`,
                  }} />
                )}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all z-10">
                  <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-primary transition-colors">𝕏</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-primary transition-colors">IG</a>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="font-heading font-bold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
