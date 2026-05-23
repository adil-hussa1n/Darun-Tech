import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full mx-auto bg-gradient-to-b from-[#151030] to-[#050816] py-16 overflow-hidden border-t border-white/5">
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#915EFF]/5 blur-3xl" />
      <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#915EFF]/5 blur-3xl" />
      
      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          
          {/* Logo and Tagline Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#151030] border border-[#915EFF]/30 shadow-lg shadow-[#915EFF]/10">
                <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full" />
              </div>
              <h3 className="text-white text-[22px] font-black tracking-wide">
                Darun<span className="text-[#915EFF]">Tech</span>
              </h3>
            </div>
            
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Connecting businesses and shoppers in Bangladesh. Build trust, verify your presence, and elevate your reputation with verified reviews.
            </p>
            
            {/* Subscription Form */}
            <div className="mt-4 bg-[#151030]/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 glow-shadow-purple transition-all duration-300">
              <p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-[#050816]/60 text-white text-[13px] rounded-lg px-3 py-2 w-full border border-white/10 focus:outline-none focus:border-[#915EFF] transition-colors"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#915EFF] to-blue-500 text-white text-xs font-bold rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-[#915EFF]/30 transition-all"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[18px] font-bold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2.5px] bg-[#915EFF] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    onClick={() => {
                      if (item === 'Home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const section = document.getElementById(item.toLowerCase());
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-[14px] flex items-center group"
                  >
                    <span className="w-0 h-[1.5px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[18px] font-bold mb-5 relative inline-block">
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2.5px] bg-[#915EFF] rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {[
                "Social Media Marketing",
                "Darun Mega Exposure",
                "Darun Business Spotlight",
                "Darun Business Essentials",
                "Darun Free Basic Listing"
              ].map((svc) => (
                <li key={svc}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-300 text-[14px] flex items-center group cursor-pointer">
                    <span className="w-0 h-[1.5px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300 rounded-full"></span>
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-white text-[18px] font-bold mb-1 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2.5px] bg-[#915EFF] rounded-full"></span>
            </h3>
            
            <ul className="space-y-4 mt-3">
              <li className="flex items-start gap-3">
                <div className="bg-[#151030] p-2 rounded-lg border border-white/5 mt-0.5">
                  <FaMapMarkerAlt className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-semibold text-white text-[14px] block">Address</span>
                  <span className="text-gray-400 text-[13px]">Kazitula Road, Sylhet, Bangladesh</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#151030] p-2 rounded-lg border border-white/5 mt-0.5">
                  <FaPhone className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-semibold text-white text-[14px] block">Phone</span>
                  <a href="tel:+8801831877987" className="text-gray-400 text-[13px] hover:text-[#915EFF] transition-colors">
                    +880 1831 877987
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-[#151030] p-2 rounded-lg border border-white/5 mt-0.5">
                  <FaEnvelope className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-semibold text-white text-[14px] block">Email</span>
                  <a href="mailto:daruntech.pvt.ltd@gmail.com" className="text-gray-400 text-[13px] hover:text-[#915EFF] transition-colors">
                    daruntech.pvt.ltd@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-2">
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF />, url: "https://facebook.com" },
                  { icon: <FaTwitter />, url: "https://twitter.com" },
                  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
                  { icon: <FaInstagram />, url: "https://instagram.com" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#151030] p-2.5 rounded-xl text-[#915EFF] hover:bg-gradient-to-r hover:from-[#915EFF] hover:to-blue-500 hover:text-white border border-white/5 shadow-md hover:shadow-[#915EFF]/30 transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-[13px]">
            © {currentYear} Darun Tech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
              <a key={policy} href="#" className="text-gray-400 hover:text-white text-[13px] transition-colors duration-200 relative group">
                {policy}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#915EFF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;