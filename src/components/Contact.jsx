import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

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
    const { target } = e;
    const { name, value } = target;

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
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID || 'service_id', // Fallback for development
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
          
          // Reset form after successful submission
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          
          // Reset submission status after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setFormErrors({
            ...formErrors,
            submit: "Something went wrong. Please try again."
          });
        }
      );
  };
  
  // FAQ data
  const faqs = [
    {
      question: "What is Darun Tech?",
      answer: "Darun Tech is a platform that connects businesses with customers through reviews and feedback, helping businesses grow their online presence and reputation."
    },
    {
      question: "How do I get started with Darun?",
      answer: "You can get started by signing up for our Free Basic Listing package, which allows you to create a verified profile and access our basic dashboard features."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and mobile payment services like bKash and Nagad for Bangladesh-based customers."
    },
    {
      question: "Can I upgrade my package later?",
      answer: "Yes, you can upgrade your package at any time. Your existing benefits will be carried over to your new package, and you'll only pay the difference."
    },
    {
      question: "How long does it take to set up my business profile?",
      answer: "Once you've signed up, your basic profile can be set up within minutes. Verification typically takes 24-48 hours for our team to review and approve."
    }
  ];

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact Us</h2>
        </motion.div>
        
        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-6 bg-gradient-to-r from-[#1d1836] to-[#2a1d5c] p-8 rounded-[20px] shadow-card text-center mb-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#915EFF]/10"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#915EFF]/10"></div>
          
          {/* Animated particles */}
          {Array(5).fill().map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#915EFF]/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`
              }}
            />
          ))}
          
          <div className="relative z-10">
            <h3 className="text-white text-[24px] font-bold mb-4">Ready to elevate your business?</h3>
            <p className="text-secondary mb-6 max-w-2xl mx-auto">Join thousands of businesses already growing with Darun. Contact us or try our Free Basic Listing Package today.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#915EFF] text-white py-3 px-8 rounded-lg font-bold hover:bg-[#7a4ecc] transition-all duration-300 flex items-center justify-center group"
                onClick={() => {
                  // Scroll to contact form
                  const contactForm = document.getElementById('contact-form');
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#915EFF] py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                Try Free Package
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -left-16 -top-16 w-48 h-48 rounded-full bg-[#915EFF]/5"></div>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-[#915EFF]/5"></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-[24px] font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start group" 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[#1a1a1a] p-3 rounded-full mr-4 group-hover:bg-[#915EFF] transition-colors duration-300">
                    <FaMapMarkerAlt className="text-[#915EFF] text-xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Address</h4>
                    <p className="text-secondary">123 Business Street, Dhaka, Bangladesh</p>
                    <a 
                      href="https://maps.google.com/?q=Dhaka,Bangladesh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#915EFF] text-sm hover:text-white transition-colors mt-1 inline-block"
                    >
                      View on map
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group" 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[#1a1a1a] p-3 rounded-full mr-4 group-hover:bg-[#915EFF] transition-colors duration-300">
                    <FaPhone className="text-[#915EFF] text-xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Phone</h4>
                    <p className="text-secondary">+880 1234-567890</p>
                    <a 
                      href="tel:+8801234567890" 
                      className="text-[#915EFF] text-sm hover:text-white transition-colors mt-1 inline-block"
                    >
                      Call now
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group" 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[#1a1a1a] p-3 rounded-full mr-4 group-hover:bg-[#915EFF] transition-colors duration-300">
                    <FaEnvelope className="text-[#915EFF] text-xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-secondary">contact@daruntech.com</p>
                    <a 
                      href="mailto:contact@daruntech.com" 
                      className="text-[#915EFF] text-sm hover:text-white transition-colors mt-1 inline-block"
                    >
                      Send email
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start group" 
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="bg-[#1a1a1a] p-3 rounded-full mr-4 group-hover:bg-[#915EFF] transition-colors duration-300">
                    <FaClock className="text-[#915EFF] text-xl group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Business Hours</h4>
                    <p className="text-secondary">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-secondary">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-secondary">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-[#333]">
                <h4 className="text-white font-bold mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] p-3 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] p-3 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] p-3 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] p-3 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card relative overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-[#915EFF]/5"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#915EFF]/5"></div>
            
            {/* Tabs for Message and FAQ */}
            <div className="flex mb-6 relative z-10">
              <button
                onClick={() => setActiveTab('message')}
                className={`px-4 py-2 rounded-tl-lg rounded-bl-lg font-medium transition-all duration-300 ${activeTab === 'message' ? 'bg-[#915EFF] text-white' : 'bg-[#1a1a1a] text-secondary hover:text-white'}`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('faq')}
                className={`px-4 py-2 rounded-tr-lg rounded-br-lg font-medium transition-all duration-300 ${activeTab === 'faq' ? 'bg-[#915EFF] text-white' : 'bg-[#1a1a1a] text-secondary hover:text-white'}`}
              >
                FAQs
              </button>
            </div>
            
            {/* Message Form */}
            {activeTab === 'message' && (
              <div className="relative z-10">
                <h3 className="text-white text-[24px] font-bold mb-6">Send us a Message</h3>
                
                {/* Success message */}
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center"
                  >
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-white">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {/* Error message */}
                {formErrors.submit && (
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center"
                  >
                    <FaExclamationCircle className="text-red-500 mr-3 flex-shrink-0" />
                    <p className="text-white">{formErrors.submit}</p>
                  </motion.div>
                )}
                
                <form id="contact-form" ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg bg-[#1a1a1a] text-white border ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#333] focus:border-[#915EFF]'} focus:outline-none transition-colors`}
                        placeholder="Your Name"
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg bg-[#1a1a1a] text-white border ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#333] focus:border-[#915EFF]'} focus:outline-none transition-colors`}
                        placeholder="Your Email"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg bg-[#1a1a1a] text-white border ${formErrors.subject ? 'border-red-500 focus:border-red-500' : 'border-[#333] focus:border-[#915EFF]'} focus:outline-none transition-colors`}
                        placeholder="Subject"
                      />
                      {formErrors.subject && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full p-3 rounded-lg bg-[#1a1a1a] text-white border ${formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-[#333] focus:border-[#915EFF]'} focus:outline-none transition-colors h-32 resize-none`}
                        placeholder="Your Message"
                      ></textarea>
                      {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                      )}
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-6 bg-[#915EFF] text-white rounded-lg font-bold hover:bg-[#7a4dff] transition-colors flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </div>
            )}
            
            {/* FAQ Section */}
            {activeTab === 'faq' && (
              <div className="relative z-10">
                <h3 className="text-white text-[24px] font-bold mb-6">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition-colors"
                    >
                      <h4 className="text-white font-bold mb-2">{faq.question}</h4>
                      <p className="text-secondary">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-secondary mb-4">Still have questions?</p>
                  <button 
                    onClick={() => setActiveTab('message')} 
                    className="inline-flex items-center text-[#915EFF] hover:text-white transition-colors"
                  >
                    Contact our support team
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
