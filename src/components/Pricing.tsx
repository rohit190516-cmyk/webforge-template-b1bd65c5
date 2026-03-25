export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-8">
          Flexible <span className="text-primary">Pricing</span>
        </h2>
        <div className="scroll-reveal bg-card border border-border rounded-2xl p-12 md:p-16">
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Every project is unique. We offer custom pricing based on your specific goals and requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-heading font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20 group"
          >
            Get Custom Quote
            <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
