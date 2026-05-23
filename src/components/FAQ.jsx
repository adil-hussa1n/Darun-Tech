import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { FaChevronDown, FaSearch, FaQuestionCircle } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className={`flex justify-between items-center w-full p-5 rounded-2xl transition-all duration-300 text-left border ${
          isOpen 
            ? 'bg-[#1b1544] border-[#915EFF]/50 shadow-lg shadow-[#915EFF]/5' 
            : 'bg-[#151030]/60 border-white/5 hover:border-[#915EFF]/30'
        }`}
        onClick={onClick}
      >
        <h3 className="text-white text-[16px] sm:text-[18px] font-bold tracking-tight pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#915EFF] flex-shrink-0"
        >
          <FaChevronDown size={14} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 bg-[#151030]/30 rounded-b-2xl border-x border-b border-white/5 -mt-2 text-gray-300 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I get started listing my outlet on Darun?",
      answer: "Getting started is extremely simple. Register directly via our upcoming web application dashboard or sign up for our Free Basic Listing Package. Once registered, you can build your profile and begin collecting reviews within minutes."
    },
    {
      question: "What are the core benefits of upgrading to premium packages?",
      answer: "Premium packages (like Spotlight or Mega Exposure) grant your business prominent search result placement, verified blue checkmark badges, automated review request outreach campaigns, customized analytical widgets, and direct push notification channels to local shoppers."
    },
    {
      question: "How does the customer cashback incentive review system function?",
      answer: "Businesses can configure specific cashback values (e.g. up to 10%) on their dashboard. Shoppers submit verified receipts and write reviews, and receive cashback directly in their wallets. This drives huge submission volumes while guarding against spam."
    },
    {
      question: "Is there a support channel for setting up ads and graphics?",
      answer: "Yes, our Social Media Marketing Solution includes complete design brainstorming, graphic asset creations, copywriting, and active Meta ad campaign optimizations managed directly by our core creative team."
    },
    {
      question: "How do you filter and protect profiles from fraudulent negative reviews?",
      answer: "Darun uses dual-layer verification. Reviewers must provide transaction verification (like invoices or check-ins) and our AI scanning engine flags anomalous review spams, ensuring that ratings remain authentic."
    }
  ];

  const filteredFaqs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full mx-auto pb-12">
      <div className={`${styles.paddingX} max-w-4xl mx-auto`}>
        
        {/* Header */}
        <motion.div variants={textVariant()} className="text-center mb-10">
          <p className={styles.sectionSubText}>Frequently Asked Questions</p>
          <h2 className={styles.sectionHeadText}>FAQ.</h2>
          <p className="mt-2 text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Find answers to commonly asked questions about Darun Tech's profiles, review widgets, and advertising packages.
          </p>
        </motion.div>

        {/* Interactive Search Bar */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="mb-8 relative"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <FaSearch size={14} />
          </div>
          <input 
            type="text"
            placeholder="Search FAQs by keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#151030]/40 text-white text-sm rounded-2xl pl-11 pr-4 py-3.5 border border-white/10 focus:outline-none focus:border-[#915EFF] focus:ring-1 focus:ring-[#915EFF] transition-all"
          />
        </motion.div>

        {/* FAQs Accordion */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-6"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))
          ) : (
            <div className="text-center py-10 bg-[#151030]/20 rounded-2xl border border-white/5">
              <span className="text-gray-400 text-sm block">No results match your search keywords.</span>
            </div>
          )}
        </motion.div>

        {/* Contact/CTA footer card */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-14 bg-gradient-to-r from-[#1c164a] to-[#151030] p-8 rounded-[24px] border border-[#915EFF]/20 shadow-2xl text-center relative overflow-hidden group"
        >
          <div className="absolute top-4 left-4 text-white/5 group-hover:scale-105 transition-transform">
            <FaQuestionCircle size={72} />
          </div>
          <div className="relative z-10">
            <h3 className="text-white text-[22px] font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-6 max-w-md mx-auto">
              Our support team is ready to help configure your business parameters. Send us a message today!
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactScroll}
              className="bg-gradient-to-r from-[#915EFF] to-blue-500 text-white py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#915EFF]/15 transition-all"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(FAQ, "faq");
