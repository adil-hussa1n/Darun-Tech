import { motion } from 'framer-motion';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

// Replaces react-tilt + GSAP with framer-motion — eliminates vendor-gsap from the bundle
const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="xs:w-[250px] w-full"
    whileHover={{ y: -6, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-lg shadow-[#915EFF]/5 hover:shadow-[#915EFF]/20 transition-shadow duration-300">
      <div className="bg-[#151030]/90 backdrop-blur-md rounded-[20px] py-8 px-6 min-h-[280px] flex justify-center items-center flex-col text-center border border-white/5">
        <div className="p-4 rounded-full bg-[#050816]/50 mb-5 border border-white/5">
          <img src={icon} alt={title} className="w-14 h-14 object-contain" />
        </div>
        <h3 className="text-white text-[18px] font-bold tracking-tight leading-snug">{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>

        {/* Header */}
        <motion.div variants={textVariant()} className="text-center md:text-left">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Us.</h2>
        </motion.div>

        {/* Brand Pitch */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[16px] sm:text-[18px] max-w-3xl leading-[28px]"
        >
          Darun empowers businesses to thrive in the digital age by leveraging shopper reviews and feedback. We build bridges of credibility and communication between consumers and verified operators.
        </motion.p>

        {/* Core Offers Services Cards */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Two Column details: Why Choose and Communities */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Why Choose Us */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.75)}
            className="glassmorphism p-6 sm:p-8 rounded-[20px] border border-white/5 glow-shadow-purple relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-24 h-24 rounded-full bg-[#915EFF]/5 group-hover:bg-[#915EFF]/10 transition-all duration-300" />
            <h3 className="text-white text-[22px] font-bold mb-6 flex items-center gap-2">
              <span className="text-[#915EFF]">★</span> Why Choose Darun
            </h3>

            <ul className="space-y-5">
              {[
                { title: "Customer-Centric Approach", desc: "We focus on connecting businesses with their target audience, ensuring meaningful and high-conversion interactions." },
                { title: "Powerful App Integration", desc: "Our upcoming unique mobile app complements our marketing services, providing businesses with a unified dashboard solution." },
                { title: "Verified Profiles with Trust Badge", desc: "Build immediate buyer confidence with a verified business profile featuring the distinct blue checkmark." },
                { title: "Budget-Friendly Scalable Packages", desc: "Adaptable structures that cater perfectly to local startups as well as established national brands." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#915EFF] text-base font-extrabold mt-0.5">✓</span>
                  <div>
                    <h4 className="text-white font-bold text-[15px]">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Active Shopper Communities */}
          <motion.div
            variants={fadeIn("left", "spring", 0.3, 0.75)}
            className="glassmorphism p-6 sm:p-8 rounded-[20px] border border-white/5 glow-shadow-purple relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-300" />

            <div>
              <h3 className="text-white text-[22px] font-bold mb-6 flex items-center gap-2">
                <span className="text-[#915EFF]">👥</span> Shopper Communities
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Engage with over 10,000 active shoppers who leverage the Darun network daily to check ratings, compare outlets, and identify verified vendors.
              </p>

              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#915EFF] font-bold">•</span>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Community Engagement</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Publish offers directly into our curated social and forum channels.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#915EFF] font-bold">•</span>
                  <div>
                    <h4 className="text-white font-bold text-[14px]">Growth Feedback Loops</h4>
                    <p className="text-gray-400 text-xs mt-0.5">Receive structured feedback and build shopper loyalty via promotional incentive offerings.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick summary visual card */}
            <div className="mt-8 bg-[#050816]/60 p-4 rounded-xl border border-white/5 text-center">
              <span className="text-white text-xs font-semibold block uppercase tracking-wider text-gray-400">Current Reach</span>
              <span className="text-2xl font-black text-white mt-1 block">
                10k+ Shoppers in Bangladesh
              </span>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats Counters */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: "10,000+", label: "Active Community Members" },
            { value: "Verified", label: "Business Security Badge" },
            { value: "#1", label: "Review Platform in Bangladesh" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", 0.5 + idx * 0.15, 0.75)}
              className="bg-[#151030]/40 backdrop-blur-md p-6 rounded-[20px] border border-white/5 text-center shadow-md shadow-black/30 hover:border-[#915EFF]/30 transition-colors"
            >
              <h3 className="text-[#915EFF] text-[36px] font-black tracking-tight">{stat.value}</h3>
              <p className="text-white text-[14px] font-semibold mt-1 opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
