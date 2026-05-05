import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShoppingBag, ArrowRight, Zap, Shield, BarChart3, Users } from "lucide-react";

export default function ShopifyDevelopment() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#96bf48]/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 break-words">
              Expert <span className="text-[#96bf48]">Shopify Development Agency</span> for Scaling E-commerce Brands
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We build custom Shopify stores that don't just look stunning but are engineered for maximum conversions. 
              As a specialized Shopify development agency, we help brands launch, scale, and dominate the online marketplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-[#96bf48] text-white px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                Launch Your Store
              </a>
              <a href="#solutions" className="border border-[#96bf48]/30 text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#96bf48]/10 transition-all">
                Shopify Solutions
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
                <h2 className="text-3xl font-bold mb-6">Why Shopify is the Gold Standard for E-commerce</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Choosing the right platform is the most critical decision for any e-commerce business. 
                  Shopify provides a robust, secure, and highly scalable foundation that allows you to focus 
                  on selling while the platform handles the technical heavy lifting. However, to truly stand 
                  out in a crowded market, a standard template isn't enough.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a premier Shopify development agency, we take Shopify's powerful features and supercharge them. 
                  We build custom themes, develop private apps, and optimize every pixel of your store to ensure 
                  a seamless shopping experience that keeps customers coming back.
                </p>
              </div>

              {/* What We Offer */}
              <div className="scroll-reveal" id="solutions">
                <h2 className="text-3xl font-bold mb-6">Our Shopify Development Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: <Zap />, title: "Custom Theme Development", desc: "Unique, brand-aligned themes built from scratch using Liquid and modern frontend tools." },
                    { icon: <Shield />, title: "Shopify Plus Scaling", desc: "Expert solutions for high-volume merchants looking to leverage Shopify Plus features." },
                    { icon: <BarChart3 />, title: "App Integration & Dev", desc: "Seamless integration of third-party apps or custom-built private apps for unique functionality." },
                    { icon: <ShoppingBag />, title: "Store Migration", desc: "Safe and secure migration from WooCommerce, Magento, or other platforms to Shopify." }
                  ].map((service, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-xl">
                      <div className="text-[#96bf48] mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-depth content for word count */}
              <div className="scroll-reveal prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">Building High-Conversion Shopify Experiences</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A successful Shopify store is more than just a checkout page. It's about storytelling, trust-building, 
                  and frictionless navigation. Our Shopify development agency focuses on the psychology of online 
                  shopping. We implement features like advanced filtering, dynamic product bundles, and upsell 
                  funnels that are proven to increase Average Order Value (AOV).
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Mobile-First Shopify Commerce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over 70% of e-commerce traffic now comes from mobile devices. If your store isn't optimized for 
                  thumb-navigation and fast mobile loading, you're losing money. We use "Mobile-First" principles 
                  in our Shopify development process, ensuring that the mobile experience is as powerful as the 
                  desktop one. From fast-loading product images to simplified checkout flows (Shop Pay, Apple Pay), 
                  we make buying easy.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Headless Shopify: The Future of Commerce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For brands that require ultimate flexibility and speed, we offer Headless Shopify solutions. 
                  By decoupling the Shopify backend from a custom React or Next.js frontend, we can achieve 
                  near-instant page loads and complete creative freedom. This is the choice for top-tier brands 
                  who want a unique digital experience that traditional themes cannot provide.
                </p>
              </div>

              {/* Who It's For */}
              <div className="scroll-reveal bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Who Our Shopify Agency Works With</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="text-[#96bf48]" />
                      <h4 className="text-xl font-bold">D2C Brands</h4>
                    </div>
                    <p className="text-muted-foreground">Startups and established brands looking to own their customer data and brand experience.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="text-[#96bf48]" />
                      <h4 className="text-xl font-bold">High-Volume Merchants</h4>
                    </div>
                    <p className="text-muted-foreground">Businesses doing $1M+ in annual revenue that need stability and advanced automation.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-8">Shopify Development FAQs</h2>
                <div className="space-y-6">
                  {[
                    { q: "Why should I hire a Shopify development agency instead of using a theme?", a: "While themes are a good start, a custom-developed store allows for better performance, unique branding, and specialized functionality that scales with your business." },
                    { q: "Can you help with Shopify SEO?", a: "Yes. Shopify has great SEO features, but they need to be configured correctly. We handle technical SEO, schema markup, and site speed optimization." },
                    { q: "How much does a custom Shopify store cost?", a: "Costs vary based on requirements, but typically range from $3,000 for a high-end custom theme to $15,000+ for complex Shopify Plus or Headless builds." }
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
              <div className="p-8 bg-[#96bf48] rounded-2xl text-white sticky top-32">
                <h3 className="text-2xl font-bold mb-4">Scale Your Store with Experts</h3>
                <p className="mb-6 opacity-90">
                  Ready to transform your Shopify store into a high-performance sales machine?
                </p>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-white text-[#96bf48] px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all">
                  Let's Talk Shopify <ArrowRight size={20} />
                </a>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-4">
                  <li><a href="/ecommerce-website-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Ecommerce Development</a></li>
                  <li><a href="/website-development-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Web Development</a></li>
                  <li><a href="/web-design-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> UI/UX Design</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
