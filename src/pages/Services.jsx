import { motion } from 'framer-motion';
import { styles } from '../styles';
import { FaCheck, FaShoppingBag, FaMegaport, FaSpotify, FaRegIdBadge, FaRegListAlt } from 'react-icons/fa';
import { MdOutlineVerified, MdDashboardCustomize, MdOutlineAppRegistration } from 'react-icons/md';
import { TbCashBanknote } from 'react-icons/tb';
import { RiCustomerService2Line } from 'react-icons/ri';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineBarChart } from 'react-icons/ai';

const packageData = [
  {
    id: 1,
    title: 'Social Media Marketing Solution',
    description: 'Enhance your online presence, engage your audience, and drive results.',
    features: [
      'Brainstorming sessions',
      'Promotional offer development',
      'Meta (formerly Facebook) ads',
      'Visual graphics',
      'Customizable KPIs'
    ],
    price: 'Pricing based on business needs',
    icon: <FaShoppingBag className="text-4xl text-[#915EFF]" />,
    popular: false
  },
  {
    id: 2,
    title: 'Darun Mega Exposure',
    description: 'Amplify your brand\'s visibility with prominent placement on Darun platforms.',
    features: [
      'Featured brand placement',
      'Extensive audience reach',
      'Priority visibility',
      'Enhanced brand recognition',
      'Performance analytics'
    ],
    price: '৳10,000/month or ৳15,000/month with Package 1',
    icon: <FaMegaport className="text-4xl text-[#915EFF]" />,
    popular: true
  },
  {
    id: 3,
    title: 'Darun Business Spotlight',
    description: 'Maximize visibility and engagement with featured presence.',
    features: [
      'Strategic group posts',
      'Enhanced cashback incentives',
      'Verified profile',
      'Customized dashboard',
      'Push notifications',
      'Darun boosting'
    ],
    price: 'Starts at ৳10,000/month',
    icon: <FaSpotify className="text-4xl text-[#915EFF]" />,
    popular: false
  },
  {
    id: 4,
    title: 'Darun Business Essentials',
    description: 'Boost your online presence with essential business tools.',
    features: [
      'Verified badge',
      'Customized dashboard',
      'Enhanced cashback incentives',
      'Darun boosting',
      'Group posts'
    ],
    price: '৳8,000/month',
    icon: <FaRegIdBadge className="text-4xl text-[#915EFF]" />,
    popular: false
  },
  {
    id: 5,
    title: 'Darun Free Basic Listing',
    description: 'Start with a foundational presence on Darun.',
    features: [
      'Verified individual profile',
      'Customized dashboard',
      'Basic visibility',
      'Customer reviews',
      'Community access'
    ],
    price: 'Free',
    icon: <FaRegListAlt className="text-4xl text-[#915EFF]" />,
    popular: false
  }
];

const benefits = [
  {
    title: 'Customer-Centric Focus',
    description: 'We focus on connecting businesses with their target audience, ensuring meaningful interactions.',
    icon: <RiCustomerService2Line className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Powerful Mobile App Integration',
    description: 'Our unique app complements our marketing services, providing businesses with a comprehensive solution.',
    icon: <BsPhone className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Verified Profiles Build Trust',
    description: 'Earn trust and credibility with a verified business profile that customers can rely on.',
    icon: <MdOutlineVerified className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Budget-Friendly & Scalable Packages',
    description: 'Flexible packages cater to businesses of all sizes and budgets, allowing you to grow at your own pace.',
    icon: <TbCashBanknote className="text-4xl text-[#915EFF]" />
  }
];

const additionalServices = [
  {
    title: 'Individual Business Profiles',
    description: 'Create a dedicated profile to showcase your offers, services, and contact information.',
    icon: <MdOutlineAppRegistration className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Detailed Reviews Collection',
    description: 'Collect detailed reviews to build trust and enhance your online reputation.',
    icon: <FaCheck className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Insightful Analytics',
    description: 'Gain valuable insights into customer behavior and preferences through Darun app analytics.',
    icon: <AiOutlineBarChart className="text-4xl text-[#915EFF]" />
  },
  {
    title: 'Customizable Dashboard',
    description: 'Manage your online presence and track key metrics with a customized dashboard.',
    icon: <MdDashboardCustomize className="text-4xl text-[#915EFF]" />
  }
];

const PackageCard = ({ pkg }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full ${pkg.popular ? 'border-2 border-[#915EFF]' : ''}`}
    >
      <div className="flex justify-between items-center">
        <div>
          {pkg.icon}
        </div>
        {pkg.popular && (
          <div className="bg-[#915EFF] text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
        )}
      </div>
      
      <h3 className="text-white font-bold text-[24px]">{pkg.title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{pkg.description}</p>
      
      <div className="mt-4">
        <p className="text-white font-semibold text-[16px] mb-2">Features:</p>
        <ul className="list-none mt-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="text-white-100 text-[14px] pl-1 py-1 flex items-center">
              <FaCheck className="text-[#915EFF] mr-2" /> {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-white font-bold text-[18px]">{pkg.price}</p>
      </div>
      
      <div className="mt-4">
        <button className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary">
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ benefit }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="mb-4">
        {benefit.icon}
      </div>
      <h3 className="text-white font-bold text-[20px]">{benefit.title}</h3>
      <p className="mt-2 text-secondary text-[14px]">{benefit.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="relative w-full min-h-screen mx-auto">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] mx-auto flex items-center">
        <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-center`}>
          <div className="text-center">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Our <span className="text-[#915EFF]">Services</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-3xl mx-auto`}>
              Discover how Darun can help your business grow with our comprehensive suite of services.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <div>
          <p className={styles.sectionSubText}>Why Choose Darun</p>
          <h2 className={styles.sectionHeadText}>Benefits.</h2>
        </div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-black-100 rounded-2xl`}>
        <div>
          <p className={styles.sectionSubText}>What We Offer</p>
          <h2 className={styles.sectionHeadText}>Additional Services.</h2>
        </div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {additionalServices.map((service, index) => (
            <BenefitCard key={index} benefit={service} />
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <div>
          <p className={styles.sectionSubText}>What We Offer</p>
          <h2 className={styles.sectionHeadText}>Explore Our Packages.</h2>
        </div>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {packageData.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.padding} max-w-7xl mx-auto relative z-0 bg-black-100 rounded-2xl mb-20`}>
        <div className="text-center">
          <h2 className={`${styles.sectionHeadText} mb-4`}>Ready to Get Started?</h2>
          <p className="text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
            Join thousands of businesses already benefiting from Darun's powerful platform. 
            Whether you're looking to boost your visibility, engage with customers, or drive sales, 
            we have the perfect solution for you.
          </p>
          <div className="mt-10">
            <button className="bg-[#915EFF] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary mx-2">
              Contact Us
            </button>
            <button className="bg-transparent border border-[#915EFF] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary mx-2">
              Try Free Package
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;