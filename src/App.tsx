import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import Index from "./pages/Index";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Experience from "./pages/Experience";
import NotFound from "./pages/NotFound";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProjectCard from "./components/ProjectCard";
import Skills from "./pages/Skills";
import Article from "./pages/Article";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/project" element={<Project />} /> */}
          {/* default /project -> project-001 */}
        <Route
          path="/project"
          element={<Navigate to="/project/project-001" replace />}
        />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} /> 
          <Route path="/article" element={<Article />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;



