import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import isiLogo from "@/assets/isi-logo.svg";
import juLogo from "@/assets/ju-logo.png";

const experiences = [
  {
    title: "Machine Learning Research Intern",
    company: "Indian Statistical Institute (ISI), Kolkata",
    advisor: "Under Prof. Swagatam Das",
    period: "Jun 2025 – July 2025",
    logo: isiLogo,
    description: [
      "Developing state-of-the-art CNN architectures for automated skin disease classification on 10K+ medical images",
      "Achieved 85%+ test accuracy through advanced data augmentation, transfer learning, and ensemble methods",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Jadavpur University, Kolkata",
    advisor: "Error Detection with Polar Coding — Dr. Sudipta Chattopadhyay",
    period: "Jan 2025 - Present",
    logo: juLogo,
    description: [
      "Designed and implemented Successive Cancellation (SC) and SCF polar decoders with CRC integration",
      "Conducted extensive AWGN channel simulations analyzing BER performance across multiple code configurations",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(190_100%_50%/0.05),transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My research journey in machine learning and signal processing.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
              
              <div className="card-gradient rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  {/* Institution Logo */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary mb-1">
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.advisor}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;