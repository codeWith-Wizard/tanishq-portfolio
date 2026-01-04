import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ResumePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background text-foreground py-20"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Home
          </Button>
        </Link>

        <div className="bg-card/30 border border-white/5 p-8 md:p-16 rounded-3xl shadow-2xl backdrop-blur-sm">
          <header className="border-b border-white/5 pb-10 mb-10 text-center">
            <h1 className="text-5xl font-bold font-heading mb-4">Tanishq</h1>
            <p className="text-primary font-mono uppercase tracking-widest text-sm">Robotics & AI Engineer</p>
            <div className="mt-6 flex justify-center gap-6 text-muted-foreground text-sm font-mono">
              <span>+91 83073 79321</span>
              <span>tanishqsaha2004@gmail.com</span>
              <span>GitHub: codeWith-Wizard</span>
            </div>
          </header>

          <div className="space-y-12">
            <section>
              <h2 className="text-xl font-bold font-heading text-primary uppercase tracking-wider mb-4">Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                Robotics-focused Electronics and Computer Science undergraduate with experience in embedded systems,
                real-time control, and AI-integrated robotic platforms. Interested in autonomous systems, human–robot
                interaction, and system-level robotics research.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-heading text-primary uppercase tracking-wider mb-4">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold">Thapar Institute of Engineering and Technology</h3>
                  <p className="text-muted-foreground">Bachelor of Engineering (B.E.) in Electronics and Computer Science</p>
                  <p className="text-xs text-muted-foreground mt-1">Gold Medalist • Merit Rank 1</p>
                </div>
                <span className="font-mono text-sm text-primary">2023 – Present</span>
              </div>
              <p className="mt-4 text-sm font-mono text-muted-foreground italic">CGPA: 9.81 / 10.0</p>
            </section>

            <section>
              <h2 className="text-xl font-bold font-heading text-primary uppercase tracking-wider mb-4">Work Experience</h2>
              <div>
                <div className="flex justify-between mb-2">
                  <h3 className="text-white font-bold">Summer ELC Intern</h3>
                  <span className="font-mono text-sm text-primary">June 2025 – July 2025</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Experiential Learning Centre, Patiala</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                  <li>XAI-Driven Rover with Robotic Arm for Smart Pest and Disease Detection.</li>
                  <li>Integrated computer vision with embedded control for real-time inference.</li>
                  <li>Applied Explainable AI (XAI) techniques to validate vision-based predictions.</li>
                  <li>Enabled precision agriculture by supporting targeted intervention.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold font-heading text-primary uppercase tracking-wider mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white font-bold mb-1">Robotics & AI</p>
                  <p className="text-muted-foreground">ROS 2, PyTorch, CNNs, Computer Vision, U-Net, GNNs, GANs</p>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">Embedded & Hardware</p>
                  <p className="text-muted-foreground">C/C++, ESP32, Microcontrollers, KiCad, Sensors, Actuators</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
