import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogListing() {
  useScrollReveal();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6 break-words">
            The <span className="text-primary">Forge</span> Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and industry secrets from a leading website development agency in India. 
            Helping you build better digital products.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <article key={post.id} className="scroll-reveal group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all flex flex-col">
                <div className="aspect-video bg-primary/10 flex items-center justify-center relative overflow-hidden">
                  <span className="text-primary font-heading font-bold text-2xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {post.category.toUpperCase()}
                  </span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-background/80 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-primary border border-primary/20">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                      Read More <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
