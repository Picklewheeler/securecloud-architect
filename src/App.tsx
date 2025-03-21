
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Implementation from "./pages/Implementation";
import Security from "./pages/Security";
import Purchase from "./pages/Purchase";
import NotFound from "./pages/NotFound";
import HulyStyleLanding from "./pages/HulyStyleLanding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HulyStyleLanding />} />
              <Route path="/classic" element={<Index />} />
              <Route path="/implementation" element={<Implementation />} />
              <Route path="/security" element={<Security />} />
              <Route path="/purchase" element={<Purchase />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
