import React, { useEffect, useState, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { FaUserCheck, FaStar, FaUsers, FaArrowRight, FaChevronDown, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

const FeatureCard = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (window.innerWidth < 768) {
      controls.start("visible");
    } else if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="glassmorphism p-5 rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#915EFF]/50 group relative overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ delay, type: 'spring', stiffness: 80 }}
    >
      <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-[#915EFF]/10 blur-xl group-hover:bg-[#915EFF]/20 transition-all duration-500"></div>
      <div className="absolute -left-4 -bottom-4 w-20 h-20 rounded-full bg-[#915EFF]/5 blur-xl group-hover:bg-[#915EFF]/10 transition-all duration-500"></div>

      <div className="flex items-center mb-3 relative z-10">
        <div className="p-3 rounded-lg bg-[#915EFF]/20 mr-3 group-hover:bg-[#915EFF]/35 transition-all duration-300 shadow-md">
          {icon}
        </div>
        <h3 className="text-white font-bold text-base group-hover:text-[#915EFF] transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-400 text-[13px] group-hover:text-white/80 transition-colors duration-300 relative z-10 leading-relaxed">{description}</p>

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
    if (window.innerWidth < 768) {
      controls.start("visible");
    } else if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="glassmorphism p-5 rounded-2xl text-center relative overflow-hidden group border border-white/5"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      whileHover={{ y: -5, borderColor: 'rgba(145, 94, 255, 0.4)', boxShadow: '0 10px 30px -5px rgba(145, 94, 255, 0.25)' }}
    >
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#915EFF]/10 group-hover:bg-[#915EFF]/20 transition-all duration-300">
        <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-transparent border-r-[#151030]"></div>
      </div>

      <h3 className="text-[#915EFF] text-3xl font-black mb-1 group-hover:scale-105 transition-transform duration-300 tracking-tight">{number}</h3>
      <p className="text-white text-xs font-semibold uppercase tracking-wider opacity-80">{label}</p>

      <motion.div
        className="absolute inset-0 bg-[#915EFF]/2 rounded-2xl"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      />
    </motion.div>
  );
};

const Hero = () => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const sampleReviews = [
    { name: "Rafiqul I.", rating: 5, time: "2m ago", text: "Incredible response from QuickMart! The verified trust seal makes shopping worry-free.", brand: "QuickMart" },
    { name: "Anika T.", rating: 5, time: "15m ago", text: "GearXpert resolved my support ticket in minutes. Highly recommend finding verified businesses here.", brand: "GearXpert" },
    { name: "Zahid H.", rating: 4, time: "1h ago", text: "Great deals, verified listing helps build trust immediately. Love using Darun Tech.", brand: "justbuyz" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewIdx((prev) => (prev + 1) % sampleReviews.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, index) => ({
      id: index,
      size: Math.random() * 3 + 1.5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  const handleCTAClick = (targetId) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden pb-12">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#915EFF]/15"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0.1, 0.4, 0.1],
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#100d25] via-[#050816] to-[#050816] -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-[#915EFF]/10 rounded-full blur-[130px] -z-5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM2MTQzOTkiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgogIDwvcGF0dGVybj4KPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30 -z-5" />

      <div className="relative pt-[120px] max-w-7xl mx-auto px-4 xs:px-6 sm:px-12 md:px-16 flex flex-col gap-10">

        {/* Two Column Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#915EFF]/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#915EFF]/20 text-xs font-semibold text-white/90"
            >
              <FaCheckCircle className="text-[#915EFF] text-sm animate-pulse" />
              Bangladesh's #1 Verified Review Platform
            </motion.div>

            <motion.h1
              className="text-white text-[32px] sm:text-[48px] md:text-[56px] font-black leading-tight tracking-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Unlock the Power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-blue-400">
                Reviews with Darun
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed max-w-xl font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Connecting local businesses with shoppers to construct verified, authentic online reputations. Elevate your presence and boost buyer trust instantly.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTAClick('services')}
                className="bg-gradient-to-r from-[#915EFF] to-blue-500 text-white font-bold text-[14px] px-8 py-3.5 rounded-xl shadow-lg shadow-[#915EFF]/20 hover:shadow-[#915EFF]/30 flex items-center justify-center gap-2 group transition-all"
              >
                Get Started Free
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCTAClick('about')}
                className="bg-transparent border border-white/20 hover:border-white/50 text-white font-bold text-[14px] px-8 py-3.5 rounded-xl flex items-center justify-center transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Review Widget Simulator */}
          <motion.div
            className="lg:col-span-5 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full max-w-[420px] gradient-border-card p-6 glow-shadow-purple glassmorphism relative overflow-hidden">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#915EFF] to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                    DM
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      Darun Mock Store
                      <span className="bg-blue-500 text-[10px] text-white px-1.5 py-0.5 rounded-full font-extrabold flex items-center justify-center scale-95 shadow-md shadow-blue-500/20">
                        ✓ VERIFIED
                      </span>
                    </h4>
                    <p className="text-gray-400 text-xs">Retail & Marketplace</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <FaStar className="star-glow text-xs" />
                    <FaStar className="star-glow text-xs" />
                    <FaStar className="star-glow text-xs" />
                    <FaStar className="star-glow text-xs" />
                    <FaStar className="star-glow text-xs" />
                  </div>
                  <p className="text-white text-xs font-bold mt-0.5">4.9 / 5.0 Rating</p>
                </div>
              </div>

              {/* Simulation display card */}
              <div className="bg-[#100d25]/60 rounded-xl p-4 border border-white/5 min-h-[140px] relative flex flex-col justify-between">
                <div className="absolute top-3 right-3 text-[#915EFF]/20">
                  <FaQuoteLeft size={24} />
                </div>

                <motion.div
                  key={activeReviewIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-white text-xs font-bold">{sampleReviews[activeReviewIdx].name}</span>
                    <span className="text-gray-400 text-[10px]">{sampleReviews[activeReviewIdx].time}</span>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <FaStar
                        key={idx}
                        className={`text-[10px] ${idx < sampleReviews[activeReviewIdx].rating ? 'text-yellow-400 star-glow' : 'text-gray-600'
                          }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 text-xs italic leading-relaxed mt-1">
                    "{sampleReviews[activeReviewIdx].text}"
                  </p>
                </motion.div>

                <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-bold text-gray-400">
                    Reviewed Brand: <span className="text-[#915EFF]">{sampleReviews[activeReviewIdx].brand}</span>
                  </span>
                  <div className="flex gap-1.5">
                    {sampleReviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveReviewIdx(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeReviewIdx ? 'bg-[#915EFF] w-4' : 'bg-gray-600'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive badge simulator CTA */}
              <div className="mt-4 bg-[#915EFF]/10 rounded-xl p-3 flex flex-wrap justify-between items-center gap-2 border border-[#915EFF]/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-white text-[11px] font-medium">Verified Live Reviews Stream</span>
                </div>
                <span className="text-[#915EFF] text-xs font-bold hover:underline cursor-pointer flex items-center gap-1">
                  Embed Widget <FaChevronDown className="rotate-[-90deg] text-[10px]" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            icon={<FaUserCheck className="text-[#915EFF] text-lg" />}
            title="Premium Business Profiles"
            description="Establish verification status, customize features, catalog offers, and highlight user-trust seals to stand out."
            delay={0.2}
          />
          <FeatureCard
            icon={<FaStar className="text-[#915EFF] text-lg" />}
            title="Organic Feedback Streams"
            description="Collect detailed ratings directly from shoppers, helping businesses trace metrics and respond in real-time."
            delay={0.4}
          />
          <FeatureCard
            icon={<FaUsers className="text-[#915EFF] text-lg" />}
            title="Active Buyer Networks"
            description="Engage automatically with thousands of registered buyers ready to buy from trust-certified operators."
            delay={0.6}
          />
        </div>

        {/* Stats Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <StatCard
            number="10,000+"
            label="Registered Shoppers"
            delay={0.3}
          />
          <StatCard
            number="5,000+"
            label="Verified Outlets listed"
            delay={0.5}
          />
          <StatCard
            number="98%"
            label="Trust Resolution Rate"
            delay={0.7}
          />
        </div>

        {/* Scroll Indicator */}
        <div className="w-full flex justify-center items-center py-6 mt-2">
          <motion.div
            onClick={() => handleCTAClick('about')}
            className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">Discover More</span>
            <FaChevronDown className="text-[#915EFF] text-sm" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
