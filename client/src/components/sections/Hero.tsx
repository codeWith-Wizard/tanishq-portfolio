import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/subtle_dark_abstract_tech_noise_texture_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-mono text-sm tracking-[0.2em] uppercase">Tanishq Saha</span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight mb-8 leading-[0.9]">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Robotic Intel.
            </span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light">
            Electronics & CS Engineer specializing in <span className="text-white font-medium">embedded systems</span> and <span className="text-white font-medium">real-time AI</span> for autonomous platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="rounded-none h-14 px-10 text-base bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 w-full sm:w-auto" asChild>
              <a href="#projects">
                Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <a href="#about" className="text-sm font-mono tracking-widest text-muted-foreground hover:text-white transition-colors uppercase group">
              Explore Story <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
