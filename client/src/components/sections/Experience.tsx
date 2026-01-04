import { motion } from "framer-motion";

const experience = [
  {
    role: "Summer ELC Intern",
    company: "Experiential Learning Centre",
    period: "June 2025 – July 2025",
    description: "Worked on 'XAI-Driven Rover with Robotic Arm for Smart Pest and Disease Detection'. Integrated computer vision with embedded control for real-time inference. Developed an autonomous rover with a robotic arm for targeted intervention to reduce pesticide usage."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Experience</h2>
          <div className="h-1 w-20 bg-primary" />
        </motion.div>

        <div className="max-w-3xl space-y-12 relative border-l border-white/10 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-primary border-4 border-background" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground font-heading">{item.role}</h3>
                <span className="text-primary font-mono text-sm mt-1 sm:mt-0">{item.period}</span>
              </div>
              <p className="text-lg text-white/80 font-medium mb-2">{item.company}</p>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
