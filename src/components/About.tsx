import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Cpu, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { icon: Code2, label: 'Projects Deployed', value: '50+' },
    { icon: Cpu, label: 'Technologies', value: '20+' },
    { icon: Zap, label: 'Performance Score', value: '99%' },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              className="inline-block px-4 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm mb-4"
            >
              SYSTEM PROFILE
            </motion.div>
            <h2 className="mb-4 text-glow">ABOUT_ME.exe</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#1a1a2e]/50 border border-cyan-400/20 rounded-lg p-6 text-center relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 text-gray-300 bg-[#1a1a2e]/30 border border-cyan-400/20 rounded-lg p-8">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="leading-relaxed"
            >
              <span className="text-cyan-400 font-mono">&gt; </span>
              Advanced web developer specializing in quantum-leap digital solutions. My mission: architecting 
              next-generation applications that redefine user experience through bleeding-edge technologies 
              and revolutionary design paradigms.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="leading-relaxed"
            >
              <span className="text-cyan-400 font-mono">&gt; </span>
              I engineer high-performance systems optimized for speed, scalability, and seamless interaction. 
              Every line of code is crafted with precision, every interface designed for maximum impact. 
              My work bridges the gap between human intuition and machine efficiency.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="leading-relaxed"
            >
              <span className="text-cyan-400 font-mono">&gt; </span>
              Constantly evolving, perpetually innovating. I stay synchronized with emerging tech trends, 
              contributing to open-source initiatives and collaborating with forward-thinking developers 
              to push the boundaries of what's possible on the web.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
