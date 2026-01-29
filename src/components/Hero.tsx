import { motion } from 'motion/react';
import { ArrowDown, Terminal } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePhoto from 'figma:asset/fb20419c62a324a91fee9f50c29ff1f8d852816a.png';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/20 rotate-45"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-24 h-24 border-2 border-purple-500/20"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Photo slot with futuristic frame */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1 flex justify-center"
        >
          <div className="relative">
            {/* Glowing border effect */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full opacity-20 blur-xl"
            />
            
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan-400"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
            
            {/* Photo container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400/50 glow-cyan">
              <ImageWithFallback
                src={profilePhoto}
                alt="Gerry III R. Estrada"
                className="w-full h-full object-cover"
              />
              {/* Scan line effect */}
              <motion.div
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1/4"
              />
            </div>

            {/* Status indicator */}
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 right-4 bg-[#0a0a0f] px-3 py-1 rounded-full border border-cyan-400 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-cyan-400">ONLINE</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text content */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-cyan-400 mb-4"
            >
              <Terminal size={20} />
              <span className="text-sm font-mono">$ system.initialize()</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-2 text-4xl md:text-6xl text-glow"
            >
              GERRY III R. ESTRADA
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6"
            >
              &lt; Web Developer /&gt;
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              Engineering cutting-edge digital experiences through innovative code and next-generation design systems. Specialized in building high-performance web applications for tomorrow's internet.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-[#0a0a0f] rounded-lg overflow-hidden"
            >
              <span className="relative z-10 font-semibold">EXPLORE PORTFOLIO</span>
              <ArrowDown size={18} className="relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={24} className="text-cyan-400" />
      </motion.div>
    </section>
  );
}