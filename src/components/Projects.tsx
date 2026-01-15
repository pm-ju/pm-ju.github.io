import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Vito Corleone Speech-to-Speech Chatbot",
    description: "Real-time speech-to-speech chatbot emulating Vito Corleone's voice using fine-tuned Piper TTS, Deepgram STT, and OpenAI LLM with LiveKit for realtime voice-chat.",
    tags: ["Deepgram STT", "Piper TTS", "OpenAI", "LiveKit", "WebRTC"],
    featured: true,
    hasdemo: true,
    demo: "https://www.youtube.com/watch?v=-FA5YaJAkvQ",
    hasGithub: true,
    github: "https://github.com/pm-ju/vito-voicebot",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "AI Fairness Foundation Models",
    description: "Trained model on 10K+ unstructured images for dermatological classification, achieving validation loss of 0.5 through 100+ hours of training.",
    tags: ["PyTorch", "HuggingFace", "Contrastive Learning"],
    hasDemo: true,
    demo: "https://skin-disease-classifier.netlify.app/",
    hasGithub: true,
    github: "https://github.com/pm-ju/skin-disease-classification",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "CNN-Transformer Image Captioning",
    description: "Encoder-decoder neural network with ResNet-50 and Transformer for generating text from images with attention mechanism.",
    tags: ["PyTorch", "Transformers", "ResNet"],
    hasGithub: true,
    github: "https://github.com/pm-ju/image_caption_generator",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    title: "Real-Time Player Re-ID",
    description: "End-to-end system combining YOLOv8 and DeepSORT for multi-player tracking with ResNet feature extraction achieving 85%+ accuracy.",
    tags: ["YOLOv8", "DeepSORT", "OpenCV"],
    hasGithub: true,
    github: "https://github.com/pm-ju/RE-IDENTIFICATION-OF-PLAYERS",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
  },
  {
    title: "Financial Time-Series Analysis",
    description: "Financial analysis tool using Pandas and NumPy to calculate Hurst exponent for NIFTY 50 data with Random Forest analysis.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    hasGithub: true,
    github: "https://github.com/pm-ju/nifty50-hurst-strategy",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(190_100%_50%/0.05),transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my machine learning and AI projects.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Featured Project</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {projects[0].title}
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6 max-w-3xl leading-relaxed">
                {projects[0].description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-1 flex-shrink-0">
                    {project.hasGithub && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <Github className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                    {project.hasDemo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
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

export default Projects;
