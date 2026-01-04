import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pico: Emotion-Responsive AI Robot",
    description: "A 7-DOF interactive robot integrating embedded control, wireless communication, and AI-driven behavior.",
    details: [
      "Implemented ESP32-based control with ESP-NOW for low-latency communication.",
      "Designed expressive OLED-based facial feedback and capacitive touch sensing.",
      "Integrated laptop-side AI system for complex behavior processing."
    ],
    tags: ["ESP32", "Robotics", "AI", "HRI", "Embedded C++"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Vision-Capable Mobile Rover",
    description: "Mobile robotic rover using ESP32-CAM for real-time visual feedback and teleoperation.",
    details: [
      "Built custom handheld controller for bidirectional command and data exchange.",
      "Implemented low-latency wireless control/telemetry via ESP-NOW.",
      "Foundation for future autonomous navigation research."
    ],
    tags: ["Computer Vision", "Teleoperation", "IoT", "PCB Design"],
    links: { github: "#", demo: "#" }
  },
  {
    title: "Sage.AI: Smart Watering System",
    description: "Embedded control system for sensor-driven water delivery in solar panel installations.",
    details: [
      "MQTT-based communication with Python backend for real-time monitoring.",
      "Unity simulation for system validation and synthetic data generation.",
      "Optimized for resource-constrained environments."
    ],
    tags: ["IoT", "MQTT", "Python", "Unity", "Simulation"],
    links: { github: "#", demo: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/40 border-white/5 hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground marker:text-primary">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-white/10 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
