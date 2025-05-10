import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { useState } from 'react';

const ServiceCard = ({ index, title, icon, id, description, onClick, isSelected }) => {
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
          className={`bg-tertiary rounded-[20px] py-5 px-6 min-h-[320px] flex justify-evenly items-center flex-col cursor-pointer transition-all duration-300 ${isSelected ? 'bg-[#2d2b52] border-[#915EFF] border-opacity-50' : ''}`}
          onClick={() => onClick(id, title)}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-[#151030]/50 backdrop-blur-sm mb-4"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain"
            />
          </motion.div>
          
          <motion.div className="text-center">
            <h3 className="text-white text-[20px] font-bold mb-3">
              {title}
            </h3>
            <p className="text-secondary text-[14px] mb-4">
              {description}
            </p>
            {isSelected ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-2 bg-[#915EFF] text-white text-sm font-medium py-2 px-4 rounded-full"
              >
                View Package Details ↓
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                className="mt-2 border border-[#915EFF] text-[#915EFF] text-sm py-2 px-4 rounded-full"
              >
                Click for Details
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
  'package-1': [
    {
      name: "Social Media Marketing Solution",
      price: "Varies",
      period: "based on business needs",
      description: "Enhance your online presence, engage your audience, and drive results.",
      features: [
        "Brainstorming sessions",
        "Promotional offer development",
        "Meta (formerly Facebook) ads",
        "Visual graphics",
        "Customizable KPIs"
      ],
      popular: false,
      benefits: [
        "Increased brand awareness",
        "Higher engagement rates",
        "Targeted audience reach",
        "Measurable results",
        "Professional content creation"
      ]
    }
  ],
  'package-2': [
    {
      name: "Darun Mega Exposure",
      price: "৳10,000",
      period: "per month",
      description: "Feature your brand prominently on Darun platforms with extensive audience reach.",
      features: [
        "Prominent placement on Darun platforms",
        "Extensive audience reach",
        "Priority visibility",
        "Enhanced brand recognition",
        "Performance analytics",
        "৳15,000 taka per month when combined with Package 1"
      ],
      popular: true,
      benefits: [
        "Maximum visibility to over 10,000 active users",
        "Premium positioning in search results",
        "Featured in Darun's promotional materials",
        "Priority customer support",
        "Monthly performance reports"
      ]
    }
  ],
  'package-3': [
    {
      name: "Darun Business Spotlight",
      price: "৳10,000",
      period: "per month",
      description: "Maximize visibility and engagement with featured presence and strategic promotions.",
      features: [
        "Featured presence",
        "Strategic group posts",
        "Enhanced cashback incentives",
        "Verified profile",
        "Customized dashboard",
        "Push notifications",
        "Darun boosting"
      ],
      popular: false,
      benefits: [
        "Increased customer engagement",
        "Higher conversion rates",
        "Improved brand loyalty",
        "Competitive advantage",
        "Targeted promotional opportunities"
      ]
    }
  ],
  'package-4': [
    {
      name: "Darun Business Essentials",
      price: "৳8,000",
      period: "per month",
      description: "Boost your online presence with essential business tools and verified status.",
      features: [
        "Verified badge",
        "Customized dashboard",
        "Enhanced cashback incentives",
        "Darun boosting",
        "Group posts"
      ],
      popular: false,
      benefits: [
        "Establish credibility with verified status",
        "Track performance with custom dashboard",
        "Attract customers with cashback offers",
        "Increase visibility with boosting",
        "Connect with community through group posts"
      ]
    }
  ],
  'package-5': [
    {
      name: "Darun Free Basic Listing",
      price: "Free",
      period: "",
      description: "Get started with a foundational presence on Darun at no cost.",
      features: [
        "Verified individual profile",
        "Basic customized dashboard",
        "Standard visibility",
        "Customer reviews",
        "Community access"
      ],
      popular: false,
      benefits: [
        "No cost entry to the Darun platform",
        "Build your online presence",
        "Collect customer reviews",
        "Monitor basic performance metrics",
        "Upgrade anytime to premium packages"
      ]
    }
  ]
};

// Package Card Component
const PackageCard = ({ index, name, price, period, description, features, benefits, popular }) => (
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
    
    <div className="mb-4">
      <h4 className={`${popular ? 'text-white' : 'text-[#915EFF]'} font-bold mb-2`}>Features:</h4>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-white">
            <span className={`mr-2 ${popular ? 'text-white' : 'text-[#915EFF]'}`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    
    <div className="mb-6">
      <h4 className={`${popular ? 'text-white' : 'text-[#915EFF]'} font-bold mb-2`}>Benefits:</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, i) => (
          <li key={i} className="flex items-center text-white">
            <span className={`mr-2 ${popular ? 'text-white' : 'text-[#915EFF]'}`}>•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
    
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
      id: "package-1",
      title: "Social Media Marketing Solution",
      icon: "https://cdn-icons-png.flaticon.com/512/2626/2626269.png",
      description: "Enhance your online presence, engage your audience, and drive results."
    },
    {
      id: "package-2",
      title: "Darun Mega Exposure",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Feature your brand prominently on Darun platforms."
    },
    {
      id: "package-3",
      title: "Darun Business Spotlight",
      icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
      description: "Maximize visibility and engagement with featured presence."
    },
    {
      id: "package-4",
      title: "Darun Business Essentials",
      icon: "https://cdn-icons-png.flaticon.com/512/1378/1378628.png",
      description: "Boost your online presence with essential business tools."
    },
    {
      id: "package-5",
      title: "Darun Free Basic Listing",
      icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      description: "Get started with a verified profile and dashboard—absolutely free."
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
          Darun Tech provides a range of packages to help businesses establish their online presence
          and create engaging digital experiences. From social media marketing to premium exposure,
          we offer solutions tailored to your specific needs.
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
              <p className={styles.sectionSubText}>Details for</p>
              <h2 className={styles.sectionHeadText}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {services.find(s => s.id === selectedService)?.title}
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-20 grid grid-cols-1 gap-8"
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
