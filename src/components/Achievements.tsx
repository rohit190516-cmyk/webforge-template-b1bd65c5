const impacts = [
  { icon: "✔", title: "Helped 20+ businesses go online" },
  { icon: "✔", title: "Built brands from scratch" },
  { icon: "✔", title: "Delivered fast & clean websites" },
  { icon: "✔", title: "Growing with every client" },
];

export default function Achievements() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          Early <span className="text-primary">Growth & Impact</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, i) => (
            <div key={i} className="scroll-reveal bg-card border border-border rounded-xl p-8 flex flex-col items-center text-center hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="font-heading font-bold text-lg leading-tight text-foreground">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
