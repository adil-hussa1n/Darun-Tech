import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="relative w-full mx-auto bg-gradient-to-b from-[#151030] to-[#050816] py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#915EFF]/5 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full bg-[#915EFF]/5 blur-3xl"></div>
      
      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-white text-[20px] font-bold">Darun Tech</h3>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              Your trusted partner for digital solutions in Bangladesh. We help businesses grow through innovative technology and creative solutions.
            </p>
            <div className="mt-6 bg-tertiary p-4 rounded-lg border border-[#333] hover:border-[#915EFF] transition-colors duration-300">
              <p className="text-white text-sm font-medium mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#1a1a1a] text-white text-sm rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#915EFF]"
                />
                <button className="bg-[#915EFF] text-white text-sm font-medium rounded-r-lg px-4 hover:bg-[#7a4ecc] transition-colors duration-300">
                  Send
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[20px] font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-[#915EFF]"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-secondary hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-white transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[20px] font-bold mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-[#915EFF]"></span>
            </h3>
            <ul className="space-y-3">
              <li className="text-secondary hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Social Media Marketing Solution
              </li>
              <li className="text-secondary hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Darun Mega Exposure
              </li>
              <li className="text-secondary hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Darun Business Spotlight
              </li>
              <li className="text-secondary hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Darun Business Essentials
              </li>
              <li className="text-secondary hover:text-white transition-colors cursor-pointer flex items-center group">
                <span className="w-0 h-[1px] bg-[#915EFF] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                Darun Free Basic Listing
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-[20px] font-bold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-[#915EFF]"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-full mr-3 mt-1">
                  <FaMapMarkerAlt className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Address</span>
                  <span className="text-secondary text-sm">123 Business Street, Dhaka, Bangladesh</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-full mr-3 mt-1">
                  <FaPhone className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Phone</span>
                  <a href="tel:+8801234567890" className="text-secondary text-sm hover:text-[#915EFF] transition-colors">
                    +880 1234 567890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-[#1a1a1a] p-2 rounded-full mr-3 mt-1">
                  <FaEnvelope className="text-[#915EFF] text-sm" />
                </div>
                <div>
                  <span className="font-medium text-white block mb-1">Email</span>
                  <a href="mailto:info@daruntech.com" className="text-secondary text-sm hover:text-[#915EFF] transition-colors">
                    info@daruntech.com
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-white text-sm mb-3">Follow us on social media</p>
              <div className="flex space-x-3">
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-2 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebookF className="text-lg" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-2 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="text-lg" />
                </motion.a>
                <motion.a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-2 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedinIn className="text-lg" />
                </motion.a>
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1a1a1a] p-2 rounded-full text-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram className="text-lg" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[#333] text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} Darun Tech. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-secondary hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-secondary hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-secondary hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;