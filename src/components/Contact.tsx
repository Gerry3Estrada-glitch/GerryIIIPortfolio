import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:gerry.estrada@example.com', color: 'from-cyan-400 to-blue-500' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'from-purple-500 to-pink-500' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'from-blue-500 to-cyan-400' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'from-cyan-400 to-purple-500' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-64 h-64 border border-cyan-400/10 rounded-full"
      />
      
      <div ref={ref} className="max-w-4xl mx-auto text-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm mb-4"
          >
            <Send size={16} />
            <span>INITIALIZE CONNECTION</span>
          </motion.div>
          
          <h2 className="mb-6 text-glow">CONNECT_PROTOCOL.init()</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Ready to collaborate on revolutionary projects? Let's architect the future of digital experiences together. 
          My channels are always open for innovative opportunities and visionary partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
              aria-label={link.label}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg blur-lg`} />
              
              <div className="relative bg-[#1a1a2e]/50 border border-cyan-400/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-colors">
                <link.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">{link.label}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-block bg-[#1a1a2e]/30 border border-cyan-400/20 rounded-lg px-6 py-3">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-cyan-400 rounded-full"
              />
              <span className="text-sm text-gray-400 font-mono">
                STATUS: <span className="text-cyan-400">READY_TO_DEPLOY</span>
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 font-mono">
            © 2026 GERRY III R. ESTRADA | ALL SYSTEMS OPERATIONAL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
