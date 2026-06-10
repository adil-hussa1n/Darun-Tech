import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPhone, 
  FaEnvelope, 
  FaGlobe, 
  FaTools, 
  FaCopy, 
  FaCheck, 
  FaRocket, 
  FaChartLine, 
  FaWrench, 
  FaChevronDown, 
  FaChevronUp, 
  FaClock 
} from "react-icons/fa";
import { logo } from "../assets";

const statusMessages = [
  "Deploying database schema migrations...",
  "Optimizing static asset delivery bundles...",
  "Updating partner review verification engines...",
  "Testing endpoint latency and security patches...",
  "Polishing merchant analytics dashboards...",
];

const faqs = [
  {
    question: "Why is the Darun Tech website currently offline?",
    answer: "We are currently implementing major updates to optimize core systems, including faster dashboard response times, improved reputation analytics tools, and verified merchant widgets to support business growth."
  },
  {
    question: "How long will this maintenance last?",
    answer: "Our operations and engineering teams are in the final stages of systems validation. We expect to be fully operational and back online within a few hours."
  },
  {
    question: "How can I get immediate business assistance?",
    answer: "For any urgent inquiries, partnerships, or digital promotion projects, you can directly call or email our Operations Manager, Asifur Rahman. Direct buttons are available right on this page."
  }
];

const Maintenance = () => {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [progress, setProgress] = useState(82);
  const [statusIndex, setStatusIndex] = useState(0);

  // Rotate status messages and simulate slow progress increment
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statusMessages.length);
    }, 4500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 94 ? prev + 1 : prev));
    }, 15000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("01831877987");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col justify-between relative overflow-hidden font-sans select-none pb-0">
      
      {/* PREMIUM DYNAMIC BACKGROUND BLOBS */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[450px] md:w-[600px] h-[450px] md:h-[600px] rounded-full bg-gradient-to-r from-[#915EFF]/20 to-[#fc00ff]/5 blur-[120px] pointer-events-none"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-gradient-to-l from-[#00dbde]/15 to-[#915EFF]/5 blur-[140px] pointer-events-none"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />
      <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-[#915EFF]/5 blur-[90px] pointer-events-none" />

      {/* HEADER / TOP BAR */}
      <header className="w-full z-20 border-b border-white/5 bg-[#050816]/75 backdrop-blur-md sticky top-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <motion.img
              src={logo}
              alt="Darun Tech Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full shadow-lg border border-[#915EFF]/20 flex-shrink-0"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="min-w-0">
              <h1 className="text-[14px] xs:text-[16px] sm:text-lg md:text-xl font-black tracking-wide text-white whitespace-nowrap flex items-center">
                Darun Tech <span className="text-[#915EFF] ml-1 sm:ml-1.5 font-bold">Private Limited</span>
              </h1>
            </div>
          </div>
          
          {/* Status Badge - Hidden on Mobile */}
          <div className="hidden sm:flex items-center gap-2 bg-[#915EFF]/10 border border-[#915EFF]/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#915EFF] uppercase tracking-wider flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
            <FaTools className="text-[10px]" />
            <span>System Optimization</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-4xl mx-auto px-6 py-12 z-10 text-center w-full">
        
        {/* Glowing Indicator Icon */}
        <motion.div
          className="mb-6 p-4 bg-[#151030]/60 rounded-3xl border border-white/10 relative glow-shadow-purple inline-block"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-3xl text-[#00dbde]"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <FaTools />
          </motion.div>
        </motion.div>

        {/* Large Brand Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 max-w-3xl mx-auto"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built to Support Business Growth So Now{" "}
          <span className="shimmer-text block mt-2 text-[#915EFF]">
            “WE ARE SMASHING OUT SOME DARUN UPDATES. ”
          </span>
        </motion.h2>

        {/* Main Subheading Text */}
        <motion.p
          className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          “From digital promotion to business management solutions, Darun helps businesses stay
          organized, grow faster, and connect better with customers.”
        </motion.p>

        {/* INTERACTIVE PROGRESS BAR & STATUS */}
        <motion.div
          className="w-full max-w-md mx-auto mb-12 p-6 rounded-2xl bg-[#151030]/30 backdrop-blur-md border border-white/5 shadow-xl"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-2">
            <span className="flex items-center gap-1.5">
              <FaClock className="text-[#00dbde] animate-pulse" />
              <span>Update Progress</span>
            </span>
            <span className="text-[#00dbde]">{progress}%</span>
          </div>

          {/* Progress track */}
          <div className="w-full h-3 bg-[#050816] rounded-full overflow-hidden border border-white/5 p-[1px] relative shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#915EFF] to-[#00dbde] rounded-full relative"
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Highlight flash */}
              <div className="absolute top-0 right-0 bottom-0 w-3 bg-white/20 blur-[2px] animate-pulse" />
            </motion.div>
          </div>

          {/* Live Status Message Rotation */}
          <div className="mt-3 min-h-[18px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={statusIndex}
                className="text-[11px] font-medium tracking-wide text-gray-400 italic"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {statusMessages[statusIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CORE SERVICES focus BADGES */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-4 rounded-xl border border-white/5 bg-[#151030]/10 hover:bg-[#151030]/25 transition-all hover:scale-[1.03] duration-300 flex items-center gap-3.5 text-left group">
            <div className="p-3 rounded-lg bg-[#915EFF]/10 border border-[#915EFF]/20 text-[#915EFF] group-hover:bg-[#915EFF] group-hover:text-white transition-all duration-300">
              <FaRocket className="text-sm" />
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-black">Digital Promotion</h4>
              <p className="text-gray-400 text-[10px] sm:text-[11px] mt-0.5">Vibrant visibility setups</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-[#151030]/10 hover:bg-[#151030]/25 transition-all hover:scale-[1.03] duration-300 flex items-center gap-3.5 text-left group">
            <div className="p-3 rounded-lg bg-[#00dbde]/10 border border-[#00dbde]/20 text-[#00dbde] group-hover:bg-[#00dbde] group-hover:text-white transition-all duration-300">
              <FaChartLine className="text-sm" />
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-black">Business Solutions</h4>
              <p className="text-gray-400 text-[10px] sm:text-[11px] mt-0.5">Structured client flows</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-[#151030]/10 hover:bg-[#151030]/25 transition-all hover:scale-[1.03] duration-300 flex items-center gap-3.5 text-left group">
            <div className="p-3 rounded-lg bg-[#fc00ff]/10 border border-[#fc00ff]/20 text-[#fc00ff] group-hover:bg-[#fc00ff] group-hover:text-[#050816] transition-all duration-300">
              <FaWrench className="text-sm" />
            </div>
            <div>
              <h4 className="text-white text-xs sm:text-sm font-black">Operational Tools</h4>
              <p className="text-gray-400 text-[10px] sm:text-[11px] mt-0.5">Smooth, verified integrations</p>
            </div>
          </div>
        </motion.div>

        {/* GLOSSY DIRECT CONTACT CARD */}
        <motion.div
          className="w-full p-8 rounded-3xl glassmorphism border border-white/5 shadow-2xl relative overflow-hidden text-left mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Subtle gradient light flare */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-b from-[#915EFF]/10 to-transparent blur-2xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-green-400 uppercase">
                  Available for Operations Support
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black mb-1">
                Asifur Rahman
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-medium">
                Director and Operations Manager
              </p>
              <p className="text-gray-400 text-xs mt-3 leading-relaxed max-w-md">
                Reach out directly for assistance, questions, or account services while we wrap up the website upgrades.
              </p>
            </div>

            {/* Quick interactive dials */}
            <div className="flex flex-wrap gap-3.5 items-center">
              {/* Call Trigger */}
              <motion.a
                href="tel:01831877987"
                className="flex-grow md:flex-grow-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#915EFF] to-blue-500 hover:from-[#9c6eff] hover:to-blue-400 text-white font-bold text-xs rounded-xl shadow-lg shadow-[#915EFF]/15 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaPhone className="text-xs" />
                <span>Call Asifur</span>
              </motion.a>

              {/* Copy Clipboard Trigger */}
              <motion.button
                onClick={handleCopyPhone}
                className="flex-grow md:flex-grow-0 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#151030]/60 hover:bg-[#151030]/90 text-white font-bold text-xs rounded-xl border border-white/10 hover:border-[#915EFF]/30 transition-all duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {copied ? (
                  <>
                    <FaCheck className="text-green-400 text-xs" />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-gray-400 text-xs" />
                    <span>Copy Phone</span>
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ABOUT US SECTION */}
        <motion.section
          className="w-full text-left mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="gradient-border-card p-6 sm:p-8 bg-[#151030]/25 backdrop-blur-md relative">
            <h3 className="text-white text-md sm:text-lg font-black tracking-wider uppercase mb-4 text-[#915EFF] flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#915EFF]" /> About Us
            </h3>
            
            <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
              <p>
                At Darun, we believe business growth becomes easier with the right systems and
                smart strategies.
              </p>
              <p>
                We develop business management solutions, digital growth strategies, and
                operational tools designed to help modern businesses work more efficiently and
                grow with confidence.
              </p>
              <p className="border-t border-white/5 pt-4 font-normal text-white/90">
                Our mission is to simplify business operations through practical technology and
                meaningful innovation.
              </p>
            </div>
          </div>
        </motion.section>

        {/* INTERACTIVE MAINTENANCE FAQ SECTION */}
        <motion.section
          className="w-full text-left mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-5 flex items-center gap-2 px-1">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-xl border border-white/5 bg-[#151030]/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-[#151030]/20 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <FaChevronUp className="text-gray-400 text-xs flex-shrink-0" />
                    ) : (
                      <FaChevronDown className="text-gray-400 text-xs flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-white/5 text-gray-400 text-xs sm:text-sm leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.section>

      </main>

      {/* FOOTER AREA */}
      <footer className="w-full border-t border-white/5 bg-[#151030]/30 backdrop-blur-md py-8 mt-12 z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
              Contact Information
            </p>
            <div className="mt-2.5 flex flex-col sm:flex-row gap-4 text-xs text-gray-400 justify-center md:justify-start">
              <a 
                href="mailto:daruntechpvtltd@gmail.com" 
                className="flex items-center justify-center gap-2 hover:text-[#915EFF] transition-colors"
              >
                <FaEnvelope className="text-[#915EFF] text-xs" />
                <span>daruntechpvtltd@gmail.com</span>
              </a>
              <a 
                href="tel:01831877987" 
                className="flex items-center justify-center gap-2 hover:text-[#915EFF] transition-colors"
              >
                <FaPhone className="text-[#915EFF] text-xs" />
                <span>01831877987</span>
              </a>
              <a 
                href="https://www.daruntechpvtltd.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 hover:text-[#915EFF] transition-colors"
              >
                <FaGlobe className="text-[#915EFF] text-xs" />
                <span>www.daruntechpvtltd.com</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-[10px] sm:text-[11px] font-medium tracking-wide">
              &copy; {new Date().getFullYear()} Darun Tech Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Maintenance;
