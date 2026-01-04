import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/subtle_dark_abstract_tech_noise_texture_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <h2 className="text-primary font-medium tracking-wide text-sm md:text-base mb-4 uppercase">
            Robotics • Embedded Systems • AI
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6 leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Autonomous Future
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed md:mx-0 mx-auto">
            Robotics-focused Electronics and Computer Science Undergraduate. 
            Merging embedded control, real-time systems, and AI to create intelligent machines.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full px-8 text-base bg-white text-black hover:bg-gray-200 w-full sm:w-auto" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-white/10 hover:bg-white/5 w-full sm:w-auto" asChild>
              <a href="#contact">
                Contact Me <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
