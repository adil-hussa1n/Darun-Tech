import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Section highlight logic
      const sections = [
        { id: 'about', name: 'About' },
        { id: 'services', name: 'Services' },
        { id: 'contact', name: 'Contact' }
      ];
      let found = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140) {
            setActive(sections[i].name);
            found = true;
            break;
          }
        }
      }
      if (!found && scrollTop < 200) {
        setActive('Home');
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActive(item);
    setToggle(false);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (item === 'Home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const section = document.getElementById(item.toLowerCase());
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }, 150);
    } else {
      if (item === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-[#050816]/75 backdrop-blur-md border-b border-white/5 shadow-lg shadow-[#050816]/50" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("Home");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, 5, -5, 0] }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            <img src={logo} alt='logo' className='w-11 h-11 object-contain rounded-full shadow-lg shadow-[#915EFF]/20 border border-[#915EFF]/20' />
          </motion.div>
          <div>
            <motion.p 
              className='text-white text-[18px] sm:text-[20px] font-black cursor-pointer flex tracking-wide'
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Darun
              <span className='text-[#915EFF] ml-1'>Tech</span>
            </motion.p>
            <motion.p 
              className='text-gray-400 text-[10px] font-semibold tracking-wider uppercase opacity-80 hidden xs:block'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unlock the Power of Reviews
            </motion.p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className='list-none hidden sm:flex flex-row gap-8 lg:gap-10'>
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              className={`font-semibold cursor-pointer text-[14px] lg:text-[15px] transition-colors duration-300 relative py-1 ${
                active === item ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => handleNavClick(item)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>{item}</span>
              {active === item && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#915EFF] to-blue-400 rounded-full"
                  layoutId="navbar-underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[26px] h-[26px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          
          <AnimatePresence>
            {toggle && (
              <motion.div
                className="p-6 bg-[#050816]/98 backdrop-blur-xl absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-2xl shadow-2xl border border-white/10"
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ul className='list-none flex justify-end items-start flex-1 flex-col gap-5'>
                  {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                    <motion.li
                      key={item}
                      className={`font-semibold cursor-pointer text-[15px] w-full py-1.5 border-b border-white/5 last:border-0 ${
                        active === item ? "text-[#915EFF] font-bold" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => handleNavClick(item)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15, delay: index * 0.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
