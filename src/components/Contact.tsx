import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(190_100%_50%/0.1),transparent_60%)]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about ML/AI research.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="card-gradient rounded-2xl border border-border p-8 space-y-6">
            <a
              href="mailto:pritishmahato2907@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">pritishmahato2907@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+91 9508034656</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">Ranchi, Jharkhand, India</p>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 text-center">Find me on</p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://github.com/pritishmahato" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://linkedin.com/in/pritishmahato" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="gap-2" asChild>
                  <a href="https://leetcode.com/pritishmahato" target="_blank" rel="noopener noreferrer">
                    <Code className="w-4 h-4" />
                    LeetCode
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;