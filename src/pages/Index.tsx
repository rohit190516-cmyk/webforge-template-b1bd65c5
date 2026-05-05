import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesAccordion from "@/components/ServicesAccordion";
import Process from "@/components/Process";
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
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Index() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <ServicesAccordion />
      <Process />
      <AboutStats />
      <Marquee />
      <RecentWorks />
      
      {/* Blog Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16 scroll-reveal">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Insights from Our <span className="text-primary">Digital Experts</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Stay ahead of the curve with our latest thoughts on web development, 
                e-commerce strategy, and design trends.
              </p>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
              View All Posts <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "How much does a website cost in India?", slug: "website-cost-in-india", category: "Business" },
              { title: "Shopify vs custom website: which is better?", slug: "shopify-vs-custom-website", category: "Ecommerce" },
              { title: "How to choose a website development agency", slug: "how-to-choose-website-agency", category: "Guides" }
            ].map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} className="scroll-reveal group block p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">{post.category}</span>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Achievements />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 scroll-reveal">
            Ready to Build Your <span className="text-white">Digital Empire?</span>
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto scroll-reveal">
            As a leading website development agency in India, we're ready to take 
            your brand to the next level. Let's create something extraordinary together.
          </p>
          <div className="flex flex-wrap justify-center gap-6 scroll-reveal">
            <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-zinc-100 transition-all">
              Get Started Now
            </Link>
            <Link to="/website-development-agency" className="border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </div>
  );
}
