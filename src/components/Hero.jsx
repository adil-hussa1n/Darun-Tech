import { motion } from "framer-motion";

import { styles } from "../styles";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
        <div className="flex flex-row w-full">
          <div className="flex flex-col justify-center items-center mt-5 mr-2">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Welcome to <span className="text-[#915EFF]">Darun Tech</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Your One-Stop Solution for Digital Excellence
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.03]">
                <h3 className="text-white font-bold">Digital Marketing</h3>
                <p className="text-secondary text-sm">Boost your online presence with our expert digital marketing services</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.03]">
                <h3 className="text-white font-bold">Web Development</h3>
                <p className="text-secondary text-sm">Custom websites and applications for your business needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg transition-all duration-300 hover:scale-[1.03]">
                <h3 className="text-white font-bold">Graphic Design</h3>
                <p className="text-secondary text-sm">Stunning visuals that make your brand stand out</p>
              </div>
            </div>
          </div>

          {/* Desktop hero images - vertical, staggered, right of text */}
          <div className="hidden md:flex flex-col justify-center items-end ml-8 gap-4 relative z-10">
            {/* Blurred gradient/abstract background shape */}
            <div className="absolute top-0 left-0 w-60 h-72 bg-gradient-to-br from-purple-500/40 via-blue-400/30 to-pink-400/30 blur-2xl rounded-full opacity-80 -z-10 -translate-x-14 -translate-y-10 animate-pulse" />
            <motion.img 
              src={hero1} 
              alt="Hero 1" 
              className="w-28 h-28 rounded-2xl shadow-2xl object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 mb-2 ring-2 ring-purple-300/40"
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
              style={{ zIndex: 30 }}
            />
            <motion.img 
              src={hero2} 
              alt="Hero 2" 
              className="w-36 h-36 rounded-2xl shadow-2xl object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 -mt-6 ml-6 ring-2 ring-blue-300/40"
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
              style={{ zIndex: 20 }}
            />
            <motion.img 
              src={hero3} 
              alt="Hero 3" 
              className="w-24 h-24 rounded-2xl shadow-2xl object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 -mt-4 ml-12 ring-2 ring-pink-300/40"
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
              style={{ zIndex: 10 }}
            />
          </div>
        </div>
        {/* Mobile layout for hero images - row below text */}
        <div className="flex md:hidden flex-row justify-center items-center gap-4 mt-8 w-full relative">
          {/* Blurred gradient/abstract background shape for mobile */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-60 h-32 bg-gradient-to-br from-purple-500/40 via-blue-400/30 to-pink-400/30 blur-2xl rounded-full opacity-80 -z-10 animate-pulse" />
          <motion.img 
            src={hero1} 
            alt="Hero 1" 
            className="w-16 h-16 rounded-xl shadow-lg object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 ring-2 ring-purple-300/40"
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
          />
          <motion.img 
            src={hero2} 
            alt="Hero 2" 
            className="w-20 h-20 rounded-xl shadow-lg object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 ring-2 ring-blue-300/40"
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 80 }}
          />
          <motion.img 
            src={hero3} 
            alt="Hero 3" 
            className="w-14 h-14 rounded-xl shadow-lg object-cover bg-white/20 hover:scale-110 hover:shadow-purple-400 transition-all duration-500 ring-2 ring-pink-300/40"
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
          />
        </div>
      </div>



      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[40px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-white/10 backdrop-blur-md shadow-lg">
            <motion.div
              animate={{
                y: [0, 24, 0],
                boxShadow: [
                  '0 0 0px #915EFF',
                  '0 0 12px #915EFF',
                  '0 0 0px #915EFF'
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 shadow-lg"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
