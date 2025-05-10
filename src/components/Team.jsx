import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: "Asif Rahman",
    role: "Founder & CEO",
    bio: "Visionary leader with 8+ years of experience in digital marketing and business development.",
    image: "https://www.clearvoice.com/wp-content/uploads/2020/06/Reverse-Image-Search_Hero_1360x646.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asif@darun.tech"
    }
  },
  {
    name: "Asif Rahman",
    role: "Chief Marketing Officer",
    bio: "Marketing expert with a passion for connecting businesses with their ideal customers.",
    image: "https://www.clearvoice.com/wp-content/uploads/2020/06/Reverse-Image-Search_Hero_1360x646.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asif@darun.tech"
    }
  },
  {
    name: "Asif Rahman",
    role: "Head of Technology",
    bio: "Tech enthusiast with expertise in building scalable platforms and innovative solutions.",
    image: "https://www.clearvoice.com/wp-content/uploads/2020/06/Reverse-Image-Search_Hero_1360x646.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "tanvir@darun.tech"
    }
  },
  {
    name: "Asif Rahman",
    role: "Customer Success Manager",
    bio: "Dedicated to ensuring businesses achieve their goals through Darun's platform.",
    image: "https://www.clearvoice.com/wp-content/uploads/2020/06/Reverse-Image-Search_Hero_1360x646.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "asif@darun.tech"
    }
  }
];

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-tertiary rounded-2xl p-6 w-full sm:w-[280px] overflow-hidden group"
    >
      <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="flex gap-4">
            <a href={member.social.linkedin} className="text-white hover:text-[#915EFF] transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href={member.social.twitter} className="text-white hover:text-[#915EFF] transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href={`mailto:${member.social.email}`} className="text-white hover:text-[#915EFF] transition-colors">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <h3 className="text-white font-bold text-[20px]">{member.name}</h3>
      <div className="text-[#915EFF] text-[14px] mb-2">{member.role}</div>
      <p className="text-secondary text-[14px]">{member.bio}</p>
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

        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.name} 
              member={member} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-[#915EFF]/20 hover:bg-[#915EFF]/30 text-white px-8 py-3 rounded-full border border-[#915EFF]/30 transition-all duration-300"
          >
            Join Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
