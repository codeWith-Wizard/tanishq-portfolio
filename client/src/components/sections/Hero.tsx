import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/subtle_dark_abstract_tech_noise_texture_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card p-8 md:p-16 max-w-5xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary font-signature text-2xl tracking-normal capitalize">Tanishq Saha</span>
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-bold font-heading tracking-tighter mb-8 leading-[0.85] bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            Architecting <br />
            Robotic Intel.
          </h1>
          
          <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light italic">
            Electronics & CS Engineer specializing in <span className="text-white font-medium border-b border-primary/30">embedded systems</span> and <span className="text-white font-medium border-b border-primary/30">real-time AI</span> for autonomous platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <Button size="lg" className="rounded-full h-14 px-10 text-base bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 w-full sm:w-auto font-bold shadow-xl shadow-white/5" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <a href="#about" className="text-sm font-mono tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase group flex items-center gap-3">
              Explore Story <span className="w-10 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
