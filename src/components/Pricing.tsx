const plans = [
  {
    name: "Starter",
    price: "₹25,000",
    per: "/project",
    popular: false,
    features: ["Landing Page", "Basic SEO", "5 Pages", "1 Revision Round"],
  },
  {
    name: "Growth",
    price: "₹75,000",
    per: "/project",
    popular: true,
    features: ["Full Website", "Advanced SEO", "Branding Kit", "Unlimited Revisions", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16 text-center">
          Simple <span className="text-primary">Pricing</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`scroll-reveal relative bg-card border rounded-2xl p-8 hover:-translate-y-2 transition-all ${
                p.popular ? "border-primary orange-glow" : "border-border"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-2xl text-foreground mb-2">{p.name}</h3>
              <div className="font-heading font-extrabold text-4xl text-primary mb-1">
                {p.price}
                <span className="text-muted-foreground text-base font-normal">{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground text-sm">
                    <span className="text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-lg font-semibold transition-all ${
                  p.popular
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
