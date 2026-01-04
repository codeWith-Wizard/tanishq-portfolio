import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useRoute } from "wouter";

// Import images
import picoImg from "@assets/generated_images/interactive_7-dof_robot_ai_assistant_face_3d_render.png";
import roverImg from "@assets/generated_images/esp32_vision_rover_robot_terrain_3d_render.png";
import sageImg from "@assets/generated_images/smart_iot_watering_system_technical_visualization.png";

const projectsData: Record<string, any> = {
  pico: {
    title: "Pico: Emotion-Responsive Personal AI Assistant",
    image: picoImg,
    tech: ["ESP32", "ROS 2", "PyTorch", "HRI", "C++"],
    content: "Developing a 7-DOF interactive robot integrating embedded control, wireless communication, and AI-driven behavior. Pico uses ESP-NOW for low-latency communication between the physical hardware and high-level AI systems.",
    highlights: [
      "7-Degree of Freedom mechanical structure for expressive movement.",
      "OLED-based facial feedback system for human-centric interaction.",
      "Capacitive touch sensing for natural interaction mapping."
    ]
  },
  rover: {
    title: "ESP-NOW Vision Mobile Rover",
    image: roverImg,
    tech: ["ESP32-CAM", "ESP-NOW", "Telemetry", "PCB Design"],
    content: "A mobile robotic platform designed for real-time visual feedback and low-latency control. This project serves as a foundation for autonomous navigation research in challenging environments.",
    highlights: [
      "Custom handheld controller for bidirectional data exchange.",
      "Real-time video streaming with minimal latency via ESP32-CAM.",
      "Modular design for sensor expansion and autonomous upgrades."
    ]
  },
  sage: {
    title: "Sage.AI: Smart Watering System",
    image: sageImg,
    tech: ["Python", "MQTT", "Unity", "ESP32", "AWS"],
    content: "An intelligent embedded control system for automated water delivery. Integrates digital twin technology through Unity simulations to validate sensor data and system behavior before deployment.",
    highlights: [
      "MQTT-based real-time monitoring and control dashboard.",
      "Unity-driven simulation environment for system stress testing.",
      "Resource-optimized firmware for solar-powered installations."
    ]
  }
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = params?.id ? projectsData[params.id] : null;

  if (!project) return <div>Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="container mx-auto px-6 py-12 md:py-24">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tech.map((t: string) => (
                <span key={t} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono">
                  {t}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-12">
              <p>{project.content}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">Core Highlights</h3>
              <ul className="space-y-4">
                {project.highlights.map((h: string, i: number) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-primary font-mono mt-1">0{i+1}</span>
                    <span className="text-white/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24 aspect-square rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
