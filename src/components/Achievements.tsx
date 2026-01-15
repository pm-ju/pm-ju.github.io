import { motion } from "framer-motion";
import { Trophy, Code, GraduationCap, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Amazon ML Challenge 2025",
    description: "Top 0.5% on day 3 across 85K+ participants and 20K+ teams",
    stat: "Top 0.5%",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Code,
    title: "Competitive Programming",
    description: "LeetCode, GFG, CodeChef, Codeforces",
    stat: "300+",
    statLabel: "Problems",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: GraduationCap,
    title: "Chandana Memorial Merit Scholarship",
    description: "Awarded at Jadavpur University for academic excellence",
    highlight: true,
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Chennai Mathematical Institute",
    description: "Cleared entrance examination with admission offer",
    highlight: true,
    color: "from-violet-500 to-purple-500",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognition and milestones in my journey.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-500"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Stat display if available */}
                {achievement.stat && (
                  <div className="mb-3">
                    <span className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.stat}
                    </span>
                    {achievement.statLabel && (
                      <span className="text-sm text-muted-foreground ml-1">{achievement.statLabel}</span>
                    )}
                  </div>
                )}
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
