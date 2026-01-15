import { motion } from "framer-motion";
import { Code, Brain, Database, Terminal, Mic } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "MATLAB", "SQL", "LaTeX"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ML/AI Frameworks",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Deep Learning",
    icon: Brain,
    skills: ["Transformers", "CNNs", "RNNs", "Transfer Learning", "Contrastive Learning"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Data & Tools",
    icon: Database,
    skills: ["Pandas", "NumPy", "Git", "Linux", "AWS", "Docker"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Speech & LLM",
    icon: Mic,
    skills: ["Deepgram STT", "Piper TTS", "OpenAI API", "WebRTC", "Ollama"],
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,hsl(190_100%_50%/0.08),transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build intelligent systems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-500 ${
                index === 0 ? "lg:col-span-2" : ""
              } ${index === 2 ? "lg:row-span-2" : ""}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
