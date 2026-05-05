import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  { 
    title: "Website Development Agency Services", 
    desc: "Custom websites, web apps, and landing pages designed to convert visitors into clients.",
    link: "/website-development-agency"
  },
  { 
    title: "Shopify Development & Scaling", 
    desc: "Expert Shopify development for brands looking to scale their e-commerce operations.",
    link: "/shopify-development-agency"
  },
  { 
    title: "Ecommerce Website Development", 
    desc: "Strategic e-commerce solutions built for global growth and high performance.",
    link: "/ecommerce-website-development"
  },
  { 
    title: "Web Design & UI/UX Strategy", 
    desc: "Data-driven web design that builds trust and drives brand identity.",
    link: "/web-design-agency"
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="scroll-reveal font-heading font-bold text-3xl sm:text-4xl md:text-6xl text-foreground mb-16 break-words">
          Our <span className="text-primary">Expertise</span>
        </h2>

        <div className="space-y-4">
          {services.map((s, i) => (
            <div key={i} className="scroll-reveal border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 bg-card/30">
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
                  <p className="text-muted-foreground mb-6 max-w-2xl">{s.desc}</p>
                  <Link 
                    to={s.link}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
