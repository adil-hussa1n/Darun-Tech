import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile] = React.useState(() =>
    typeof window !== 'undefined' && window.innerWidth < 768
  );

  return (
    <footer className="relative w-full mx-auto bg-gradient-to-b from-[#151030] to-[#050816] py-12 overflow-hidden border-t border-white/5">

      {/* Footer Bottom Bar */}
      <motion.div
        initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="text-gray-400 text-[13px]">
          © {currentYear} Darun Tech Private Limited. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
            <a
              key={policy}
              href="#"
              className="text-gray-400 hover:text-white text-[13px] transition-colors duration-200 relative group"
            >
              {policy}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#915EFF] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;