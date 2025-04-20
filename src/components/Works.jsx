import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const packages = [
  {
    name: "Starter",
    price: "৳15,000",
    period: "per month",
    description: "Perfect for small businesses and startups in Bangladesh",
    features: [
      "Basic Website (5 pages)",
      "5 Social Media Posts per week",
      "Basic SEO Setup",
      "Email Support",
      "Monthly Analytics Report",
      "Basic Graphic Design (2 designs/month)"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "৳30,000",
    period: "per month",
    description: "Ideal for growing businesses in Bangladesh",
    features: [
      "Custom Website Development",
      "15 Social Media Posts per week",
      "Advanced SEO & Content Marketing",
      "Priority Support",
      "Weekly Analytics Report",
      "Content Creation (Blogs & Articles)",
      "Graphic Design (5 designs/month)",
      "Basic Video Editing"
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
      "Content Strategy & Management",
      "Premium Graphic Design",
      "Video Production & Editing",
      "Review Platform Integration",
      "Dedicated Account Manager"
    ],
    popular: false
  }
];

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
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Choose your plan</p>
          <h2 className={styles.sectionHeadText}>Our Packages</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          We offer flexible packages designed specifically for businesses in Bangladesh. Choose the plan that best fits your needs and budget, with options for every stage of your business growth.
        </motion.p>

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
