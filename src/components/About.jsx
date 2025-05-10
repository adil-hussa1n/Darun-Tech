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
          Darun empowers businesses to thrive in the digital age by leveraging shopper reviews and feedback.
        </motion.p>
        
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-6"
        >
          <h3 className="text-white text-[20px] font-bold">Our Mission</h3>
          <p className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]">
            To connect everyone with their favorite brands and outlets for the ultimate shopping experience.
          </p>
        </motion.div>
        
        <motion.div
          variants={fadeIn("", "", 0.3, 1)}
          className="mt-6"
        >
          <h3 className="text-white text-[20px] font-bold">What We Offer</h3>
          <ul className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px] list-disc pl-5 space-y-2">
            <li>Create individual business profiles to showcase offers, services, and contact details.</li>
            <li>Collect detailed reviews to build trust and boost your reputation.</li>
            <li>Get insights through Darun's analytics tools.</li>
            <li>Manage your presence with a customizable dashboard.</li>
            <li>Use our marketing services—social media, content, leads, and sales.</li>
          </ul>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-4">Why Choose Darun</h3>
            <ul className="text-secondary space-y-4">
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Customer-Centric Approach</h4>
                  <p>We focus on connecting businesses with their target audience, ensuring meaningful interactions.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Powerful Mobile App Integration</h4>
                  <p>Our unique app complements our marketing services, providing businesses with a comprehensive solution.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Verified Profiles</h4>
                  <p>Build trust and credibility with a verified business profile featuring a blue badge.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Budget-Friendly Packages</h4>
                  <p>Scalable options that cater to businesses of all sizes and budgets.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-4">Active Shopper Communities</h3>
            <p className="text-secondary mb-4">Join Our Communities</p>
            <ul className="text-secondary space-y-4">
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Community Reach</h4>
                  <p>Engage with over 10,000 shoppers who actively seek businesses like yours.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#915EFF] mr-2">✓</span>
                <div>
                  <h4 className="text-white font-bold">Growth Benefits</h4>
                  <p>Grow your network, build loyalty, and collect valuable feedback from engaged community members.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card text-center"
          >
            <h3 className="text-[#915EFF] text-[48px] font-bold">10,000+</h3>
            <p className="text-white text-[20px]">Active Community Members</p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.75, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card text-center"
          >
            <h3 className="text-[#915EFF] text-[48px] font-bold">Verified</h3>
            <p className="text-white text-[20px]">Business Profiles</p>
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
