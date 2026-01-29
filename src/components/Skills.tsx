import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Globe, Database, Blocks } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: Code2,
      title: 'Frontend Architecture',
      description: 'React • TypeScript • Next.js • JavaScript ES6+',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Palette,
      title: 'Neural Design Systems',
      description: 'Tailwind CSS • Motion • Responsive UI/UX',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Hyper-Optimization',
      description: 'Performance Tuning • SEO • Clean Architecture',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Web3 Integration',
      description: 'REST APIs • GraphQL • WebSockets • Real-time',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'State Management • Redux • Context API',
      color: 'from-red-400 to-rose-500',
    },
    {
      icon: Blocks,
      title: 'DevOps Pipeline',
      description: 'Git • CI/CD • Docker • Cloud Deployment',
      color: 'from-indigo-400 to-violet-500',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/10 rounded-full"
      />
      
      <div ref={ref} className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-block px-4 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-4"
          >
            TECH STACK
          </motion.div>
          <h2 className="text-glow">CORE_SYSTEMS.json</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur-xl -z-10"
                style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              
              <div className="bg-[#1a1a2e]/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm h-full relative overflow-hidden">
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent h-full"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                />
                
                <div className={`inline-flex p-3 bg-gradient-to-r ${skill.color} rounded-lg mb-4`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg mb-2 text-cyan-400">{skill.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/50 transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
