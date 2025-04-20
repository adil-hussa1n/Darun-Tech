import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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

const PackageCard = ({ index, name, price, period, description, features, popular }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className={`w-full p-8 rounded-[20px] shadow-card ${
      popular ? 'bg-[#915EFF]' : 'bg-tertiary'
    } relative`}
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
    <button className={`mt-8 w-full py-3 px-6 rounded-lg font-bold ${
      popular ? 'bg-white text-[#915EFF]' : 'bg-[#915EFF] text-white'
    }`}>
      Get Started
    </button>
  </motion.div>
);

const Packages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [serviceTitle, setServiceTitle] = useState('');
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    // Get service from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const service = queryParams.get('service');
    const title = queryParams.get('title');

    if (service && servicePackages[service]) {
      setSelectedService(service);
      setServiceTitle(title || getServiceTitle(service));
      setPackages(servicePackages[service]);
    } else {
      // Default to web-dev if no service is specified
      setSelectedService('web-dev');
      setServiceTitle('Web Development');
      setPackages(servicePackages['web-dev']);
    }
  }, [location]);

  // Helper function to get service title from ID
  const getServiceTitle = (serviceId) => {
    const titles = {
      'web-dev': 'Web Development',
      'ui-ux': 'UI/UX Design',
      'mobile-dev': 'Mobile Development',
      'backend-dev': 'Backend Development'
    };
    return titles[serviceId] || 'Service';
  };

  // Handle back to services
  const handleBackToServices = () => {
    navigate('/services');
  };

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <div className="flex items-center mb-4">
            <button 
              onClick={handleBackToServices}
              className="mr-4 flex items-center text-secondary hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Services
            </button>
          </div>
          <p className={styles.sectionSubText}>Choose your plan for</p>
          <h2 className={styles.sectionHeadText}>{serviceTitle} <span className="text-[#915EFF]">Packages</span></h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} index={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages; 