import { useState } from "react";

const services = [
  { title: "Websites That Convert Visitors into Clients", desc: "Custom websites, web apps, landing pages" },
  { title: "SEO That Brings Consistent Traffic", desc: "Rank higher, drive organic traffic" },
  { title: "Branding That Builds Trust", desc: "Identity design, logo, brand strategy" },
  { title: "Marketing That Drives Growth", desc: "Campaigns that convert" },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16">
          What We <span className="text-primary">Do</span>
        </h2>

        <div className="space-y-4">
          {services.map((s, i) => (
            <div key={i} className="scroll-reveal border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1">
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div>
                  <span className="text-primary font-heading font-bold text-lg mr-4">0{i + 1}</span>
                  <span className="font-heading font-bold text-xl md:text-2xl text-foreground">{s.title}</span>
                </div>
                <svg
                  className={`w-6 h-6 text-primary transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{ maxHeight: open === i ? "300px" : "0" }}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
