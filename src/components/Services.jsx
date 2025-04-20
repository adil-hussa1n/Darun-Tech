import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { useState } from 'react';

const ServiceCard = ({ index, title, icon, id, onClick, isSelected }) => {
  return (
    <Tilt 
      className="xs:w-[250px] w-full"
      options={{
        max: 25,
        scale: 1.05,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full ${isSelected ? 'violet-gradient' : 'green-pink-gradient'} p-[1px] rounded-[20px] shadow-card`}
        whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(145, 94, 255, 0.5)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div 
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer transition-all duration-300 ${isSelected ? 'bg-[#2d2b52] border-[#915EFF] border-opacity-50' : ''}`}
          onClick={() => onClick(id, title)}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-[#151030]/50 backdrop-blur-sm mb-2"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          
          <motion.div className="text-center">
            <h3 className="text-white text-[20px] font-bold mb-2">
              {title}
            </h3>
            {isSelected ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[#915EFF] text-sm font-medium"
              >
                View Packages ↓
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-gray-400 text-sm"
              >
                Click to view packages
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

// Define packages for different services
const servicePackages = {
  'web-dev': [
    {
      name: "Starter",
      price: "৳15,000",
      period: "per month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Basic Website Design",
        "5 Social Media Posts",
        "Basic SEO Setup",
        "Email Support",
        "Monthly Analytics Report"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "৳30,000",
      period: "per month",
      description: "Ideal for growing businesses looking to expand their online presence",
      features: [
        "Custom Website Development",
        "15 Social Media Posts",
        "Advanced SEO",
        "Priority Support",
        "Weekly Analytics Report",
        "Content Creation",
        "Basic Graphic Design"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "৳50,000",
      period: "per month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Full Stack Web Development",
        "Unlimited Social Media Posts",
        "Premium SEO Services",
        "24/7 Support",
        "Daily Analytics Report",
        "Content Strategy",
        "Premium Graphic Design",
        "Review Platform Integration"
      ],
      popular: false
    }
  ],
  'ui-ux': [
    {
      name: "Basic Design",
      price: "৳10,000",
      period: "per project",
      description: "Essential UI/UX design for startups and small businesses",
      features: [
        "User Research",
        "Wireframing",
        "Basic UI Design",
        "1 Revision Round",
        "Design Handoff"
      ],
      popular: false
    },
    {
      name: "Premium Design",
      price: "৳25,000",
      period: "per project",
      description: "Comprehensive UI/UX design for growing businesses",
      features: [
        "In-depth User Research",
        "User Personas",
        "Wireframing & Prototyping",
        "High-fidelity UI Design",
        "3 Revision Rounds",
        "Design System",
        "Design Handoff"
      ],
      popular: true
    },
    {
      name: "Enterprise Design",
      price: "৳45,000",
      period: "per project",
      description: "End-to-end UX/UI design solution for large enterprises",
      features: [
        "Comprehensive User Research",
        "User Personas & Journey Maps",
        "Information Architecture",
        "Wireframing & Interactive Prototyping",
        "Complete UI Design",
        "Unlimited Revisions",
        "Custom Design System",
        "Animation & Micro-interactions"
      ],
      popular: false
    }
  ],
  'mobile-dev': [
    {
      name: "Basic App",
      price: "৳30,000",
      period: "per app",
      description: "Simple mobile app for startups and small businesses",
      features: [
        "Single Platform (Android or iOS)",
        "Basic UI Design",
        "Up to 5 Screens",
        "Basic Functionality",
        "1 Month Support"
      ],
      popular: false
    },
    {
      name: "Standard App",
      price: "৳60,000",
      period: "per app",
      description: "Feature-rich mobile app for growing businesses",
      features: [
        "Cross-Platform (Android & iOS)",
        "Custom UI/UX Design",
        "Up to 10 Screens",
        "API Integration",
        "User Authentication",
        "Push Notifications",
        "3 Months Support"
      ],
      popular: true
    },
    {
      name: "Premium App",
      price: "৳100,000",
      period: "per app",
      description: "Advanced mobile application for enterprises",
      features: [
        "Cross-Platform (Android & iOS)",
        "Premium UI/UX Design",
        "Unlimited Screens",
        "Complex API Integrations",
        "Advanced Authentication",
        "Push Notifications",
        "In-App Purchases",
        "Analytics Integration",
        "6 Months Support"
      ],
      popular: false
    }
  ],
  'backend-dev': [
    {
      name: "Basic Backend",
      price: "৳20,000",
      period: "per month",
      description: "Essential backend services for small applications",
      features: [
        "RESTful API Development",
        "Basic Database Setup",
        "User Authentication",
        "Cloud Deployment",
        "Basic Documentation"
      ],
      popular: false
    },
    {
      name: "Advanced Backend",
      price: "৳40,000",
      period: "per month",
      description: "Comprehensive backend solution for medium-sized applications",
      features: [
        "RESTful API Development",
        "Database Design & Optimization",
        "Advanced Authentication & Authorization",
        "Third-party API Integration",
        "Cloud Deployment & Scaling",
        "Detailed Documentation",
        "1 Month Support"
      ],
      popular: true
    },
    {
      name: "Enterprise Backend",
      price: "৳80,000",
      period: "per month",
      description: "High-performance backend infrastructure for large applications",
      features: [
        "RESTful & GraphQL API Development",
        "Advanced Database Architecture",
        "Microservices Implementation",
        "Authentication & Security Hardening",
        "Multiple Third-party Integrations",
        "CI/CD Pipeline Setup",
        "Load Balancing & Auto-scaling",
        "Comprehensive Documentation",
        "3 Months Support"
      ],
      popular: false
    }
  ]
};

// Package Card Component
const PackageCard = ({ index, name, price, period, description, features, popular }) => (
  <motion.div
    className={`w-full p-8 rounded-[20px] shadow-card ${
      popular ? 'bg-[#915EFF]' : 'bg-tertiary'
    } relative`}
    whileHover={{ 
      y: -10,
      boxShadow: popular ? 
        "0 20px 30px rgba(145, 94, 255, 0.3)" : 
        "0 20px 30px rgba(0, 0, 0, 0.3)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 15 }}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#915EFF] px-4 py-1 rounded-full text-sm font-bold">
        Most Popular
      </div>
    )}
    <h3 className="text-white text-[24px] font-bold mb-2">{name}</h3>
    <div className="flex items-baseline mb-4">
      <span className="text-white text-[32px] font-bold">{price}</span>
      <span className="text-secondary ml-2">{period}</span>
    </div>
    <p className="text-secondary mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center text-white">
          <span className="mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <motion.button 
      className={`mt-8 w-full py-3 px-6 rounded-lg font-bold ${
        popular ? 'bg-white text-[#915EFF]' : 'bg-[#915EFF] text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showPackages, setShowPackages] = useState(false);
  
  const handleServiceClick = (serviceId, serviceTitle) => {
    // If clicking the same service, toggle it off
    if (selectedService === serviceId) {
      setSelectedService(null);
      setShowPackages(false);
      return;
    }
    
    // First hide any currently shown packages
    setShowPackages(false);
    
    // Set the selected service
    setSelectedService(serviceId);
    
    // Show packages after a short delay to allow for smooth transition
    setTimeout(() => {
      setShowPackages(true);
      
      // Scroll to packages section with smooth animation
      if (window.innerWidth > 768) { // Only on desktop
        setTimeout(() => {
          const packagesSection = document.getElementById('packages-section');
          if (packagesSection) {
            packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      }
    }, 300);
  };
  
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    },
    {
      id: "backend-dev",
      title: "Backend Development",
      icon: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    },
  ];

  return (
    <div className={`${styles.padding} relative w-full min-h-screen`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="mb-10">
          <p className={styles.sectionSubText}>What we offer</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Darun Tech provides a range of services to help businesses establish their online presence
          and create engaging digital experiences. From custom web development to mobile
          applications, we ensure high-quality solutions that meet your specific needs.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              index={index} 
              {...service} 
              onClick={handleServiceClick}
              isSelected={selectedService === service.id}
            />
          ))}
        </div>
        
        {/* Packages Section - Only visible when a service is selected */}
        {selectedService && showPackages && (
          <motion.div
            id="packages-section"
            variants={staggerContainer()}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mt-32 mb-20 overflow-hidden"
            key={selectedService} // Key ensures animation reruns when service changes
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className={styles.sectionSubText}>Choose your plan for</p>
              <h2 className={styles.sectionHeadText}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {services.find(s => s.id === selectedService)?.title}
                </motion.span>{" "}
                <motion.span 
                  className="text-[#915EFF]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Packages
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {servicePackages[selectedService]?.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                >
                  <PackageCard index={index} {...pkg} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services; 