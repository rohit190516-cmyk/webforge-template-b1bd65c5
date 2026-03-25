const awards = [
  { icon: "🏆", name: "Best Web Agency", count: "2X", year: "2024" },
  { icon: "🏆", name: "Top SEO Company", count: "1X", year: "2024" },
  { icon: "🏆", name: "Creative Branding Award", count: "1X", year: "2023" },
];

export default function Achievements() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          <span className="text-primary">Recognition</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((a) => (
            <div key={a.name} className="scroll-reveal bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">{a.icon}</div>
              <div className="font-heading font-bold text-xl text-foreground mb-1">{a.count} {a.name}</div>
              <div className="text-muted-foreground text-sm">{a.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
