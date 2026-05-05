import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import WebsiteDevelopment from "./pages/WebsiteDevelopment.tsx";
import ShopifyDevelopment from "./pages/ShopifyDevelopment.tsx";
import EcommerceDevelopment from "./pages/EcommerceDevelopment.tsx";
import WebDesign from "./pages/WebDesign.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import BlogListing from "./pages/BlogListing.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import NotFound from "./pages/NotFound.tsx";

import { ThemeProvider } from "@/components/theme-provider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <div className="overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/website-development-agency" element={<WebsiteDevelopment />} />
              <Route path="/shopify-development-agency" element={<ShopifyDevelopment />} />
              <Route path="/ecommerce-website-development" element={<EcommerceDevelopment />} />
              <Route path="/web-design-agency" element={<WebDesign />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
