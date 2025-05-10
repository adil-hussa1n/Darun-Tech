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
        glare: true,
        "max-glare": 0.2,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-full ${isSelected ? 'violet-gradient' : 'green-pink-gradient'} p-[1px] rounded-[20px] shadow-card overflow-hidden`}
        whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(145, 94, 255, 0.6)" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isSelected && Array(5).fill().map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#915EFF]/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite alternate`
              }}
            />
          ))}
        </div>

        <motion.div 
          className={`bg-tertiary rounded-[20px] py-5 px-6 min-h-[320px] flex justify-evenly items-center flex-col cursor-pointer transition-all duration-300 ${isSelected ? 'bg-[#2d2b52] border-[#915EFF] border-opacity-50' : ''} relative z-10`}
          onClick={() => onClick(id, title)}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Status indicator */}
          {isSelected && (
            <div className="absolute top-3 right-3 flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#915EFF] mr-1 animate-pulse"></span>
              <span className="text-xs text-[#915EFF] font-medium">Selected</span>
            </div>
          )}

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
            className="p-3 rounded-full bg-gradient-to-br from-[#151030]/80 to-[#2a1d5c]/50 backdrop-blur-sm mb-4 shadow-lg"
          >
            <img
              src={icon}
              alt={title}
              className="w-16 h-16 object-contain drop-shadow-lg"
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
                className="mt-2 bg-[#915EFF] text-white text-sm font-medium py-2 px-4 rounded-full flex items-center justify-center group"
              >
                View Package Details
                <svg className="w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="mt-2 border border-[#915EFF] text-[#915EFF] text-sm py-2 px-4 rounded-full flex items-center justify-center group"
              >
                Click for Details
                <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
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
const PackageCard = ({ index, name, price, period, description, features, benefits, popular }) => {
  // Create a CSS animation keyframe for the floating effect
  const floatKeyframes = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
  `;

  return (
    <motion.div
      className={`w-full p-8 rounded-[20px] shadow-card ${
        popular ? 'bg-gradient-to-br from-[#915EFF] to-[#6a3bbd]' : 'bg-tertiary'
      } relative overflow-hidden`}
      whileHover={{ 
        y: -10,
        boxShadow: popular ? 
          "0 20px 30px rgba(145, 94, 255, 0.4)" : 
          "0 20px 30px rgba(0, 0, 0, 0.3)"
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Add the keyframes for the floating animation */}
      <style dangerouslySetInnerHTML={{ __html: floatKeyframes }} />

      {/* Decorative elements */}
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white opacity-5"></div>
      <div className="absolute -left-4 -bottom-4 w-16 h-16 rounded-full bg-white opacity-5"></div>
      
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-[#915EFF] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          Most Popular
        </div>
      )}

      <div className="relative z-10">
        <h3 className="text-white text-[24px] font-bold mb-2">{name}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-white text-[32px] font-bold">{price}</span>
          <span className={`${popular ? 'text-white/80' : 'text-secondary'} ml-2`}>{period}</span>
        </div>
        <p className={`${popular ? 'text-white/80' : 'text-secondary'} mb-6`}>{description}</p>
        
        <div className="mb-4">
          <h4 className={`${popular ? 'text-white' : 'text-[#915EFF]'} font-bold mb-2`}>Features:</h4>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start text-white group">
                <span className={`mr-2 mt-1 flex-shrink-0 ${popular ? 'text-white' : 'text-[#915EFF]'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className={`${popular ? 'text-white' : 'text-[#915EFF]'} font-bold mb-2`}>Benefits:</h4>
          <ul className="space-y-3">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start text-white group">
                <span className={`mr-2 mt-1 flex-shrink-0 ${popular ? 'text-white' : 'text-[#915EFF]'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                  </svg>
                </span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <motion.button 
          className={`mt-8 w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center group ${
            popular ? 'bg-white text-[#915EFF]' : 'bg-[#915EFF] text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Get Started
          <svg 
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showPackages, setShowPackages] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
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
      description: "Enhance your online presence, engage your audience, and drive results.",
      category: "marketing"
    },
    {
      id: "package-2",
      title: "Darun Mega Exposure",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Feature your brand prominently on Darun platforms.",
      category: "premium"
    },
    {
      id: "package-3",
      title: "Darun Business Spotlight",
      icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
      description: "Maximize visibility and engagement with featured presence.",
      category: "premium"
    },
    {
      id: "package-4",
      title: "Darun Business Essentials",
      icon: "https://cdn-icons-png.flaticon.com/512/1378/1378628.png",
      description: "Boost your online presence with essential business tools.",
      category: "essential"
    },
    {
      id: "package-5",
      title: "Darun Free Basic Listing",
      icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      description: "Get started with a verified profile and dashboard—absolutely free.",
      category: "free"
    },
  ];

  // Filter services based on active tab
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  // Define category tabs
  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'premium', label: 'Premium' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'essential', label: 'Essentials' },
    { id: 'free', label: 'Free' },
  ];

  return (
    <div className={`${styles.padding} relative w-full min-h-screen`}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div variants={textVariant()} className="mb-10 text-center">
          <p className={styles.sectionSubText}>What we offer</p>
          <h2 className={styles.sectionHeadText}>Our Services</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
        >
          Darun Tech provides a range of packages to help businesses establish their online presence
          and create engaging digital experiences. From social media marketing to premium exposure,
          we offer solutions tailored to your specific needs.
        </motion.p>

        {/* Category tabs */}
        <motion.div 
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="mt-10 flex justify-center flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-[#915EFF] text-white shadow-lg'
                  : 'bg-tertiary text-secondary hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Service cards */}
        <motion.div 
          layout
          className="mt-16 flex flex-wrap gap-10 justify-center"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                index={index} 
                {...service} 
                onClick={handleServiceClick}
                isSelected={selectedService === service.id}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* No results message */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-secondary text-lg">No services found in this category.</p>
          </motion.div>
        )}
        
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
            {/* Close button */}
            <motion.button
              onClick={() => {
                setSelectedService(null);
                setShowPackages(false);
              }}
              className="absolute right-4 top-4 bg-tertiary p-2 rounded-full hover:bg-[#915EFF] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </motion.button>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative"
            >
              <p className={styles.sectionSubText}>Details for</p>
              <h2 className={styles.sectionHeadText}>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#6a3bbd]"
                >
                  {services.find(s => s.id === selectedService)?.title}
                </motion.span>
              </h2>

              {/* Service icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute -top-4 right-4 md:right-20 w-20 h-20 bg-tertiary rounded-full p-4 shadow-xl hidden md:flex items-center justify-center"
              >
                <img 
                  src={services.find(s => s.id === selectedService)?.icon} 
                  alt="Service icon" 
                  className="w-12 h-12 object-contain"
                />
              </motion.div>
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

            {/* Back to services button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center"
            >
              <button 
                onClick={() => {
                  setSelectedService(null);
                  setShowPackages(false);
                }}
                className="inline-flex items-center text-[#915EFF] hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to all services
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
