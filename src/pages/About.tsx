import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutStats from "@/components/AboutStats";
import Team from "@/components/Team";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl mb-8 break-words">
              We are <span className="text-primary">WebForge</span>. 
              We Build the Future of Digital Commerce.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Founded on the principles of technical excellence and strategic design, WebForge has 
              grown into a premier digital agency that helps brands navigate the complexities of 
              the modern web. We believe that every business deserves a website that is as 
              ambitious as its goals.
            </p>
          </div>
        </div>
      </section>

      <AboutStats />

      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: to empower businesses with high-performance digital solutions 
                that drive measurable growth. We combine the agility of a startup with the 
                expertise of a global agency to deliver results that matter.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a web where every interaction is seamless, every brand is authentic, 
                and every business has the tools it needs to succeed in a global marketplace.
              </p>
            </div>
            <div className="scroll-reveal relative aspect-square rounded-2xl overflow-hidden bg-primary/20">
               <div className="absolute inset-0 flex items-center justify-center text-primary font-heading font-bold text-4xl opacity-20 rotate-12">
                  WEBFORGE WEBFORGE WEBFORGE
               </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      <Footer />
    </div>
  );
}
