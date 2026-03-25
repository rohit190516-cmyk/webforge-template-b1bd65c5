import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesAccordion from "@/components/ServicesAccordion";
import AboutStats from "@/components/AboutStats";
import Marquee from "@/components/Marquee";
import RecentWorks from "@/components/RecentWorks";
import Testimonials from "@/components/Testimonials";
import Achievements from "@/components/Achievements";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Index() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <ServicesAccordion />
      <AboutStats />
      <Marquee />
      <RecentWorks />
      <Testimonials />
      <Achievements />
      <Pricing />
      <Team />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
