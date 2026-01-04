import { motion } from "framer-motion";
import { Link } from "wouter";
import xaiImg from "@assets/generated_images/smart_agriculture_ai_rover_with_robotic_arm_3d_render.png";

const experience = [
  {
    id: "elc-intern",
    role: "Summer ELC Intern",
    company: "Experiential Learning Centre",
    period: "June 2025 – July 2025",
    image: xaiImg,
    description: "Developed 'XAI-Driven Rover with Robotic Arm'. Integrated computer vision with embedded control for real-time inference on autonomous farming platforms."
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

        <div className="grid gap-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/experience/${item.id}`}>
                <div className="glass-card p-8 grid md:grid-cols-2 gap-8 items-center cursor-pointer relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative overflow-hidden aspect-video rounded-xl border border-white/5">
                    <img 
                      src={item.image} 
                      alt={item.role}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary font-mono text-sm tracking-widest">{item.period}</span>
                    </div>
                    <h3 className="text-3xl font-bold font-heading group-hover:text-primary transition-colors">{item.role}</h3>
                    <p className="text-xl text-white/70">{item.company}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-4 flex items-center text-primary text-sm font-mono tracking-tighter uppercase gap-2 group/btn">
                      View Case Study <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
