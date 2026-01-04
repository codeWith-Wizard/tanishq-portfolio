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
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#020205]">
      {/* Grainy Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Large Neon Blurred Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/30 blur-[160px] rounded-full animate-move-slow mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[140px] rounded-full animate-move-medium mix-blend-screen" />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-move-fast mix-blend-screen" />
      
      {/* Glassmorphism Frost Layer */}
      <div className="absolute inset-0 backdrop-blur-[80px] opacity-40" />

      {/* Moving Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      {/* Floating Particles/Squares */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 border border-white/10 backdrop-blur-md rounded-lg shadow-2xl"
            style={{
              width: Math.random() * 80 + 40 + 'px',
              height: Math.random() * 80 + 40 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${Math.random() * 15 + 20}s linear infinite`,
              opacity: 0.15
            }}
          />
        ))}
      </div>
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
