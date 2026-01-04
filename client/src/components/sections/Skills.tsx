import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Robotics & Systems",
    skills: ["ROS 2", "Sensor Integration", "Actuators", "Motor Control", "Kinematics", "Real-time Control"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "CNNs", "Computer Vision", "U-Net Architectures", "Graph Neural Networks (GNNs)", "GANs"],
  },
  {
    title: "Embedded Systems",
    skills: ["Embedded C/C++", "ESP32", "Microcontrollers", "Firmware Development", "ESP-NOW", "MQTT"],
  },
  {
    title: "Tools & Hardware",
    skills: ["Linux", "Git", "VS Code", "Arduino IDE", "MATLAB", "Unity (Sim)", "KiCad"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Technical Arsenal</h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit for building full-stack robotic solutions, from circuit board to neural network.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground font-heading border-l-2 border-primary pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary hover:bg-white/10 transition-colors text-secondary-foreground font-normal py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
