import { motion } from "framer-motion";

export function Education() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Education</h2>
          <div className="h-1 w-20 bg-primary" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 rounded-2xl bg-card/20"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold font-heading text-white">Bachelor of Engineering</h3>
                <span className="text-primary font-mono">2023 – Present</span>
              </div>
              <h4 className="text-xl text-white/80 mb-2">Thapar Institute of Engineering and Technology</h4>
              <p className="text-muted-foreground mb-6">Electronics and Computer Science</p>
              
              <div className="space-y-2">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-muted-foreground">CGPA</span>
                  <span className="font-mono font-bold text-white">9.81 / 10.0</span>
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Honors:</strong> Gold Medalist (First Year), Merit Rank 1 (Second Year)
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong className="text-white">Coursework:</strong> AI/ML, Embedded Systems, OS, Digital Systems, Data Centre Vision
                  </p>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
