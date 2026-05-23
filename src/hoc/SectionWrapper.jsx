import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const [isMobile] = useState(() =>
      typeof window !== 'undefined' && window.innerWidth < 768
    );

    return (
      <motion.section
        variants={staggerContainer()}
        initial={isMobile ? 'show' : 'hidden'}
        whileInView='show'
        viewport={{ once: true, amount: 0.05 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
