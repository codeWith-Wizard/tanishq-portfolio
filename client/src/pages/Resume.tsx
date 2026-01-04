import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Github, MapPin, Calendar, Award, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function ResumePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-transparent text-foreground py-20 relative z-10"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Button>
        </Link>

        {/* Main Resume Card */}
        <div className="glass-card p-8 md:p-16 relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          
          <header className="border-b border-white/10 pb-12 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-7xl font-signature font-bold mb-2 tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-signature)' }}>
                  Tanishq
                </h1>
                <p className="text-primary font-mono uppercase tracking-[0.3em] text-sm font-semibold">
                  Robotics & AI Engineer
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 text-sm font-mono text-muted-foreground">
                <a href="tel:+918307379321" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={14} className="text-primary" /> +91 83073 79321
                </a>
                <a href="mailto:tanishqsaha2004@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={14} className="text-primary" /> tanishqsaha2004@gmail.com
                </a>
                <a href="https://github.com/codeWith-Wizard" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Github size={14} className="text-primary" /> codeWith-Wizard
                </a>
              </div>
            </div>
          </header>

          <div className="space-y-16">
            {/* Summary */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent" />
              <h2 className="text-xs font-bold font-heading text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Summary
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg font-light italic">
                Robotics-focused Electronics and Computer Science undergraduate with experience in embedded systems,
                real-time control, and AI-integrated robotic platforms. Interested in autonomous systems, human–robot
                interaction, and system-level robotics research.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-bold font-heading text-primary uppercase tracking-[0.2em] mb-8">Education</h2>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Thapar Institute of Engineering and Technology</h3>
                    <p className="text-muted-foreground mt-1">Bachelor of Engineering (B.E.) in Electronics and Computer Science</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 font-mono text-sm">
                    <span className="text-primary px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">2023 – Present</span>
                    <span className="text-muted-foreground">Patiala, India</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                    <p className="text-xs text-primary uppercase tracking-widest mb-2 font-bold">Performance</p>
                    <p className="text-2xl font-bold text-white">CGPA: 9.81 <span className="text-sm font-normal text-muted-foreground">/ 10.0</span></p>
                  </div>
                  <div className="bg-white/[0.03] border border-white/5 p-4 rounded-xl">
                    <p className="text-xs text-primary uppercase tracking-widest mb-2 font-bold">Honors</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Award size={12} className="text-yellow-500" /> Gold Medalist (First Year)
                      </li>
                      <li className="flex items-center gap-2">
                        <Award size={12} className="text-yellow-500" /> Merit Rank 1 (Second Year)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-primary uppercase tracking-widest mb-3 font-bold">Relevant Coursework</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Data Centre Vision, AI/ML, OS, Digital and Analog Systems, Embedded Systems, DBMS, OOPS, Computer & Communication Networks
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xs font-bold font-heading text-primary uppercase tracking-[0.2em] mb-8">Experience</h2>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Summer ELC Intern</h3>
                    <p className="text-muted-foreground">Experiential Learning Centre (ELC)</p>
                  </div>
                  <span className="font-mono text-sm text-primary px-3 py-1 bg-primary/5 border border-primary/20 rounded-full">June 2025 – July 2025</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Worked on the project 'XAI-Driven Rover with Robotic Arm for Smart Pest and Disease Detection in Small-Scale Farming.'",
                    "Integrated computer vision with embedded control for real-time inference on a mobile robotic platform.",
                    "Developed an autonomous rover with a robotic arm for pest and crop disease detection.",
                    "Applied Explainable AI (XAI) techniques to interpret and validate vision-based predictions.",
                    "Enabled precision agriculture by supporting targeted intervention to reduce pesticide usage."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-xs font-bold font-heading text-primary uppercase tracking-[0.2em] mb-8">Selected Projects</h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Pico: Emotion-Responsive Personal AI Assistant",
                    desc: "Developing a 7-DOF interactive robot integrating embedded control, wireless communication, and AI-driven behavior.",
                    bullets: [
                      "Implemented ESP32-based control with ESP-NOW for low-latency communication.",
                      "Designed expressive OLED-based facial feedback and capacitive touch sensing."
                    ]
                  },
                  {
                    title: "ESP-NOW Mobile Rover with Vision",
                    desc: "Mobile robotic rover using ESP32-CAM for real-time visual feedback and custom control.",
                    bullets: [
                      "Implemented low-latency wireless control using ESP-NOW protocol.",
                      "Developed custom handheld controller for bidirectional command exchange."
                    ]
                  },
                  {
                    title: "Sage.AI: Smart Watering System",
                    desc: "Embedded control system for sensor-driven water delivery in solar installations.",
                    bullets: [
                      "Implemented MQTT communication and Python backend for real-time monitoring.",
                      "Simulated behavior in Unity for performance analysis and data generation."
                    ]
                  }
                ].map((project, i) => (
                  <div key={i} className="group relative p-6 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 rounded-2xl transition-all duration-300">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center justify-between">
                      {project.title}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 mb-4 leading-relaxed">{project.desc}</p>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-xs text-muted-foreground/80 italic">
                          <span className="text-primary mt-1 flex-shrink-0">•</span> {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xs font-bold font-heading text-primary uppercase tracking-[0.2em] mb-8">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { category: "Robotics & Systems", items: "ROS 2 (basics), Sensor Integration" },
                  { category: "ML & Deep Learning", items: "PyTorch, CNNs, CV Fundamentals, U-Net, GNNs, GANs" },
                  { category: "Embedded Systems", items: "Embedded C/C++, ESP32, Microcontrollers" },
                  { category: "Electronics & Hardware", items: "Sensors, Actuators, Motor Control, KiCad" },
                  { category: "Tools & Platforms", items: "Linux, Git, VS Code, Arduino IDE, MATLAB, Unity" }
                ].map((skill, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <p className="text-[10px] text-primary uppercase tracking-widest mb-1 font-bold">{skill.category}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{skill.items}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Last updated: December 16, 2025
            </p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
