import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-background border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Interested in collaborating on robotics, embedded systems, or AI projects? 
            Feel free to reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button size="lg" className="gap-2 h-14 px-8 text-lg" asChild>
              <a href="mailto:tanishqsaha2004@gmail.com">
                <Mail className="h-5 w-5" /> Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg bg-transparent border-white/20 hover:bg-white/10" asChild>
              <a href="https://github.com/codeWith-Wizard" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" /> GitHub
              </a>
            </Button>
            {/* Added placeholder for LinkedIn as it wasn't in the CV text explicitly but is standard */}
            <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg bg-transparent border-white/20 hover:bg-white/10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </Button>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Tanishq. Built with React & Tailwind.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
