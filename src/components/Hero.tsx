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
              <span className="text-foreground font-semibold">20+</span> satisfied clients
            </span>
          </div>
        </div>

        {/* Right — 3D UI Composition */}
        <div className="relative scroll-reveal" ref={imgRef}>
          <div className="aspect-[4/5] relative">
            {/* Organic Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-primary to-orange-600 rounded-[40% 60% 70% 30% / 40% 50% 60% 50%] opacity-40 animate-blob" />

            {/* Floating Panels */}
            {/* Top: On Boarding */}
            <div className="absolute top-[10%] left-[10%] w-[70%] bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-tighter">On Boarding</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-20 bg-white/5 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  <div className="flex flex-col justify-end p-2 h-full">
                    <div className="w-2/3 h-2 bg-white/20 rounded-full mb-1" />
                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="h-20 bg-white/5 rounded-lg p-2 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-white/10" />
                    <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="h-4 bg-white/5 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Analytics */}
            <div className="absolute top-[40%] right-[5%] w-[65%] bg-black/40 backdrop-blur-2xl border border-white/10 rounded-xl p-5 shadow-3xl rotate-[3deg] hover:rotate-0 transition-transform duration-700">
              <div className="mb-4">
                <div className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">Growth</div>
                <div className="text-sm font-bold text-white">Analytics Dashboard</div>
              </div>
              <div className="flex items-end gap-3 h-24">
                {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-primary/40 rounded-t-sm relative group"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute inset-0 bg-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Left: Wireframes */}
            <div className="absolute bottom-[10%] left-[5%] w-[55%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="text-[10px] font-bold text-white/40 mb-3 border-b border-white/5 pb-1">WIREFRMS</div>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <div className="aspect-square w-8 bg-primary/10 border border-primary/20 rounded" />
                  <div className="flex-1 space-y-1.5 py-1">
                    <div className="w-full h-1.5 bg-white/10 rounded-full" />
                    <div className="w-1/2 h-1.5 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="w-full h-12 border border-dashed border-white/10 rounded-lg" />
              </div>
            </div>

            {/* Bottom Right: Mobile Screen */}
            <div className="absolute bottom-[5%] right-[10%] w-[30%] aspect-[9/19] bg-zinc-900 border-[3px] border-zinc-700/50 rounded-[2rem] p-2 shadow-2xl rotate-2 skew-y-2 hover:rotate-0 hover:skew-y-0 transition-all duration-700 group">
              <div className="w-1/3 h-1 bg-zinc-800 rounded-full mx-auto mb-2" />
              <div className="space-y-2 px-1">
                <div className="w-full aspect-square bg-white/5 rounded-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-orange-400/20" />
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full" />
                <div className="w-2/3 h-2 bg-white/5 rounded-full" />
                <div className="flex gap-2 mt-2">
                  <div className="w-full h-6 bg-primary/20 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
