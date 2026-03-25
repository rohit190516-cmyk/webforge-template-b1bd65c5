import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Brands Built" },
];

function AnimatedNumber({ target, active }: { target: number; active: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCurrent(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target]);

  return <>{current}</>;
}

export default function AboutStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="scroll-reveal">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            About <span className="text-primary">WebForge</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            WebForge is a results-driven digital agency. We turn ideas into powerful online experiences
            through clean code, smart SEO, and bold branding.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="scroll-reveal bg-card border border-border rounded-xl p-6 text-center hover:-translate-y-2 transition-transform">
              <div className="font-heading font-extrabold text-4xl md:text-5xl text-primary">
                <AnimatedNumber target={s.value} active={active} />
                {s.suffix}
              </div>
              <div className="text-muted-foreground text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
