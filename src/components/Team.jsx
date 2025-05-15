import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaLinkedin, FaTwitter, FaEnvelope, FaChevronRight } from 'react-icons/fa';

// Leadership team members (executives and directors)
const leadershipTeam = [
  {
    name: "Abdun Noor",
    role: "Chairman",
    bio: "Visionary leader guiding Darun Tech's strategic direction and growth initiatives.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdun.noor@darun.tech"
    }
  },
  {
    name: "Mishfaqur Rahman",
    role: "Founder & CEO",
    bio: "Innovative entrepreneur with a passion for connecting businesses and customers through technology.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mishfaqur@darun.tech"
    }
  },
  {
    name: "Abdullah Sherazi",
    role: "Director",
    bio: "Strategic leader overseeing business operations and driving organizational excellence.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "abdullah@darun.tech"
    }
  },
  {
    name: "Asifur Rahman",
    role: "Director",
    bio: "Business development expert focused on expanding Darun Tech's market presence and partnerships.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asifur@darun.tech"
    }
  },
  {
    name: "Muhammad Shofikul Alom",
    role: "Director",
    bio: "Financial strategist ensuring sustainable growth and investment in innovative solutions.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "shofikul@darun.tech"
    }
  },
  {
    name: "Halima Tus Sadia",
    role: "Director",
    bio: "Marketing visionary developing brand strategies and customer engagement initiatives.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "halima@darun.tech"
    }
  }
];

// Team members (developers, designers, and other staff)
const coreTeam = [
  {
    name: "Adil Hussain",
    role: "Backend Developer",
    bio: "Experienced developer building robust and scalable backend systems for Darun Tech's platform.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "adil@darun.tech"
    }
  },
  {
    name: "Promit Bhattacharjee",
    role: "Frontend Developer",
    bio: "UI/UX specialist creating intuitive and engaging user experiences across all Darun platforms.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "promit@darun.tech"
    }
  },
  {
    name: "Rafid Al Raiyan",
    role: "Motion Graphics Designer & Content Writer",
    bio: "Creative professional crafting compelling visual stories and engaging written content.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rafid@darun.tech"
    }
  },
  {
    name: "Md Mohi Uddin",
    role: "Lead Designer",
    bio: "Design leader overseeing all visual aspects of Darun Tech's brand and digital presence.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mohi@darun.tech"
    }
  },
  {
    name: "Labah Sunnah Rahman",
    role: "Designer",
    bio: "Creative designer developing visual assets that enhance user experience and brand identity.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "labah@darun.tech"
    }
  },
  {
    name: "Proma Shueb",
    role: "Designer",
    bio: "Innovative designer creating visual solutions that communicate Darun Tech's mission and values.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "proma@darun.tech"
    }
  }
];

const TeamMemberCard = ({ member, index, isLeadership }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${isLeadership ? 'bg-gradient-to-br from-tertiary to-tertiary/80' : 'bg-tertiary'} rounded-xl p-6 w-full overflow-hidden group shadow-xl hover:shadow-[#915EFF]/20 hover:shadow-lg transition-all duration-300 h-full`}
    >
      <div className="flex items-start space-x-5">
        <div className="relative w-20 h-20 overflow-hidden rounded-lg flex-shrink-0">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {isLeadership && (
            <div className="absolute -top-1 -right-1 bg-[#915EFF] text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full">
              <FaChevronRight size={10} />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0"> {/* Added min-width to fix text overflow */}
          <h3 className="text-white font-bold text-[18px] truncate">{member.name}</h3>
          <div className={`${isLeadership ? 'text-[#915EFF]' : 'text-[#915EFF]/80'} text-[14px] font-medium truncate`}>{member.role}</div>
          
          <div className="flex gap-4 mt-3">
            <a href={member.social.linkedin} className="text-white/70 hover:text-[#915EFF] transition-colors">
              <FaLinkedin size={16} />
            </a>
            <a href={member.social.twitter} className="text-white/70 hover:text-[#915EFF] transition-colors">
              <FaTwitter size={16} />
            </a>
            <a href={`mailto:${member.social.email}`} className="text-white/70 hover:text-[#915EFF] transition-colors">
              <FaEnvelope size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <p className="text-secondary text-[14px] mt-4 line-clamp-3 h-[4.8em] overflow-hidden">{member.bio}</p>
    </motion.div>
  );
};

const Team = () => {
  return (
    <section className={`${styles.padding} relative z-0`} id="team">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className={styles.sectionSubText}>The People Behind Darun</p>
          <h2 className={styles.sectionHeadText}>Our Team.</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
            Meet the dedicated professionals working to connect businesses and shoppers through innovative solutions.
          </p>
        </motion.div>

        {/* Leadership team */}
        <div className="mt-8">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              className="text-white text-[20px] font-bold mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#915EFF]/20 flex items-center justify-center mr-3">
                <span className="text-[#915EFF] font-bold text-sm">01</span>
              </div>
              Executive Leadership
              <div className="h-[1px] flex-grow max-w-[200px] bg-[#915EFF]/20 ml-4"></div>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard 
                  key={member.name} 
                  member={member} 
                  index={index} 
                  isLeadership={true}
                />
              ))}
            </div>
          </motion.div>

          {/* Core team */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h3 
              className="text-white text-[20px] font-bold mb-4 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#915EFF]/20 flex items-center justify-center mr-3">
                <span className="text-[#915EFF] font-bold text-sm">02</span>
              </div>
              Core Team Members
              <div className="h-[1px] flex-grow max-w-[200px] bg-[#915EFF]/20 ml-4"></div>
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <TeamMemberCard 
                  key={member.name} 
                  member={member} 
                  index={index}
                  isLeadership={false}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white bg-[#915EFF]/20 hover:bg-[#915EFF]/30 rounded-full border border-[#915EFF]/30 transition-all duration-300"
          >
            <span className="relative flex items-center">
              Join Our Team
              <FaChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
