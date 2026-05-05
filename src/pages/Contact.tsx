import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl mb-8 break-words">
              Let's Start Your <span className="text-primary">Next Project</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're looking for a website development agency in India to build your next 
              big idea or need expert digital agency services to scale your brand, we're here to help.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
