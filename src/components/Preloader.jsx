import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { logo } from '../assets';

const Preloader = () => {
  useEffect(() => {
    // Create a timeline for the animation sequence
    const tl = gsap.timeline();
    
    // Add a shorter delay before starting animations
    tl.set({}, {}, 0.3); // 0.3 second initial delay
    
    // Animate the logo elements
    tl.to('.logo-letter', {
      y: 0,
      opacity: 1,
      stagger: 0.1, // Faster stagger time between letters
      duration: 0.5, // Faster duration
      ease: 'back.out(1.7)' // More dynamic easing
    });
    
    // Add a brief pause to appreciate the logo
    tl.set({}, {}, 0.5); // 0.5 second pause
    
    // Animate the tagline
    tl.to('.tagline', {
      opacity: 1,
      y: 0,
      duration: 0.5, // Faster duration
      ease: 'power2.out'
    });

    // Animate the background elements
    tl.to('.bg-element', {
      scale: 1.2,
      opacity: 0.3,
      duration: 2,
      ease: 'power1.inOut',
      repeat: 1,
      yoyo: true
    }, "-=1");
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }} // Keep visible until App.jsx removes it
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary overflow-hidden"
    >
      <div className="flex flex-col items-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="bg-element absolute top-10 left-10 w-32 h-32 bg-[#915EFF] rounded-full opacity-20 blur-xl"></div>
          <div className="bg-element absolute bottom-10 right-10 w-40 h-40 bg-[#915EFF] rounded-full opacity-15 blur-xl"></div>
          <div className="bg-element absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black to-transparent opacity-40"></div>
        </div>
        
        {/* Logo image */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-6 relative z-10"
        >
          <motion.div
            animate={{ 
              boxShadow: ["0 0 0 rgba(145, 94, 255, 0)", "0 0 20px rgba(145, 94, 255, 0.5)", "0 0 0 rgba(145, 94, 255, 0)"]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
            className="rounded-full p-2"
          >
            <img src={logo} alt="Darun Tech Logo" className="w-32 h-32 object-contain" />
          </motion.div>
        </motion.div>
        
        {/* Logo text animation */}
        <div className="flex items-center justify-center mb-4 relative z-10">
          <div className="flex">
            {['D', 'A', 'R', 'U', 'N'].map((letter, index) => (
              <motion.span 
                key={index}
                className="logo-letter text-3xl font-bold text-white mx-1"
                initial={{ y: 50, opacity: 0 }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span 
              className="logo-letter text-3xl font-bold text-[#915EFF] mx-1"
              initial={{ y: 50, opacity: 0 }}
              style={{ display: 'inline-block' }}
            >
              TECH
            </motion.span>
          </div>
        </div>
        
        {/* Tagline */}
        <motion.p
          className="tagline text-white text-sm font-medium mb-8"
          initial={{ y: 20, opacity: 0 }}
        >
          Bangladesh's #1 Review Sharing Platform
        </motion.p>
        
        {/* Loading indicator */}
        <div className="relative w-48 h-3 bg-gray-700 rounded-full overflow-hidden mt-6">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 3.5,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 1.5, repeat: 2, repeatType: "loop" }}
            className="absolute top-0 left-0 h-full w-20 bg-white opacity-30 blur-sm rounded-full"
            style={{ 
              backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
              animation: "shimmer 1.5s infinite"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;