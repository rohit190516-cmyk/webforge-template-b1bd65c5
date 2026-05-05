import React from "react";
import { CheckCircle2, Search, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and competition to create a roadmap for your digital success."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    desc: "Our design team creates high-fidelity wireframes and interactive prototypes focused on conversion and user engagement."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Development",
    desc: "We bring designs to life using modern technologies like React, Next.js, and Shopify, ensuring speed, security, and scalability."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Growth",
    desc: "After rigorous testing, we launch your site and provide ongoing SEO and marketing support to drive organic leads."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6 break-words">
            Our <span className="text-primary">Proven Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As a leading website development agency in India, we follow a structured 
            approach to ensure every project is delivered with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="scroll-reveal relative p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all group">
              <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
