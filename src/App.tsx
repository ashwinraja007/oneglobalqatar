import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import GlobalPresence from "./pages/GlobalPresence";
import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import RoadFreight from "./pages/services/RoadFreight";
import CustomsClearance from "./pages/services/CustomsClearance";
import Warehousing from "./pages/services/Warehousing";
import ProjectLogistics from "./pages/services/ProjectLogistics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Index />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          {/* Service detail pages */}
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route path="/services/ocean-freight" element={<OceanFreight />} />
          <Route path="/services/road-freight" element={<RoadFreight />} />
          <Route path="/services/customs-clearance" element={<CustomsClearance />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/services/project-logistics" element={<ProjectLogistics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
