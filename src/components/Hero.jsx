import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { FaUserCheck, FaStar, FaUsers, FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#915EFF]/50 group relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ delay, type: 'spring', stiffness: 80 }}
    >
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#915EFF]/10 blur-xl group-hover:bg-[#915EFF]/20 transition-all duration-500"></div>
      <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-[#915EFF]/5 blur-xl group-hover:bg-[#915EFF]/10 transition-all duration-500"></div>
      
      <div className="flex items-center mb-3 relative z-10">
        <div className="p-3 rounded-lg bg-[#915EFF]/20 mr-3 group-hover:bg-[#915EFF]/30 transition-all duration-300 shadow-md group-hover:shadow-[#915EFF]/20">
          {icon}
        </div>
        <h3 className="text-white font-bold text-lg group-hover:text-[#915EFF] transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-secondary text-sm group-hover:text-white/80 transition-colors duration-300 relative z-10">{description}</p>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000 ease-in-out"></div>
    </motion.div>
  );
};

const StatCard = ({ number, label, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg p-4 sm:p-6 rounded-xl border border-white/10 text-center relative overflow-hidden group"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ delay, type: 'spring', stiffness: 80 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(145, 94, 255, 0.3)' }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#915EFF]/10 group-hover:bg-[#915EFF]/20 transition-all duration-300">
        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-transparent border-r-black/40"></div>
      </div>

      <h3 className="text-[#915EFF] text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 relative z-10 group-hover:scale-110 transition-transform duration-300">{number}</h3>
      <p className="text-white text-xs sm:text-sm relative z-10 group-hover:text-white/90 transition-colors duration-300">{label}</p>
      
      {/* Subtle pulse animation */}
      <motion.div 
        className="absolute inset-0 bg-[#915EFF]/5 rounded-xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      />
    </motion.div>
  );
};

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particles for the background effect
  const particles = Array.from({ length: 30 }).map((_, index) => ({
    id: index,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-20">
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
            scale: [1, 1.2, 1],
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a0b2e]/90 via-[#150829] to-[#000000] -z-10" />
      
      {/* Radial gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#915EFF]/10 rounded-full blur-[100px] -z-5" />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MTQzOTkiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-40 -z-5" />
      
      {/* Animated glow effect */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#915EFF]/20 blur-[120px] -z-5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-[#915EFF]/10 blur-[100px] -z-5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      <div className="relative pt-[100px] w-full flex flex-col items-center gap-5 px-4 sm:px-8 md:px-16 max-w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 px-4 relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-[#915EFF]/10 blur-xl hidden md:block"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#915EFF]/10 blur-xl hidden md:block"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2.5,
            }}
          />
          
          <motion.h1 
            className={`text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-black relative z-10`}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, type: "spring" }}
          >
            Unlock the Power of <span className="text-[#915EFF] inline-block relative">
              <span className="whitespace-normal">Reviews with Darun</span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-[4px] sm:h-[6px] bg-gradient-to-r from-[#915EFF]/30 via-[#915EFF]/80 to-[#915EFF]/30 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-[18px] sm:text-[20px] md:text-[22px] text-white-100 mt-4 max-w-3xl mx-auto relative z-10 font-bold`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Connecting Businesses and Shoppers for Exceptional Experiences
          </motion.p>
          
          {/* Subtle badge/tag */}
          <motion.div 
            className="inline-block bg-[#915EFF]/10 backdrop-blur-sm px-4 py-1 rounded-full border border-[#915EFF]/20 mt-4 text-xs text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Trusted by 5,000+ Businesses
          </motion.div>
        </motion.div>

        {/* Hero content with features */}
        <div className="flex flex-col w-full items-center justify-center gap-6 sm:gap-10 max-w-4xl mx-auto">
          {/* Feature cards in a grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-8">
            <StatCard 
              number="10,000+" 
              label="Active Community Members"
              delay={0.3}
            />
            <StatCard 
              number="5,000+" 
              label="Verified Business Profiles"
              delay={0.5}
            />
            <StatCard 
              number="95%" 
              label="Customer Satisfaction"
              delay={0.7}
            />
          </div>

          {/* Animated Divider */}
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#915EFF] to-transparent rounded-full my-6"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          />
          
          {/* CTA Button */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
          
          </motion.div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
