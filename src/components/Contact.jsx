import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle, FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'faq'

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    
    if (!form.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!form.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!form.message.trim()) {
      errors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errors.message = "Message should be at least 10 characters long";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID || 'template_id',
        {
          from_name: form.name,
          to_name: "Darun Tech Team",
          from_email: form.email,
          to_email: "contact@daruntech.com",
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY || 'public_key'
      )
      .then(
        () => {
          setLoading(false);
          setIsSubmitted(true);
          
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          
          setTimeout(() => {
            setIsSubmitted(false);
          }, 6000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFormErrors({
            submit: "Service unavailable in development. Please call directly or try again."
          });
        }
      );
  };
  
  const faqs = [
    {
      question: "Is the Free Basic Listing permanent?",
      answer: "Yes, our Free Basic Listing plan has no expiry limits. You can run review gathering widgets at no cost forever."
    },
    {
      question: "How long does verification take?",
      answer: "Outlet review submissions and dashboard profile verification typically takes 24-48 business hours to process."
    },
    {
      question: "Can I manage multiple outlets?",
      answer: "Yes, premium brand accounts can link multiple physical store locations, all monitored from a unified parent manager dashboard."
    }
  ];

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        
        {/* Header */}
        <motion.div variants={textVariant()} className="mb-10 text-center md:text-left">
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact Us.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.75)}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-white/5 glow-shadow-purple flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-[#915EFF]/5" />
              <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-blue-500/5" />
              
              <div className="relative z-10">
                <h3 className="text-white text-[22px] font-black tracking-tight mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start group">
                    <div className="bg-[#151030] p-3.5 rounded-xl mr-4 border border-white/5 group-hover:bg-[#915EFF] group-hover:text-white transition-colors duration-300">
                      <FaMapMarkerAlt className="text-[#915EFF] text-base group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-[15px] block">Corporate Headquarters</span>
                      <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">Kazitula Road, Sylhet, Bangladesh</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="bg-[#151030] p-3.5 rounded-xl mr-4 border border-white/5 group-hover:bg-[#915EFF] group-hover:text-white transition-colors duration-300">
                      <FaPhone className="text-[#915EFF] text-base group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-[15px] block">Hotline Number</span>
                      <a href="tel:+8801831877987" className="text-gray-400 text-xs mt-0.5 hover:text-[#915EFF] transition-colors block">
                        +880 1831 877987
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="bg-[#151030] p-3.5 rounded-xl mr-4 border border-white/5 group-hover:bg-[#915EFF] group-hover:text-white transition-colors duration-300">
                      <FaEnvelope className="text-[#915EFF] text-base group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-[15px] block">Email Support</span>
                      <a href="mailto:daruntechpvtltd@gmail.com" className="text-gray-400 text-xs mt-0.5 hover:text-[#915EFF] transition-colors block">
                        daruntechpvtltd@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start group">
                    <div className="bg-[#151030] p-3.5 rounded-xl mr-4 border border-white/5 group-hover:bg-[#915EFF] group-hover:text-white transition-colors duration-300">
                      <FaClock className="text-[#915EFF] text-base group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-[15px] block">Business Hours</span>
                      <p className="text-gray-400 text-xs mt-0.5">Saturday - Thursday: 24 Hours</p>
                      <p className="text-gray-400 text-xs">Friday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Brand statement footer */}
              <div className="mt-8 pt-6 border-t border-white/5 text-gray-400 text-xs relative z-10 leading-relaxed italic">
                * We generally respond to queries within 2 hours. Support tickets can be submitted 24/7.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tabbed Content (Form & Quick FAQs) */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 0.75)}
            className="lg:col-span-7"
          >
            <div className="glassmorphism p-6 sm:p-8 rounded-3xl border border-white/5 glow-shadow-purple h-full flex flex-col justify-between">
              
              <div>
                {/* Modern Pill Style Tabs */}
                <div className="flex bg-[#050816]/60 p-1.5 rounded-xl border border-white/5 mb-8 w-fit">
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === 'message' 
                        ? 'bg-[#915EFF] text-white shadow-md' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Send Message
                  </button>
                  <button
                    onClick={() => setActiveTab('faq')}
                    className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === 'faq' 
                        ? 'bg-[#915EFF] text-white shadow-md' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Quick FAQs
                  </button>
                </div>
                
                {/* Animate tab content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'message' ? (
                    <motion.div
                      key="msg-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Success block */}
                      {isSubmitted && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3 shadow-inner"
                        >
                          <FaCheckCircle className="text-green-400 text-lg flex-shrink-0 mt-0.5 animate-pulse" />
                          <div>
                            <span className="text-white text-sm font-bold">Message Transmitted!</span>
                            <p className="text-gray-300 text-xs mt-1">Thank you. Your request is queued and our agent will follow up shortly.</p>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Error block */}
                      {formErrors.submit && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 shadow-inner"
                        >
                          <FaExclamationCircle className="text-red-400 text-lg flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-white text-sm font-bold">Transmission Halted</span>
                            <p className="text-gray-300 text-xs mt-1">{formErrors.submit}</p>
                          </div>
                        </motion.div>
                      )}
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">Name</label>
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              className={`w-full p-3.5 rounded-xl bg-[#050816]/60 text-white text-sm border ${
                                formErrors.name ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-[#915EFF]'
                              } focus:outline-none transition-colors shadow-inner`}
                              placeholder="Your Name"
                            />
                            {formErrors.name && (
                              <p className="text-red-400 text-[11px] font-semibold mt-1">{formErrors.name}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              className={`w-full p-3.5 rounded-xl bg-[#050816]/60 text-white text-sm border ${
                                formErrors.email ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-[#915EFF]'
                              } focus:outline-none transition-colors shadow-inner`}
                              placeholder="Your Email Address"
                            />
                            {formErrors.email && (
                              <p className="text-red-400 text-[11px] font-semibold mt-1">{formErrors.email}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">Subject</label>
                          <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className={`w-full p-3.5 rounded-xl bg-[#050816]/60 text-white text-sm border ${
                              formErrors.subject ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-[#915EFF]'
                            } focus:outline-none transition-colors shadow-inner`}
                            placeholder="Reason for Contact"
                          />
                          {formErrors.subject && (
                            <p className="text-red-400 text-[11px] font-semibold mt-1">{formErrors.subject}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-300 text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className={`w-full p-3.5 rounded-xl bg-[#050816]/60 text-white text-sm border ${
                              formErrors.message ? 'border-red-500/60 focus:border-red-500' : 'border-white/10 focus:border-[#915EFF]'
                            } focus:outline-none transition-colors h-32 resize-none shadow-inner`}
                            placeholder="Write your comments or inquiries here (minimum 10 characters)..."
                          />
                          {formErrors.message && (
                            <p className="text-red-400 text-[11px] font-semibold mt-1">{formErrors.message}</p>
                          )}
                        </div>

                        <motion.button
                          type="submit"
                          disabled={loading}
                          className={`w-full py-4 px-6 bg-gradient-to-r from-[#915EFF] to-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#915EFF]/15 transition-all ${
                            loading ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                          whileHover={{ scale: loading ? 1 : 1.02 }}
                          whileTap={{ scale: loading ? 1 : 0.98 }}
                        >
                          {loading ? (
                            <>
                              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Transmitting Message...
                            </>
                          ) : (
                            <>
                              Send Message <FaPaperPlane size={10} />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="faq-quick"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {faqs.map((faq, idx) => (
                        <div key={idx} className="p-5 bg-[#050816]/60 rounded-2xl border border-white/5">
                          <h4 className="text-white font-bold text-sm mb-2">{faq.question}</h4>
                          <p className="text-gray-400 text-xs leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Verified profile indicators badge */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <FaUser className="text-[#915EFF]" />
                  <span>Secure SSL Encryption</span>
                </div>
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Darun Tech Pvt. Ltd.
                </span>
              </div>
              
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
