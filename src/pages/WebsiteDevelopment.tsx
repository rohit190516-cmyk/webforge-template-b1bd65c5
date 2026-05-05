import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function WebsiteDevelopment() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 break-words">
              Full-Service <span className="text-primary">Website Development Agency</span> for High-Performance Brands
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We build scalable, high-converting, and SEO-optimized websites that turn visitors into loyal customers. 
              As a premier website development agency in India, we combine cutting-edge technology with strategic 
              design to deliver digital experiences that drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                Get a Free Audit
              </a>
              <a href="#services" className="border border-primary/30 text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-6">Why Your Business Needs a Professional Website Development Agency</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  In today's digital-first world, your website is often the first interaction a potential customer has with your brand. 
                  A slow, outdated, or poorly designed site doesn't just look bad—it actively hurts your bottom line. 
                  As a leading website development agency, we understand that a website is more than just a digital brochure; 
                  it's a powerful tool for lead generation, brand building, and customer retention.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of expert developers and designers works tirelessly to ensure your site is built on a solid foundation. 
                  We specialize in custom web development using the latest frameworks like React, Next.js, and TypeScript to ensure 
                  lightning-fast performance and seamless scalability.
                </p>
              </div>

              {/* What We Offer */}
              <div className="scroll-reveal" id="services">
                <h2 className="text-3xl font-bold mb-6">What We Offer: Comprehensive Web Development Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Custom Web Applications", desc: "Bespoke software solutions tailored to your unique business processes and requirements." },
                    { title: "Responsive Web Design", desc: "Websites that look and function perfectly on every device, from mobile phones to ultra-wide monitors." },
                    { title: "Progressive Web Apps (PWAs)", desc: "Combining the best of web and mobile apps for an offline-capable, high-speed user experience." },
                    { title: "Performance Optimization", desc: "Core Web Vitals focused optimization to ensure your site ranks high on Google and loads instantly." }
                  ].map((service, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-xl">
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-6">Benefits of Partnering with Our Agency</h2>
                <ul className="space-y-4">
                  {[
                    "Search Engine Optimization (SEO) built into the core architecture",
                    "Security-first development approach to protect your data",
                    "Conversion Rate Optimization (CRO) to maximize ROI",
                    "Seamless integration with your existing CRM and marketing tools",
                    "Dedicated support and maintenance after launch"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span className="text-lg text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* In-depth content for word count */}
              <div className="scroll-reveal prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">The Strategic Approach to Modern Web Development</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you choose WebForge as your website development agency, you're not just getting a group of coders. 
                  You're getting strategic partners who care about your business goals. We begin every project with a 
                  deep-dive discovery phase. We analyze your competitors, identify your target audience's pain points, 
                  and map out a user journey that leads directly to conversions.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">The Importance of Core Web Vitals</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Google's ranking algorithms now heavily weight user experience metrics known as Core Web Vitals. 
                  This includes Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). 
                  Most off-the-shelf templates and low-cost agencies ignore these factors, leading to poor search rankings. 
                  As a performance-oriented website development agency, we prioritize these metrics from day one. 
                  We use modern techniques like server-side rendering (SSR), image optimization, and code-splitting 
                  to ensure your site isn't just beautiful, but also technically superior.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Scalability and Future-Proofing</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your business won't stay the same size forever, and neither should your website. We build using 
                  modular architectures that allow for easy expansion. Whether you need to add a complex member portal, 
                  an e-commerce store, or a custom API integration down the road, our codebase is designed to grow 
                  with you without requiring a complete rewrite. This long-term thinking is what sets us apart as a 
                  truly professional website development agency.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="scroll-reveal bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    { q: "How long does it take to develop a custom website?", a: "A typical custom website project takes between 4 to 12 weeks depending on complexity, features, and content requirements." },
                    { q: "Will my website be mobile-friendly?", a: "Absolutely. We follow a mobile-first design approach to ensure your site works perfectly on all screen sizes." },
                    { q: "Do you provide SEO services along with development?", a: "Yes, as a full-service website development agency, we integrate on-page SEO best practices into every site we build." },
                    { q: "Can I update the content myself?", a: "Yes, we typically integrate user-friendly Content Management Systems (CMS) like Sanity, Contentful, or WordPress so you can manage your content easily." }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-border pb-6 last:border-0">
                      <h4 className="text-xl font-bold mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-8 bg-primary rounded-2xl text-primary-foreground sticky top-32">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Digital Future?</h3>
                <p className="mb-6 opacity-90">
                  Join 20+ brands that trust WebForge for high-performance web development.
                </p>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all">
                  Start Your Project <ArrowRight size={20} />
                </a>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Other Services</h3>
                <ul className="space-y-4">
                  <li><a href="/shopify-development-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Shopify Development</a></li>
                  <li><a href="/ecommerce-website-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> E-commerce Solutions</a></li>
                  <li><a href="/web-design-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> UI/UX Design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Footer />
    </div>
  );
}
