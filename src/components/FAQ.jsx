import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className="flex justify-between items-center w-full p-5 bg-tertiary rounded-[20px] shadow-card text-left"
        onClick={onClick}
      >
        <h3 className="text-white text-[18px] font-bold">{question}</h3>
        <span className="text-[#915EFF] text-2xl">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="p-5 bg-tertiary/50 rounded-b-[20px] mt-1"
        >
          <p className="text-secondary">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I get started with Darun?",
      answer: "Getting started is easy—just sign up or contact us."
    },
    {
      question: "What benefits do the Darun packages offer?",
      answer: "They include visibility, verified status, marketing, and analytics tools."
    },
    {
      question: "How can I contact Darun for more information?",
      answer: "Reach out via email or phone. We're here to help."
    }
  ];

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Frequently Asked Questions</p>
          <h2 className={styles.sectionHeadText}>FAQ</h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-10"
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="mt-10 bg-tertiary p-8 rounded-[20px] shadow-card text-center"
        >
          <h3 className="text-white text-[24px] font-bold mb-4">Ready to get started?</h3>
          <p className="text-secondary mb-6">Contact us today or sign up for our Free Basic Listing Package to get started.</p>
          <button className="bg-[#915EFF] text-white py-3 px-8 rounded-lg font-bold hover:bg-[#7a4ecc] transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(FAQ, "faq");
