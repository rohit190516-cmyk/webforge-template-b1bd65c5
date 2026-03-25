import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="scroll-reveal">
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-foreground">
            Where Ideas Become{" "}
            <span className="text-primary">Digital Reality</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-lg leading-relaxed">
            We build powerful websites, grow your search presence, and craft brands that leave a mark.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg hover:brightness-110 transition-all group"
          >
            Get Started
            <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </a>

          {/* Avatars */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background"
                  style={{
                    background: `linear-gradient(135deg, hsl(${37 + i * 30} 70% 50%), hsl(${60 + i * 30} 60% 40%))`,
                  }}
                />
              ))}
            </div>
            <span className="text-muted-foreground text-sm font-medium">
              <span className="text-foreground font-semibold">500+</span> satisfied clients
            </span>
          </div>
        </div>

        {/* Right — image placeholder */}
        <div className="relative scroll-reveal" ref={imgRef}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden" style={{
            background: "linear-gradient(135deg, hsl(37 90% 55% / 0.3), hsl(0 0% 15%), hsl(37 50% 30% / 0.5))",
          }}>
            <div className="w-full h-full flex items-end justify-center p-8">
              <div className="w-3/4 h-2/3 rounded-xl" style={{
                background: "linear-gradient(180deg, hsl(0 0% 20%), hsl(0 0% 10%))",
              }} />
            </div>
          </div>
          {/* Rating badge */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-heading font-bold text-sm flex items-center gap-1 shadow-lg">
            5.0 ★
          </div>
        </div>
      </div>
    </section>
  );
}
