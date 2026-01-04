import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Import generated images
import picoImg from "@assets/generated_images/interactive_7-dof_robot_ai_assistant_face_3d_render.png";
import roverImg from "@assets/generated_images/esp32_vision_rover_robot_terrain_3d_render.png";
import sageImg from "@assets/generated_images/smart_iot_watering_system_technical_visualization.png";

const projects = [
  {
    id: "pico",
    title: "Pico: AI Assistant Robot",
    description: "A 7-DOF interactive robot with ESP32 control and AI behavior.",
    image: picoImg,
    tags: ["ESP32", "Robotics", "HRI"]
  },
  {
    id: "rover",
    title: "Vision Mobile Rover",
    description: "Real-time visual feedback rover via ESP-NOW protocol.",
    image: roverImg,
    tags: ["Vision", "IoT", "ESP-NOW"]
  },
  {
    id: "sage",
    title: "Sage.AI: Smart Watering",
    description: "IoT sensor-driven water delivery for solar installations.",
    image: sageImg,
    tags: ["IoT", "Python", "MQTT"]
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
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/project/${project.id}`}>
                <Card className="h-full bg-card/40 border-white/5 hover:border-primary/50 transition-all duration-500 group overflow-hidden cursor-pointer">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </div>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-white/10 text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
