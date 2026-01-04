import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import ResumePage from "@/pages/Resume";
import ProjectDetail from "@/pages/ProjectDetail";
import ExperienceDetail from "@/pages/ExperienceDetail";
import NotFound from "@/pages/not-found";

function TechBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), 2000);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#030308]">
      {/* Interactive Cursor Light (The "Soft Intelligence" Blob) */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/15 blur-[100px] mix-blend-screen transition-all duration-700 ease-out"
        style={{
          left: mousePos.x - 300 + 'px',
          top: mousePos.y - 300 + 'px',
          opacity: isIdle ? 0 : 1,
          transform: 'translate3d(0,0,0)'
        }}
      />
      
      {/* Subtle Breathing Neon Orbs */}
      <div className="absolute top-[10%] left-[15%] w-[45%] h-[45%] bg-[#00ffff]/10 blur-[150px] rounded-full animate-breathing mix-blend-screen" />
      <div className="absolute bottom-[15%] right-[20%] w-[40%] h-[40%] bg-[#7000ff]/10 blur-[150px] rounded-full animate-breathing [animation-delay:4s] mix-blend-screen" />
      <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] bg-[#00f5ff]/5 blur-[120px] rounded-full animate-drift mix-blend-screen" />

      {/* Very subtle grid for depth */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
      />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/experience/:id" component={ExperienceDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TechBackground />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
