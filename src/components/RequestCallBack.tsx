import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Clock, User, Send } from "lucide-react";
import { toast } from "sonner";

interface RequestCallBackProps {
  buttonText?: string;
  className?: string;
}

export default function RequestCallBack({ 
  buttonText = "Request Call Back", 
  className = "" 
}: RequestCallBackProps) {
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const time = formData.get("time") as string;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "a2503466-049a-42d4-8323-157c856a8202",
          name,
          phone,
          preferred_time: time,
          subject: `Call Back Request from ${name}`,
          from_name: "WebForge Website",
          message: `Requesting a call back at ${time}. Phone: ${phone}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Request sent! We'll call you soon.");
        setOpen(false);
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send request.");
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  const inputClass = "bg-background/40 border-white/10 backdrop-blur-xl focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background/80 backdrop-blur-2xl border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 -z-10" />
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading font-bold">Request a Call Back</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your details below and our team will get in touch with you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="call-name" className="flex items-center gap-2">
                <User size={14} className="text-primary" /> Name
              </Label>
              <Input 
                id="call-name" 
                name="name" 
                placeholder="John Doe" 
                required 
                className={inputClass} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-phone" className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> Phone Number
              </Label>
              <Input 
                id="call-phone" 
                name="phone" 
                type="tel" 
                placeholder="+91 " 
                defaultValue="+91 "
                required 
                className={inputClass} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-time" className="flex items-center gap-2">
                <Clock size={14} className="text-primary" /> Preferred Time
              </Label>
              <Input 
                id="call-time" 
                name="time" 
                placeholder="e.g. Tomorrow 10:00 AM" 
                required 
                className={inputClass} 
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-semibold gap-2 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] group"
            disabled={pending}
          >
            {pending ? "Sending..." : "Request Call"}
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
