const items = ["Web Development", "SEO Optimization", "Branding", "Digital Marketing", "UI/UX Design"];
const strip = items.join(" • ") + " • ";

export default function Marquee() {
  return (
    <section className="py-8 overflow-hidden border-y border-border">
      {[false, true].map((reverse, idx) => (
        <div 
          key={idx} 
          className={`flex whitespace-nowrap ${idx === 1 ? "mt-8 pt-8 border-t border-border/50" : ""}`}
        >
          <div className={reverse ? "animate-marquee-right" : "animate-marquee-left"}>
            <span className="font-heading font-bold text-2xl md:text-4xl text-foreground px-4">
              {strip}{strip}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
