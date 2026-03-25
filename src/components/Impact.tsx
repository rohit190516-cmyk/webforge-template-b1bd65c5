const impactStats = [
  { value: "150%", label: "Average Traffic Increase", icon: "📈" },
  { value: "₹2Cr+", label: "Revenue Generated for Clients", icon: "💰" },
  { value: "200+", label: "Enhanced Brand Visibility", icon: "🚀" },
];

const pills = ["Long-Term Partnerships", "Personalization", "Fast Delivery", "Dedicated Support", "Transparent Process"];

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{
        background: "radial-gradient(circle, hsl(37 90% 55%), transparent)",
      }} />
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full opacity-5" style={{
        background: "radial-gradient(circle, hsl(37 90% 55%), transparent)",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          Our <span className="text-primary">Impact</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((s) => (
            <div key={s.label} className="scroll-reveal bg-card border border-border rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform">
              <div className="text-5xl mb-4">{s.icon}</div>
              <div className="font-heading font-extrabold text-4xl text-primary mb-2">{s.value}</div>
              <div className="text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="scroll-reveal flex flex-wrap gap-3 justify-center">
          {pills.map((p) => (
            <span key={p} className="border border-border text-muted-foreground px-5 py-2 rounded-full text-sm hover:border-primary hover:text-primary transition-colors">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
