import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, Rocket } from 'lucide-react';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'QuantumCart Pro',
      description: 'Next-gen e-commerce platform with AI-powered recommendations and neural checkout optimization.',
      tech: ['React', 'TypeScript', 'AI/ML'],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    },
    {
      title: 'NexusTask Matrix',
      description: 'Advanced task management system with quantum-state synchronization and holographic drag-and-drop.',
      tech: ['React', 'Motion', 'WebGL'],
      gradient: 'from-purple-500 via-pink-500 to-red-500',
    },
    {
      title: 'CyberFolio CMS',
      description: 'Revolutionary content management powered by blockchain architecture and decentralized storage.',
      tech: ['Next.js', 'Web3', 'IPFS'],
      gradient: 'from-orange-500 via-red-500 to-pink-600',
    },
    {
      title: 'NeuralDash Analytics',
      description: 'Real-time data visualization platform with predictive algorithms and quantum computing integration.',
      tech: ['React', 'D3.js', 'WebSockets'],
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
    },
    {
      title: 'MetaStream Live',
      description: 'Ultra-low latency streaming platform with spatial audio and holographic viewing modes.',
      tech: ['WebRTC', 'Three.js', 'WASM'],
      gradient: 'from-yellow-400 via-orange-500 to-red-600',
    },
    {
      title: 'QuantumAuth Shield',
      description: 'Military-grade authentication system with biometric fusion and zero-knowledge proof protocols.',
      tech: ['OAuth', 'WebAuthn', 'Crypto'],
      gradient: 'from-indigo-400 via-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div ref={ref} className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm mb-4"
          >
            <Rocket size={16} />
            <span>DEPLOYED SYSTEMS</span>
          </motion.div>
          <h2 className="text-glow">FEATURED_PROJECTS.db</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-[#1a1a2e]/50 border border-cyan-400/20 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
                {/* Project preview gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/80 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-cyan-400 text-[#0a0a0f] rounded-lg glow-cyan"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-purple-500 text-white rounded-lg glow-purple"
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>

                  {/* Corner indicators */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/50"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/50"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/50"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg mb-2 text-cyan-400 font-semibold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
