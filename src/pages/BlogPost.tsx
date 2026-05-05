import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  
  useScrollReveal();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>
            
            <div className="scroll-reveal mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={16} /> {post.author}</span>
              </div>
              
              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-6xl leading-tight mb-8 break-words">
                {post.title}
              </h1>
            </div>

            <div className="scroll-reveal aspect-video bg-card border border-border rounded-3xl mb-12 flex items-center justify-center">
               <span className="text-primary/10 font-heading font-bold text-6xl rotate-3">
                  {post.category}
               </span>
            </div>

            <div 
              className="scroll-reveal prose prose-invert prose-lg max-w-none 
                prose-headings:font-heading prose-headings:font-bold 
                prose-a:text-primary hover:prose-a:brightness-110
                prose-strong:text-foreground prose-blockquote:border-primary
                prose-img:rounded-3xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="scroll-reveal mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="font-bold">Share this post:</span>
                <div className="flex gap-2">
                  {[Share2, MessageSquare].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-2xl p-6 flex-1 min-w-[300px]">
                <h4 className="font-bold mb-2">About the Author</h4>
                <p className="text-sm text-muted-foreground">
                  The {post.author} consists of industry experts dedicated to providing the best 
                  website development services in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
