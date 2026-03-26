import { Code2, LayoutTemplate, LineChart, Clapperboard } from "lucide-react";

const team = [
  {
    name: "Krish Sharma",
    role: "Full Stack Dev & Tech Lead",
    gradient: "from-blue-600/20 via-blue-900/10 to-transparent",
    orb: "bg-blue-600",
    borderClass: "group-hover:border-blue-500/30",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]",
    icon: <Code2 className="w-12 h-12 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500 ease-out" strokeWidth={1} />
  },
  {
    name: "Rohit Yadav",
    role: "UI/UX Designer & Manager",
    gradient: "from-purple-600/20 via-indigo-900/10 to-transparent",
    orb: "bg-purple-600",
    borderClass: "group-hover:border-purple-500/30",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)]",
    icon: <LayoutTemplate className="w-12 h-12 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-500 ease-out" strokeWidth={1} />
  },
  {
    name: "Ayush Rai",
    role: "SEO Optimizer",
    gradient: "from-emerald-600/20 via-teal-900/10 to-transparent",
    orb: "bg-emerald-600",
    borderClass: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
    icon: <LineChart className="w-12 h-12 text-emerald-400 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-500 ease-out" strokeWidth={1} />
  },
  {
    name: "Samarth",
    role: "Media Management",
    gradient: "from-orange-600/20 via-pink-900/10 to-transparent",
    orb: "bg-orange-500",
    borderClass: "group-hover:border-orange-500/30",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]",
    icon: <Clapperboard className="w-12 h-12 text-orange-400 group-hover:scale-110 group-hover:text-orange-300 transition-all duration-500 ease-out" strokeWidth={1} />
  },
];

export default function Team() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="scroll-reveal font-heading font-bold text-4xl md:text-6xl text-foreground mb-16 text-center md:text-left">
          Meet the <span className="text-primary">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <div
              key={t.name}
              className={`scroll-reveal relative group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${t.glow}`}
            >
              <div className={`relative h-[400px] bg-zinc-950/40 backdrop-blur-2xl border border-white/5 ${t.borderClass} flex flex-col items-center justify-center p-8 text-center transition-colors duration-500`}>

                {/* Background Gradient & Light Orbs */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${t.orb} opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity duration-700`} />
                <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full ${t.orb} opacity-10 blur-[60px] group-hover:opacity-30 transition-opacity duration-700`} />

                {/* Center Tech Icon Box */}
                <div className="flex-1 flex items-center justify-center w-full relative z-20">
                  <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:bg-white/10">
                    {t.icon}
                  </div>
                </div>

                {/* Footer Content */}
                <div className="relative z-20 mt-auto w-full pt-8 border-t border-white/5 group-hover:border-white/10 transition-colors duration-500">
                  <div className="font-heading font-bold text-xl text-foreground tracking-wide">{t.name}</div>
                  <div className="text-muted-foreground text-xs mt-2 uppercase tracking-widest font-semibold opacity-80">{t.role}</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
