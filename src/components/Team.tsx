const team = [
  { name: "Krishna Sharma", role: "Founder & Tech Lead" },
  { name: "Rohit Yadav", role: "Relationship Manager" },
  { name: "Ayush Rai", role: "Call Executive" },
  { name: "Samarth", role: "Call Executive" },
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
              <div className="aspect-[3/4] relative" style={{
                background: `linear-gradient(180deg, hsl(${37 + i * 20} 40% 25%), hsl(0 0% 8%))`,
              }}>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 pb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <a href="#" className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground text-xs hover:bg-primary hover:text-primary-foreground transition-colors">𝕏</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground text-xs hover:bg-primary hover:text-primary-foreground transition-colors">IG</a>
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
