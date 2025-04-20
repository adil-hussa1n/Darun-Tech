import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion';

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Us</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Darun Tech is Bangladesh's leading digital solutions provider, specializing in digital marketing, web development, and graphic design. As the #1 review sharing platform in Bangladesh, we help businesses build trust and credibility through authentic customer reviews.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-4">Our Mission</h3>
            <p className="text-secondary">
              To empower businesses with cutting-edge digital solutions that drive growth and success in the digital age. We strive to be the trusted partner for businesses looking to establish and expand their online presence.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-4">Our Vision</h3>
            <p className="text-secondary">
              To be the leading digital transformation partner in Bangladesh, helping businesses thrive in the digital economy through innovative solutions and exceptional service.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card text-center"
          >
            <h3 className="text-[#915EFF] text-[48px] font-bold">100+</h3>
            <p className="text-white text-[20px]">Happy Clients</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.75, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card text-center"
          >
            <h3 className="text-[#915EFF] text-[48px] font-bold">500+</h3>
            <p className="text-white text-[20px]">Projects Completed</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 1, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card text-center"
          >
            <h3 className="text-[#915EFF] text-[48px] font-bold">#1</h3>
            <p className="text-white text-[20px]">Review Platform in Bangladesh</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
