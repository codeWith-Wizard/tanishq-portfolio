import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed space-y-6"
          >
            <p>
              I am a Robotics-focused Electronics and Computer Science undergraduate at <strong className="text-white">Thapar Institute of Engineering and Technology</strong> (CGPA 9.81). My passion lies at the intersection of hardware and intelligence—building systems that perceive, decide, and act.
            </p>
            <p>
              With experience in <strong className="text-white">embedded systems, real-time control, and AI-integrated robotics</strong>, I strive to bridge the gap between low-level hardware control and high-level cognitive processes. I am deeply interested in autonomous systems, human–robot interaction, and conducting system-level robotics research that pushes the boundaries of what machines can do.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
