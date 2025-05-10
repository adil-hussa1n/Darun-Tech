import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
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
          if (rect.top <= 120) {
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

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary shadow-lg shadow-primary/20" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4'>
        <Link
          to='/'
          className='flex items-center gap-3'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          </motion.div>
          <div>
            <motion.p 
              className='text-white text-[22px] font-bold cursor-pointer flex'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Darun
              <span className='text-[#915EFF]'>Tech</span>
            </motion.p>
            <motion.p 
              className='text-gray-400 text-[12px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
Unlock the Power of Reviews with Darun
            </motion.p>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              className={`$
                active === item ? 'text-white' : 'text-secondary'
              } hover:text-white text-[16px] font-medium cursor-pointer relative`}
              onClick={() => {
                setActive(item);
                if (item === 'Home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const section = document.getElementById(item.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span>{item}</span>
              {active === item && (
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#915EFF]"
                  layoutId="navbar-underline"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <motion.img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[32px] h-[32px] object-contain'
            onClick={() => setToggle(!toggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black/90 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl shadow-xl border border-gray-800`}
            initial={!toggle ? { opacity: 0, y: -20, scale: 0.95 } : {}}
            animate={toggle ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.2 }}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === item ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(item);
                    setTimeout(() => {
                      if (item === 'Home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const section = document.getElementById(item.toLowerCase());
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }, 50);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
