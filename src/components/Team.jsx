import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaLinkedin, FaTwitter, FaEnvelope, FaShieldAlt, FaBriefcase } from 'react-icons/fa';

// Premium inline SVG vector avatars for blank/placeholder profile pictures
const maleAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23151030"/><stop offset="100%" stop-color="%23915EFF"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(%23g)"/><circle cx="50" cy="38" r="18" fill="%23ffffff" opacity="0.85"/><path d="M50 60c-20 0-32 12-32 20v6h64v-6c0-8-12-20-32-20z" fill="%23ffffff" opacity="0.85"/></svg>`;

const femaleAvatar = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23151030"/><stop offset="100%" stop-color="%23fc00ff"/></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(%23g)"/><path d="M50 20c-13 0-19 6-19 16 0 5 2 10 4 13v-3c0-3 3-5 5-5s5-3 5-5c0 0 2-4 5-4s5 4 5 4c0 2 3 5 5 5s5 2 5 5v3c2-3 4-8 4-13 0-10-6-16-19-16z" fill="%23ffffff" opacity="0.9"/><circle cx="50" cy="40" r="15" fill="%23ffffff" opacity="0.85"/><path d="M50 62c-18 0-30 11-30 18v6h60v-6c0-7-12-18-30-18z" fill="%23ffffff" opacity="0.85"/></svg>`;

// Leadership team members with blank profile avatar placeholders
const leadershipTeam = [
  {
    name: "Abdun Noor",
    role: "Chairman",
    bio: "Visionary leader guiding Darun Tech's strategic direction and structural expansion initiatives.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "abdun.noor@darun.tech" }
  },
  {
    name: "Mishfaqur Rahman",
    role: "Founder & CEO",
    bio: "Innovative strategist passionate about connecting brands and customers through scalable web architecture.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "mishfaqur@darun.tech" }
  },
  {
    name: "Abdullah Sherazi",
    role: "Director",
    bio: "Strategic executor overseeing operations, partnerships, and platform policy structures.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "abdullah@darun.tech" }
  },
  {
    name: "Asifur Rahman",
    role: "Director",
    bio: "Business development lead focused on extending Darun's brand footprint and market share.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "asifur@darun.tech" }
  },
  {
    name: "Muhammad Shofikul Alom",
    role: "Director",
    bio: "Financial planner maintaining sustainable corporate governance, investment, and budgets.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "shofikul@darun.tech" }
  },
  {
    name: "Halima Tus Sadia",
    role: "Director",
    bio: "Marketing strategist crafting public relations and shopper engagement campaigns.",
    image: femaleAvatar,
    social: { linkedin: "#", twitter: "#", email: "halima@darun.tech" }
  }
];

// Core Team members with blank profile avatar placeholders
const coreTeam = [
  {
    name: "Adil Hussain",
    role: "Full Stack Developer",
    bio: "Engineers robust, highly available database queries and server logic for the reviews index.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "adil@darun.tech" }
  },
  {
    name: "Promit Bhattacharjee",
    role: "Full Stack Developer",
    bio: "Focuses on responsive user journeys, dashboard views, and seamless review interactions.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "promit@darun.tech" }
  },
  {
    name: "Rafid Al Raiyan",
    role: "Motion Graphics Designer",
    bio: "Creates compelling visual presentations, promotional videos, and community copy materials.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "rafid@darun.tech" }
  },
  {
    name: "Md Mohi Uddin",
    role: "Lead Designer",
    bio: "Guards the visual layout guidelines, styling patterns, and assets across product lines.",
    image: maleAvatar,
    social: { linkedin: "#", twitter: "#", email: "mohi@darun.tech" }
  },
  {
    name: "Labah Sunnah Rahman",
    role: "Designer",
    bio: "Curates vector assets, badges, and trust illustrations for the web portal templates.",
    image: femaleAvatar,
    social: { linkedin: "#", twitter: "#", email: "labah@darun.tech" }
  },
  {
    name: "Proma Shueb",
    role: "Designer",
    bio: "Creates beautiful promotional layouts for social branding and print media.",
    image: femaleAvatar,
    social: { linkedin: "#", twitter: "#", email: "proma@darun.tech" }
  }
];

const TeamMemberCard = ({ member, index, isLeadership }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative ${
        isLeadership 
          ? 'bg-gradient-to-br from-[#1c164a] to-[#151030]' 
          : 'glassmorphism'
      } rounded-2xl p-5 sm:p-6 border border-white/5 shadow-xl hover:shadow-[#915EFF]/10 hover:border-[#915EFF]/30 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden`}
    >
      <div className="absolute top-0 right-0 p-3 text-white/5 group-hover:text-[#915EFF]/10 transition-colors">
        {isLeadership ? <FaShieldAlt size={48} /> : <FaBriefcase size={40} />}
      </div>

      <div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 shadow-md">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h4 className="text-white font-bold text-base leading-tight">{member.name}</h4>
            <span className={`text-xs font-semibold ${
              isLeadership ? 'text-[#915EFF]' : 'text-[#915EFF]/80'
            } uppercase tracking-wider block mt-1`}>
              {member.role}
            </span>
          </div>
        </div>

        <p className="text-gray-400 text-[13px] leading-relaxed mt-4 italic font-medium">
          "{member.bio}"
        </p>
      </div>

      <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
        <a 
          href={member.social.linkedin} 
          className="text-gray-400 hover:text-[#915EFF] transition-colors p-1.5 bg-[#050816]/60 rounded-lg border border-white/5 hover:border-[#915EFF]/30"
          title="LinkedIn Profile"
        >
          <FaLinkedin size={14} />
        </a>
        <a 
          href={member.social.twitter} 
          className="text-gray-400 hover:text-[#915EFF] transition-colors p-1.5 bg-[#050816]/60 rounded-lg border border-white/5 hover:border-[#915EFF]/30"
          title="Twitter Profile"
        >
          <FaTwitter size={14} />
        </a>
        <a 
          href={`mailto:${member.social.email}`} 
          className="text-gray-400 hover:text-[#915EFF] transition-colors p-1.5 bg-[#050816]/60 rounded-lg border border-white/5 hover:border-[#915EFF]/30"
          title="Email"
        >
          <FaEnvelope size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className={`${styles.padding} relative z-0`} id="team">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className={styles.sectionSubText}>The People Behind Darun</p>
          <h2 className={styles.sectionHeadText}>Our Team.</h2>
          <p className="mt-4 text-gray-300 text-[16px] sm:text-[18px] max-w-3xl mx-auto leading-relaxed px-4">
            Meet the innovators building the ultimate trust connection between shoppers and merchants.
          </p>
        </motion.div>

        {/* Leadership Segment */}
        <div className="mb-16">
          <motion.h3 
            className="text-white text-[18px] font-bold mb-6 flex items-center gap-3 uppercase tracking-wider px-2"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-black text-[#915EFF] bg-[#915EFF]/10 px-2.5 py-1 rounded">01</span>
            Executive Leadership
            <span className="h-[1px] flex-grow max-w-[150px] bg-[#915EFF]/20 ml-2" />
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member} 
                index={index} 
                isLeadership={true}
              />
            ))}
          </div>
        </div>

        {/* Core Staff Segment */}
        <div>
          <motion.h3 
            className="text-white text-[18px] font-bold mb-6 flex items-center gap-3 uppercase tracking-wider px-2"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-xs font-black text-[#915EFF] bg-[#915EFF]/10 px-2.5 py-1 rounded">02</span>
            Core Team Members
            <span className="h-[1px] flex-grow max-w-[150px] bg-[#915EFF]/20 ml-2" />
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map((member, index) => (
              <TeamMemberCard 
                key={member.name} 
                member={member} 
                index={index}
                isLeadership={false}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Team;
