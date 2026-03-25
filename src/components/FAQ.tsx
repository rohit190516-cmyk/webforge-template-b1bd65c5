import { useState } from "react";

const faqs = [
  { q: "What services does WebForge offer?", a: "We offer web development, SEO optimization, branding, and digital marketing services to help your business grow online." },
  { q: "How long does a website project take?", a: "Typically 2-6 weeks depending on complexity. Landing pages can be delivered in as little as 1 week." },
  { q: "Do you provide SEO along with web development?", a: "Yes! All our web development packages include basic SEO. We also offer dedicated SEO packages for deeper optimization." },
  { q: "What is your pricing model?", a: "We offer project-based pricing starting at ₹25,000. Custom quotes available for larger projects." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We specialize in modern redesigns that improve both aesthetics and performance." },
  { q: "How do I get started with WebForge?", a: "Simply click 'Get Started' or reach out via our contact form. We'll schedule a free consultation call." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="scroll-reveal font-heading font-bold text-3xl md:text-5xl text-foreground mb-16 text-center">
          Got Questions? We've Got <span className="text-primary">Answers</span>.
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="scroll-reveal border border-border rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-foreground pr-4">{f.q}</span>
                <svg
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{ maxHeight: open === i ? "200px" : "0" }}
              >
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
