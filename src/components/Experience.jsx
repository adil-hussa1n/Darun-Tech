import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const services = [
  {
    title: "Digital Marketing",
    icon: "📈",
    points: [
      "Search Engine Optimization (SEO) for Bangladeshi market",
      "Social Media Marketing (Facebook, Instagram, LinkedIn)",
      "Content Marketing & Blog Management",
      "Email Marketing Campaigns",
      "Google Ads & Facebook Ads Management",
      "Local Business Listings & Citations"
    ]
  },
  {
    title: "Web Development",
    icon: "💻",
    points: [
      "Custom Website Development in Bengali & English",
      "E-commerce Solutions with Bkash/Nagad Integration",
      "Mobile Responsive Web Applications",
      "WordPress & Custom CMS Development",
      "Website Maintenance & Support",
      "Domain & Hosting Services"
    ]
  },
  {
    title: "Graphic Design",
    icon: "🎨",
    points: [
      "Logo & Brand Identity Design",
      "Social Media Post Design",
      "Print Materials (Business Cards, Flyers)",
      "Product Packaging Design",
      "UI/UX Design for Web & Mobile",
      "Video Editing & Motion Graphics"
    ]
  },
  {
    title: "Review Platform",
    icon: "⭐",
    points: [
      "Bangladesh's #1 Business Review Platform",
      "Customer Feedback Management",
      "Business Rating System",
      "Review Response Management",
      "Analytics & Insights Dashboard",
      "Reputation Management Services"
    ]
  }
];

const ServiceCard = ({ index, title, icon, points }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full p-8 rounded-[20px] shadow-card bg-tertiary"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="text-4xl">{icon}</div>
      <h3 className="text-white text-[24px] font-bold">{title}</h3>
    </div>
    <ul className="list-disc list-inside space-y-2">
      {points.map((point, i) => (
        <li key={i} className="text-secondary text-[14px]">{point}</li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What we offer</p>
          <h2 className={styles.sectionHeadText}>Our Services</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As Bangladesh's leading digital solutions provider, Darun Tech offers comprehensive services to help your business thrive in the digital age. Our expert team delivers tailored solutions to meet your specific business needs.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
