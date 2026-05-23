import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useEffect, useState } from 'react';
import { logo } from '../assets';

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation synced to 800ms preloader
    const duration = 750;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const nextProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(nextProgress);
      if (nextProgress >= 100) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Pure CSS keyframe for letter reveal — no GSAP needed */}
      <style>{`
        @keyframes letterReveal {
          from { transform: translateY(24px); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
        .logo-letter {
          display: inline-block;
          animation: letterReveal 0.35s ease-out forwards;
          opacity: 0;
        }
        .tagline-reveal {
          animation: letterReveal 0.35s ease-out 0.55s forwards;
          opacity: 0;
        }
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816] overflow-hidden">
        {/* Background blurs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-64 h-64 bg-[#915EFF] rounded-full blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full blur-[120px]"
          />
        </div>

        {/* Central Glassmorphic Loading Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glassmorphism p-8 md:p-12 rounded-[32px] max-w-[420px] w-[90%] flex flex-col items-center border border-white/10 shadow-2xl relative z-10 glow-shadow-purple"
        >
          {/* Animated logo wrapper */}
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2.5 rounded-full border border-dashed border-[#915EFF]/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-double border-blue-500/20"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative w-24 h-24 rounded-full bg-[#151030] flex items-center justify-center p-2 border border-white/10"
            >
              <img src={logo} alt="Darun Tech Logo" className="w-full h-full object-contain rounded-full" />
            </motion.div>
          </div>

          {/* Logo letters — CSS animated, no GSAP */}
          <div className="flex items-center justify-center mb-3">
            <div className="flex">
              {['D', 'A', 'R', 'U', 'N'].map((letter, index) => (
                <span
                  key={index}
                  className="logo-letter text-2xl font-black text-white mx-0.5"
                  style={{ animationDelay: `${0.15 + index * 0.07}s` }}
                >
                  {letter}
                </span>
              ))}
              <span
                className="logo-letter text-2xl font-black text-[#915EFF] mx-0.5"
                style={{ animationDelay: `${0.15 + 5 * 0.07}s` }}
              >
                TECH
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="tagline-reveal text-gray-400 text-xs font-semibold uppercase tracking-widest text-center max-w-[280px]">
            Unlock the Power of Reviews
          </p>

          {/* Progress Bar */}
          <div className="w-full mt-8">
            <div className="flex justify-between items-center text-xs font-bold text-gray-400 mb-2 px-1">
              <span className="uppercase tracking-wider">Loading Assets</span>
              <span className="text-[#915EFF]">{progress}%</span>
            </div>
            <div className="relative w-full h-2 bg-[#050816]/80 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#915EFF] to-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
              <motion.div
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Preloader;