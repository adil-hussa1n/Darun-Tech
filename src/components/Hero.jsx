import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaUserCheck, FaStar, FaUsers, FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-white/15 hover:border-[#915EFF]/50 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: 'spring', stiffness: 80 }}
    >
      <div className="flex items-center mb-3">
        <div className="p-2 rounded-lg bg-[#915EFF]/20 mr-3 group-hover:bg-[#915EFF]/30 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <p className="text-secondary text-sm">{description}</p>
    </motion.div>
  );
};

const Hero = () => {
  // Particles for the background effect
  const particles = Array.from({ length: 20 }).map((_, index) => ({
    id: index,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#915EFF]/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a0b2e]/80 via-[#150829] to-[#000000] -z-10" />
      
      {/* Radial gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#915EFF]/5 rounded-full blur-[100px] -z-5" />

      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-col items-center gap-5`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Unlock the Power of <span className="text-[#915EFF] inline-block relative">
              Reviews with Darun
              <motion.div 
                className="absolute -bottom-2 left-0 h-[6px] bg-[#915EFF]/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Connecting Businesses and Shoppers for Exceptional Experiences
          </motion.p>
        </motion.div>

        {/* Hero content with features */}
        <div className="flex flex-col w-full items-center justify-center gap-10 max-w-4xl mx-auto">
          {/* Feature cards in a grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<FaUserCheck className="text-[#915EFF] text-xl" />}
              title="Business Profiles"
              description="Create a dedicated profile to showcase your offers, services, and contact information to potential customers."
              delay={0.3}
            />
            <FeatureCard 
              icon={<FaStar className="text-[#915EFF] text-xl" />}
              title="Review Collection"
              description="Collect detailed reviews to build trust and enhance your online reputation with verified customer feedback."
              delay={0.5}
            />
            <FeatureCard 
              icon={<FaUsers className="text-[#915EFF] text-xl" />}
              title="Active Shopper Communities"
              description="Join vibrant communities of 10,000+ active members eagerly looking for businesses like yours."
              delay={0.7}
            />
          </div>

          {/* Stats Section */}
          <motion.div 
            className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-white text-sm">Active Community Members</p>
            </div>
            <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">5,000+</h3>
              <p className="text-white text-sm">Verified Business Profiles</p>
            </div>
            <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10 text-center">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">95%</h3>
              <p className="text-white text-sm">Customer Satisfaction</p>
            </div>
          </motion.div>

          {/* Animated Divider */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full my-4"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <a href="#services" className="bg-[#915EFF] text-white px-8 py-4 rounded-full font-medium hover:bg-[#7d51d6] transition-all duration-300 shadow-lg hover:shadow-[#915EFF]/40 flex items-center justify-center group">
              Explore Packages
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a href="#contact" className="border border-[#915EFF] text-white px-8 py-4 rounded-full font-medium hover:bg-[#915EFF]/10 transition-all duration-300 shadow-lg flex items-center justify-center">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-end px-8">
        <a href="#about">
          <motion.div 
            className="w-[40px] h-[70px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 bg-black/20 backdrop-blur-md shadow-lg hover:border-[#915EFF] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
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
              className="w-3 h-3 rounded-full bg-[#915EFF] mb-1 shadow-lg"
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
