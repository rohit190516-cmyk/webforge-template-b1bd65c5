import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission failed:", error);
    } finally {
      setPending(false);
    }
  };

  const glassInputClass = "bg-background/40 border-white/10 backdrop-blur-xl focus-visible:border-primary/50 focus-visible:ring-primary/20 focus-visible:shadow-[0_0_15px_rgba(234,179,8,0.15)] transition-all";

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
                
                {/* Web3Forms Hidden Fields */}
                <input type="hidden" name="access_key" value="a2503466-049a-42d4-8323-157c856a8202" />
                <input type="hidden" name="subject" value="New Lead from WebForge" />
                <input type="hidden" name="from_name" value="WebForge Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" required className={glassInputClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="Your Email" required className={glassInputClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project">Project Type</Label>
                  <Input id="project" name="project" placeholder="Web Development, SEO..." className={glassInputClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className={`min-h-[120px] ${glassInputClass}`}
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Button
                    type="submit"
                    className="w-full h-12 text-lg font-semibold gap-2 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                    disabled={pending}
                  >
                    {pending ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>
                  
                  {status === "success" && (
                    <div className="text-emerald-500 text-sm font-medium text-center bg-emerald-500/10 py-2 rounded-lg border border-emerald-500/20">
                      Message sent successfully!
                    </div>
                  )}
                  {status === "error" && (
                    <div className="text-destructive text-sm font-medium text-center bg-destructive/10 py-2 rounded-lg border border-destructive/20">
                      Something went wrong. Please try again.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
