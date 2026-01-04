import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import xaiImg from "@assets/generated_images/smart_agriculture_ai_rover_with_robotic_arm_3d_render.png";

const expData: Record<string, any> = {
  "elc-intern": {
    role: "Summer ELC Intern",
    company: "Experiential Learning Centre",
    period: "June 2025 – July 2025",
    image: xaiImg,
    tech: ["Explainable AI", "Computer Vision", "Robotics", "Embedded Control"],
    content: "During this internship, I focused on the 'XAI-Driven Rover with Robotic Arm' project, specifically designed for small-scale farming. The goal was to bridge the gap between complex AI predictions and actionable physical intervention.",
    highlights: [
      "Developed real-time inference systems on mobile robotic platforms.",
      "Integrated a precision robotic arm for targeted agricultural intervention.",
      "Used Explainable AI to interpret vision model decisions for better reliability.",
      "Reduced pesticide usage through targeted disease detection."
    ]
  }
};

export default function ExperienceDetail() {
  const [, params] = useRoute("/experience/:id");
  const exp = params?.id ? expData[params.id] : null;

  if (!exp) return <div>Experience not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="container mx-auto px-6 py-12 md:py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-widest">{exp.period}</span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mt-4 mb-2">{exp.role}</h1>
            <p className="text-2xl text-white/50 mb-10">{exp.company}</p>
            
            <div className="flex flex-wrap gap-2 mb-12">
              {exp.tech.map((t: string) => (
                <span key={t} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono uppercase">
                  {t}
                </span>
              ))}
            </div>

            <div className="prose prose-invert text-muted-foreground text-lg leading-relaxed mb-12">
              <p>{exp.content}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">Impact & Outcomes</h3>
              <ul className="grid gap-4">
                {exp.highlights.map((h: string, i: number) => (
                  <li key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl text-white/80">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-full"
          >
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl">
              <img src={exp.image} alt={exp.role} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
