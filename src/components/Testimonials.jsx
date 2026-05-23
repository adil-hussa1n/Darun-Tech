import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-[#151030]/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl hover:border-[#915EFF]/25 hover:shadow-[#915EFF]/10 hover:scale-[1.02] transition-all duration-300 xs:w-[360px] w-full flex flex-col justify-between relative overflow-hidden group"
  >
    {/* Floating quote background */}
    <div className="absolute top-4 right-4 text-[#915EFF]/10 group-hover:text-[#915EFF]/20 transition-colors">
      <FaQuoteLeft size={44} />
    </div>

    <div>
      {/* Stars ratings */}
      <div className="flex gap-1 text-yellow-400 mb-5 relative z-10">
        <FaStar className="star-glow text-xs" />
        <FaStar className="star-glow text-xs" />
        <FaStar className="star-glow text-xs" />
        <FaStar className="star-glow text-xs" />
        <FaStar className="star-glow text-xs" />
      </div>

      <p className="text-gray-200 tracking-wide text-[14px] leading-relaxed relative z-10 italic mb-6">
        "{testimonial}"
      </p>
    </div>

    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-bold text-[15px] truncate">
          {name}
        </h4>
        <p className="text-gray-400 text-[11px] font-semibold mt-0.5 truncate uppercase tracking-wider">
          {designation} @ <span className="text-[#915EFF]">{company}</span>
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <div className={`${styles.padding} relative w-full min-h-screen bg-gradient-to-b from-[#050816] to-[#100d25]`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={textVariant()} className="mb-10 text-center">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          <p className="mt-4 text-gray-300 text-[16px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
            Real feedback from merchants and business owners who have scaled their presence using the Darun Tech framework.
          </p>
        </motion.div>

        {/* Testimonials list */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;