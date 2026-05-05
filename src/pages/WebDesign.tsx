import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Palette, ArrowRight, MousePointer2, Layout, Layers, Eye } from "lucide-react";

export default function WebDesign() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 break-words">
              Strategic <span className="text-primary">Web Design Agency</span> for Bold, High-Converting Brands
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We create visually stunning, user-centric designs that capture attention and drive action. 
              As a premier web design agency, we blend artistic creativity with data-driven strategy 
              to build digital identities that last.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
                Start Designing
              </a>
              <a href="#portfolio" className="border border-primary/30 text-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-all">
                View Portfolio
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
                <h2 className="text-3xl font-bold mb-6">Why Design is the Heart of Your Digital Presence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  It takes a user only 50 milliseconds (that's 0.05 seconds) to form an opinion about your website 
                  that determines whether they'll stay or leave. Good design isn't just about "looking pretty"—it's 
                  about credibility, usability, and conversion.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a leading web design agency, we understand that every color choice, typography pairing, 
                  and layout decision must serve a purpose. We design digital experiences that guide users 
                  naturally toward your business goals while making your brand unforgettable.
                </p>
              </div>

              {/* What We Offer */}
              <div className="scroll-reveal" id="portfolio">
                <h2 className="text-3xl font-bold mb-6">Our Web Design Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: <MousePointer2 />, title: "UI/UX Design", desc: "User interface and user experience design focused on intuitive navigation and engagement." },
                    { icon: <Layout />, title: "Responsive Layouts", desc: "Pixel-perfect designs that adapt seamlessly to smartphones, tablets, and desktops." },
                    { icon: <Layers />, title: "Brand Identity", desc: "Logo design, color palettes, and visual style guides that define your brand's personality." },
                    { icon: <Eye />, title: "Prototype Development", desc: "Interactive Figma prototypes that allow you to feel the user journey before development starts." }
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
                <h2 className="text-3xl font-bold mb-6">The Psychology of Effective Web Design</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our web design agency employs psychological principles like Hick's Law, the F-Pattern, and 
                  Color Theory to influence user behavior. By understanding how the human eye scans a page 
                  and how different colors evoke specific emotions, we create designs that resonate on a 
                  subconscious level.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">User-Centric (UX) Research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Before we open Figma, we research. We look at your industry standards, competitor weaknesses, 
                  and user expectations. This research-heavy approach ensures that the final design isn't just 
                  a reflection of our taste, but a solution to your users' problems. A truly effective web 
                  design agency knows that the best design is the one that works for the user.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Accessibility and Inclusivity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great design is for everyone. We adhere to WCAG (Web Content Accessibility Guidelines) to 
                  ensure that your website is usable by people with disabilities. This includes proper 
                  color contrast, screen-reader-friendly structures, and keyboard navigability. Not only 
                  is this the right thing to do, but it also improves your SEO and expands your reach.
                </p>
              </div>

              {/* Benefits */}
              <div className="scroll-reveal bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Benefits of a Professional Web Design Agency</h2>
                <ul className="space-y-4">
                  {[
                    "Enhanced Brand Perception and Trust",
                    "Lower Bounce Rates and Higher Session Duration",
                    "Improved SEO through Better User Experience Metrics",
                    "Consistent Visual Language across all Digital Touchpoints",
                    "Future-proof Design that Scales with your Brand"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Palette className="text-primary mt-1 flex-shrink-0" size={24} />
                      <span className="text-lg text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="scroll-reveal">
                <h2 className="text-3xl font-bold mb-8">Web Design FAQs</h2>
                <div className="space-y-6">
                  {[
                    { q: "What is the difference between UI and UX?", a: "UI (User Interface) focuses on the look and feel—the buttons, colors, and fonts. UX (User Experience) focuses on how the user interacts with the site and the overall logic of the journey." },
                    { q: "Do you design in Figma?", a: "Yes, Figma is our primary tool. It allows for real-time collaboration and easy handoff to developers." },
                    { q: "Can you redesign my existing website?", a: "Absolutely. We specialize in taking outdated sites and transforming them into modern, high-performing digital assets." }
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
                <h3 className="text-2xl font-bold mb-4">Elevate Your Visual Identity</h3>
                <p className="mb-6 opacity-90">
                  Ready to create a website that looks as good as your business performs?
                </p>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-all">
                  Get a Design Consultation <ArrowRight size={20} />
                </a>
              </div>

              <div className="p-8 bg-card border border-border rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
                <ul className="space-y-4">
                  <li><a href="/website-development-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Web Development</a></li>
                  <li><a href="/shopify-development-agency" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Shopify Development</a></li>
                  <li><a href="/ecommerce-website-development" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowRight size={16} /> Ecommerce Development</a></li>
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
