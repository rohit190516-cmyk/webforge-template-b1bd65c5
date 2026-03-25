import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setTimeout(() => {
      setPending(false);
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground flex flex-col justify-center">
              <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
                Let's build something <span className="opacity-80 italic">extraordinary</span>.
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Ready to take your digital presence to the next level? Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center font-bold">1</div>
                  <span>Expert Consultation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center font-bold">2</div>
                  <span>Tailored Strategy</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center font-bold">3</div>
                  <span>Flawless Execution</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" required className="bg-background border-border" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" required className="bg-background border-border" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Type</Label>
                  <Input id="project" placeholder="Web Development, SEO..." className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[120px] bg-background border-border"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold gap-2"
                  disabled={pending}
                >
                  {pending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
