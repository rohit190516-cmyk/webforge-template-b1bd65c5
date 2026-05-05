import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShoppingCart, ArrowRight, CreditCard, ShieldCheck, Globe, Rocket } from "lucide-react";

export default function EcommerceDevelopment() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 break-words">
              Strategic <span className="text-primary">Ecommerce Website Development</span> for Global Growth
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Build a scalable online store that drives revenue. From custom commerce engines to enterprise-grade 
              platforms, we provide the technical expertise to turn your products into bestsellers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                Build Your Store
              </a>
              <a href="#process" className="border border-primary/30 text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">
                Our Process
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
                <h2 className="text-3xl font-bold mb-6">The Importance of Expert Ecommerce Website Development</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  E-commerce is no longer just about having a shopping cart; it's about creating a frictionless 
                  buying journey that builds brand loyalty. In an era where Amazon has set the bar for speed 
                  and convenience, your online store must be fast, intuitive, and secure. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a leading ecommerce website development agency, we don't just build websites; we build 
                  digital sales engines. We understand the nuances of inventory management, payment gateway 
                  security, and shipping logistics, ensuring that your backend is as robust as your frontend is beautiful.
                </p>
              </div>

              {/* What We Offer */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-6">Our Ecommerce Development Solutions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: <CreditCard />, title: "Payment Gateway Integration", desc: "Secure integration with Stripe, PayPal, Razorpay, and global merchant accounts." },
                    { icon: <ShieldCheck />, title: "Enterprise Security", desc: "SSL certification, PCI compliance, and data encryption to protect your customers." },
                    { icon: <Globe />, title: "Multi-Currency & Language", desc: "Scale globally with localized pricing, languages, and tax calculations." },
                    { icon: <Rocket />, title: "Performance Scaling", desc: "Optimized for high-traffic events like Black Friday and holiday sales." }
                  ].map((service, i) => (
                    <div key={i} className="p-6 bg-card border border-border rounded-xl">
                      <div className="text-primary mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-depth content for word count */}
              <div className="scroll-reveal prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">Mastering the Art of Conversion</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every second of delay in page load time can lead to a 7% reduction in conversions. Our ecommerce 
                  website development process is obsessed with speed. We use advanced caching, content delivery 
                  networks (CDNs), and optimized database queries to ensure your products load instantly.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">User Experience (UX) in Ecommerce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design with "Buyer Intent" in mind. This means intuitive search with auto-suggestions, 
                  clear product descriptions with high-quality imagery, and a checkout process that requires 
                  minimal clicks. By reducing friction at every stage of the funnel, we help you lower your 
                  cart abandonment rate and increase your overall profitability.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Custom vs. Platform-Based Commerce</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While platforms like Shopify and WooCommerce are great for many, some businesses require a 
                  fully custom ecommerce website development approach. Whether it's a unique subscription 
                  model, a complex B2B portal, or a multi-vendor marketplace, we have the expertise to build 
                  bespoke commerce solutions using technologies like Node.js, GraphQL, and specialized commerce APIs.
                </p>
              </div>

              {/* Process Section */}
              <div className="scroll-reveal bg-card border border-border rounded-2xl p-8" id="process">
                <h2 className="text-3xl font-bold mb-8">Our 5-Step Ecommerce Development Process</h2>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Discovery & Strategy", desc: "We analyze your products, target market, and competition to define the technical requirements." },
                    { step: "02", title: "UI/UX Design", desc: "We create high-fidelity wireframes focused on product discoverability and easy checkout." },
                    { step: "03", title: "Development & Integration", desc: "Our team builds the store, integrates payment gateways, and sets up inventory management." },
                    { step: "04", title: "Testing & QA", desc: "Rigorous testing across devices to ensure security, speed, and functional perfection." },
                    { step: "05", title: "Launch & Support", desc: "We go live and provide ongoing maintenance to ensure your store stays competitive." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <span className="text-primary font-bold text-2xl">{item.step}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-8">Ecommerce Development FAQs</h2>
                <div className="space-y-6">
                  {[
                    { q: "Which ecommerce platform is right for me?", a: "This depends on your scale. We typically recommend Shopify for D2C brands, WooCommerce for content-heavy sites, and custom builds for unique enterprise needs." },
                    { q: "How do you ensure the security of my customer data?", a: "We implement SSL encryption, PCI-compliant payment processing, and regular security audits to keep your store safe." },
                    { q: "Can you integrate with my existing ERP/CRM?", a: "Yes, we specialize in connecting your ecommerce store with tools like Salesforce, HubSpot, SAP, and various inventory management systems." }
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
                <h3 className="text-2xl font-bold mb-4">Start Selling Globally Today</h3>
                <p className="mb-6 opacity-90">
                  Ready to build an online store that grows your business 24/7?
                </p>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all">
                  Get a Free Quote <ArrowRight size={20} />
                </a>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Explore More</h3>
                <ul className="space-y-4">
                  <li><a href="/shopify-development-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Shopify Development</a></li>
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
