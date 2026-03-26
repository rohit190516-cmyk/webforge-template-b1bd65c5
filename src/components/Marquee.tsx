const items = ["Web Development", "SEO Optimization", "Branding", "Digital Marketing", "UI/UX Design"];
const strip = items.join(" • ") + " • ";

export default function Marquee() {
  return (
    <section className="relative min-h-[200px] md:min-h-[300px] flex items-center justify-center overflow-hidden bg-background my-0 md:my-16">
      {[false, true].map((reverse, idx) => (
        <div
          key={idx}
          className={`absolute w-[120vw] flex whitespace-nowrap py-4 md:py-6 shadow-2xl border-y border-border/50 ${idx === 0
              ? "bg-background -rotate-6 z-10"
              : "bg-primary rotate-6 z-20"
            }`}
        >
          <div className={reverse ? "animate-marquee-right flex" : "animate-marquee-left flex"}>
            <span className={`font-heading font-bold text-3xl md:text-5xl px-4 ${idx === 0 ? "text-foreground" : "text-primary-foreground"
              }`}>
              {strip}{strip}{strip}{strip}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
} 
