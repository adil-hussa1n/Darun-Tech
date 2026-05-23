import { motion } from 'framer-motion';
import { styles } from '../styles';
import { Tilt } from 'react-tilt';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { useState } from 'react';
import { FaCheckCircle, FaCheck, FaInfoCircle, FaChevronRight } from 'react-icons/fa';

const ServiceCard = ({ index, title, icon, id, description, onClick, isSelected }) => {
  return (
    <Tilt 
      className="xs:w-[320px] w-full"
      options={{
        max: 15,
        scale: 1.03,
        speed: 400,
      }}
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.75)}
        className={`w-full ${isSelected ? 'gradient-border-card bg-[#1e1945]' : 'glassmorphism hover:border-[#915EFF]/30'} p-[1px] rounded-[24px] shadow-xl transition-all duration-300`}
        whileHover={{ y: -6, boxShadow: "0 15px 35px rgba(145, 94, 255, 0.15)" }}
      >
        <div 
          className={`bg-[#151030]/95 rounded-[24px] p-6 min-h-[300px] flex justify-between flex-col cursor-pointer transition-all duration-300 ${isSelected ? 'bg-[#1b1544]' : ''}`}
          onClick={() => onClick(id, title)}
        >
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-2xl bg-[#050816]/60 border border-white/5 mb-5">
              <img
                src={icon}
                alt={title}
                className="w-12 h-12 object-contain"
              />
            </div>
            
            <h3 className="text-white text-[18px] font-bold tracking-tight mb-2">
              {title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="mt-6 flex justify-center w-full">
            {isSelected ? (
              <motion.div 
                layoutId="btn-details"
                className="bg-gradient-to-r from-[#915EFF] to-blue-500 text-white text-xs font-bold py-2 px-5 rounded-full flex items-center gap-1.5 shadow-md shadow-[#915EFF]/20"
              >
                Viewing Details <FaChevronRight size={10} className="rotate-90" />
              </motion.div>
            ) : (
              <div className="border border-[#915EFF]/30 text-[#915EFF] hover:bg-[#915EFF] hover:text-white text-xs font-bold py-2 px-5 rounded-full flex items-center gap-1 transition-all duration-300">
                Package Details <FaChevronRight size={10} />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

// Define packages for different services
const servicePackages = {
  'package-1': [
    {
      name: "Social Media Marketing Solution",
      price: "Custom Quotes",
      period: "scalable",
      description: "Enhance your online presence, engage your audience, and drive conversions.",
      features: [
        "Interactive brainstorming & strategy sessions",
        "Targeted Meta (Facebook/Instagram) ad setup",
        "Premium visual graphic designs & copywriting",
        "Consistent brand-voice development",
        "Detailed performance analytics & reports"
      ],
      popular: false,
      benefits: [
        "Direct increase in brand awareness & reputation",
        "Higher engagement rates on digital media channels",
        "Professional content curation by experienced designers",
        "Continuous campaign optimization based on key KPI metrics"
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
        "Top-tier spotlight placement on home banner & search listings",
        "High-priority visibility on desktop and upcoming mobile apps",
        "Strategic placement inside community groups and forums",
        "Premium verified logo badge integration",
        "Full dashboard reporting & weekly customer analysis"
      ],
      popular: true,
      benefits: [
        "Maximum visibility to over 10,000+ active shoppers",
        "Highlight your product listings above local competitors",
        "Dedicated account manager for optimization",
        "Combined Package Offer: ৳15,000/month when paired with Package 1"
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
        "Featured outlet presence on high-traffic category pages",
        "Verified profile with active blue checkmark trust-badge",
        "Enhanced cashback incentives for consumer reviews",
        "Direct push notifications to local shopping networks",
        "Targeted organic boosting campaigns by Darun marketing team"
      ],
      popular: false,
      benefits: [
        "Spur direct customer rating submissions",
        "Increase customer conversion and loyalty ratios",
        "Competitive advantage via verified security status"
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
        "Official verified badge verification",
        "Comprehensive customized reporting dashboard",
        "Configurable cashback review incentives",
        "Standard search listings boosting",
        "Weekly community group spotlight posts"
      ],
      popular: false,
      benefits: [
        "Establish immediate shopper credibility",
        "Track customer views, clicks, and review performance",
        "Draw motivated reviewers with custom cash incentives"
      ]
    }
  ],
  'package-5': [
    {
      name: "Darun Free Basic Listing",
      price: "Free",
      period: "forever",
      description: "Get started with a foundational presence on Darun at no cost.",
      features: [
        "Verified individual store profile page",
        "Standard visibility in local category index",
        "Review collecting capability with basic dashboard",
        "Access to community discussion boards"
      ],
      popular: false,
      benefits: [
        "No cost entry to build your web footprint",
        "Collect valuable feedback from local verified shoppers",
        "Upgrade dynamically to premium exposure packages at any time"
      ]
    }
  ]
};

const PackageCard = ({ name, price, period, description, features, benefits, popular }) => (
  <motion.div
    className={`w-full p-8 rounded-[24px] shadow-2xl relative border overflow-hidden ${
      popular 
        ? 'bg-[#1b1544] border-[#915EFF]/50' 
        : 'glassmorphism border-white/5'
    }`}
    whileHover={{ 
      y: -6,
      borderColor: popular ? "rgba(145, 94, 255, 0.8)" : "rgba(255, 255, 255, 0.15)",
      boxShadow: popular ? "0 20px 40px rgba(145, 94, 255, 0.25)" : "0 20px 30px rgba(0, 0, 0, 0.4)"
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-[#915EFF] text-white px-6 py-1.5 rounded-bl-2xl text-[11px] font-black uppercase tracking-widest shadow-md shadow-[#915EFF]/20">
        Highly Recommended
      </div>
    )}
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 border-b border-white/5 pb-6 mb-6">
      <div>
        <h3 className="text-white text-[24px] font-black tracking-tight">{name}</h3>
        <p className="text-gray-400 text-sm mt-1 max-w-xl">{description}</p>
      </div>
      <div className="flex flex-col md:items-end min-w-[150px]">
        <div className="flex items-baseline">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-blue-400 text-[32px] font-black tracking-tight">{price}</span>
        </div>
        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{period}</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
          <span className="p-1 rounded bg-[#915EFF]/10 text-[#915EFF]"><FaInfoCircle size={12} /></span>
          Key Inclusions:
        </h4>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-gray-300 text-xs leading-relaxed">
              <span className="mr-2.5 text-[#915EFF] font-bold mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
          <span className="p-1 rounded bg-green-500/10 text-green-500"><FaCheckCircle size={12} /></span>
          Key Benefits:
        </h4>
        <ul className="space-y-3">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start text-gray-300 text-xs leading-relaxed">
              <span className="mr-2.5 text-green-500 font-bold mt-0.5">•</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-gray-400 text-xs flex items-center gap-1.5">
        <span>* Transparent pricing models. Standard terms apply.</span>
      </div>
      
      <motion.button 
        className={`w-full sm:w-auto py-3 px-8 rounded-xl font-bold text-xs uppercase tracking-wider ${
          popular ? 'bg-gradient-to-r from-[#915EFF] to-blue-500 text-white' : 'bg-[#915EFF] text-white hover:bg-[#7b4aff]'
        } shadow-md shadow-[#915EFF]/10`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact to Subscribe
      </motion.button>
    </div>
  </motion.div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showPackages, setShowPackages] = useState(false);
  
  const handleServiceClick = (serviceId, serviceTitle) => {
    if (selectedService === serviceId) {
      setSelectedService(null);
      setShowPackages(false);
      return;
    }
    
    setShowPackages(false);
    setSelectedService(serviceId);
    
    setTimeout(() => {
      setShowPackages(true);
      
      setTimeout(() => {
        const packagesSection = document.getElementById('packages-section');
        if (packagesSection) {
          packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }, 250);
  };
  
  const services = [
    {
      id: "package-1",
      title: "Social Media Marketing",
      icon: "https://cdn-icons-png.flaticon.com/512/2626/2626269.png",
      description: "Enhance your online presence, scale social ads, engage audiences, and drive direct lead conversions."
    },
    {
      id: "package-2",
      title: "Darun Mega Exposure",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      description: "Spotlight listings, premium placements, search result ranking upgrades, and maximum community views."
    },
    {
      id: "package-3",
      title: "Darun Business Spotlight",
      icon: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png",
      description: "Category index placement spotlights, push notifications, and verified blue check badge authentication."
    },
    {
      id: "package-4",
      title: "Darun Business Essentials",
      icon: "https://cdn-icons-png.flaticon.com/512/1378/1378628.png",
      description: "Custom dashboards to trace customer reviews, manage cashback rating incentives, and boost basic search listings."
    },
    {
      id: "package-5",
      title: "Darun Free Basic Listing",
      icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      description: "Get started on our directory platform at no cost with a standard profile, reviews widget, and discussion access."
    },
  ];

  return (
    <div className={`${styles.padding} relative w-full min-h-screen`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div variants={textVariant()} className="mb-10 text-center md:text-left">
          <p className={styles.sectionSubText}>What we offer</p>
          <h2 className={styles.sectionHeadText}>Services & Packages.</h2>
        </motion.div>

        {/* Brand statement */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[16px] sm:text-[18px] max-w-3xl leading-[28px] text-center md:text-left"
        >
          Darun Tech provides structured plans to launch, verified-badge authenticate, analyze, and boost the online presence of local brands. Discover the packages designed for your scale of operations.
        </motion.p>

        {/* Services Cards */}
        <div className="mt-16 flex flex-wrap gap-8 justify-center">
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
        
        {/* Packages Expansion Section */}
        {selectedService && showPackages && (
          <motion.div
            id="packages-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="mt-28 mb-12 scroll-mt-24"
            key={selectedService}
          >
            <div className="mb-8 border-b border-white/5 pb-4">
              <p className={styles.sectionSubText}>Plan Details For</p>
              <h3 className="text-white text-2xl font-black flex items-center gap-2 mt-1">
                <span className="text-[#915EFF]">⚡</span>
                {services.find(s => s.id === selectedService)?.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 gap-8 mt-10">
              {servicePackages[selectedService]?.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 15 }}
                >
                  <PackageCard {...pkg} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
      </div>
    </div>
  );
};

export default Services;
