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
    image: "https://www.gailkennyrecruitment.com/wp-content/uploads/2015/03/blank-male.jpg",
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
    image: "https://www.gailkennyrecruitment.com/wp-content/uploads/2015/03/blank-male.jpg",
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
    image: "https://www.gailkennyrecruitment.com/wp-content/uploads/2015/03/blank-male.jpg",
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
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/487482582_3083383841838236_3354529306399594123_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mvanJR2q1cMQ7kNvwESuvms&_nc_oc=Adm7sTD6ZhvnB93WvqE7BibKO26nXq701MOVn-JRcVIRlWtnynUMnUvB-U8-2Ys7-8w&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=sXPHykJNbOgCkiIJ_lOACw&oh=00_AfQdLy_V8RNi1N-H38q3BO0w8lTgKRE7mImU3FBqBkGqsw&oe=6871D0A6",
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
    image: "https://www.gailkennyrecruitment.com/wp-content/uploads/2015/03/blank-male.jpg",
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
    image: "https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png",
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
    role: "Full Stack Developer",
    bio: "Experienced developer building robust and scalable backend systems for Darun Tech's platform.",
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/504489574_3101279313369643_1419583961276568422_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFFaojqy1XjAOwSD40lJB1w1VtlNtJLZTzVW2U20ktlPLXyBmpMPp91MLB1ZR65LSjEjTXkUYZ4rEsAzsYBny3C&_nc_ohc=0kS864tEADgQ7kNvwGCeAaq&_nc_oc=AdkSy4bhYbJz1yubtKmd-KBrpRkGjLW_S2Vgq3vyM9SdgURQ2JWp4IcIY-tc-uT3OjA&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=dLS-YbF6Yel2J6kSNoYeVA&oh=00_AfRMiYtlLA9gTdtWScS9brAXjL46LSbkzksNtVIBtJO0bg&oe=6871B3AF",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "adil@darun.tech"
    }
  },
  {
    name: "Promit Bhattacharjee",
    role: "Full Stack Developer",
    bio: "UI/UX specialist creating intuitive and engaging user experiences across all Darun platforms.",
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/473758056_601135722617141_3324053033865779919_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7hogVwmOyU583fuIg8Y-N45OcnJogWhXjk5ycmiBaFZn1LbXorpME6xJKXG-WU5ugLhexK-9fwmNRZ52Dh-BE&_nc_ohc=HeuQjzNPjP8Q7kNvwEuO1Qk&_nc_oc=AdlRzlh-PvNwY2l69gg8ya3r-IFd3QuBg1Mm93zZ8unpWf7QYq7fUyIgwVajO5xJGVY&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=KXgzgtMOSixhDIe31aRoYg&oh=00_AfTVIGRscLyOeQXvZqBcScKqgcfCaUqVQuMEuPd-hYcb2g&oe=6871C213",
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
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/507060553_4155691477983135_2098855734387318644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHksXcaQM2puQ-xf9m1HhhshZS-q6SD6z2FlL6rpIPrPTL1KkG8QvMyzaZcUvwL4VK_4KPcYsVn0p-UoRE74GaI&_nc_ohc=36OcMPu8Tg4Q7kNvwEsOLtK&_nc_oc=Adm-tnSRXewcplm7KRMHgoCg4v6Q-68Wkzc5JCSFp79Jt9KB4z75ZVD4dF-5PW5xfc4&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=phveCkO1DBzhYbTYdr0mig&oh=00_AfRtyNUgvqzfR77ZHgdR4fZjKgtNkJz94n7GOFV2yiTu4A&oe=6871E890",
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
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/487483580_4853750158183336_5743425212854916470_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF1vx2PK6jBwicivL6l0MzkT59DgIX3MitPn0OAhfcyKzD1zIl8NUps3DDw4dpGLSwKX81vW_JvvSgdoYDsdeAc&_nc_ohc=YUsqSB7Yoo0Q7kNvwEWgLOy&_nc_oc=AdlYcucuxS5CW_fwWEBcVH6QE387lJ3-Vp68Kq26Pz4yaKqGOROn29rE3JK3BsfhOp8&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=U7di6zGktzSeB23gF3tpSw&oh=00_AfRPtC71SFhwcWAxBtzgsxaSAQShtrfO_Af4N-xTWdaLDg&oe=6871E737",
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
    image: "https://scontent.fdac178-1.fna.fbcdn.net/v/t39.30808-6/473541429_601135859283794_8886093732019231998_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFcvyFQ38af9vmCHwi_php8hcndTx7uYWyFyd1PHu5hbJvzVcbhmGW5mWTWldMJmPLhExO-dndbMKhqPuohpaQC&_nc_ohc=_bJQ7wH-vkcQ7kNvwHhvmnW&_nc_oc=AdkmK8L2Z4QIiv4J2rQdLqSYtmsjzvrKXr_uDFM0VOoVF9dSgFFwjboyTt-GeAMpOp0&_nc_zt=23&_nc_ht=scontent.fdac178-1.fna&_nc_gid=DksFWQmX3VeqH4lfshP62w&oh=00_AfS_JVIwbEdG_ERaFMP7qCOpN_ifg_Otx6ypupmDbOr1Bg&oe=6871BEE8",
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
    image: "https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png",
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
