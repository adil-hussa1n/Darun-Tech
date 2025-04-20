import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="mt-1">
      <p className="text-white font-black text-[48px]">"</p>
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
    </div>

    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      testimonial:
        "Working with Huzaif was an absolute pleasure. His attention to detail and technical expertise helped us create a stunning website that perfectly represents our brand.",
      name: "Sarah Johnson",
      designation: "CEO",
      company: "TechStart",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      testimonial:
        "Huzaif's development skills are exceptional. He delivered our project on time and exceeded our expectations with his innovative solutions.",
      name: "Michael Chen",
      designation: "CTO",
      company: "InnovateX",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "The mobile app developed by Huzaif has significantly improved our customer engagement. His understanding of user experience is remarkable.",
      name: "Lisa Wang",
      designation: "Product Manager",
      company: "MobileFirst",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <div className={`${styles.padding} relative w-full min-h-screen`}>
      <div className="max-w-7xl mx-auto">
        <motion.div variants={textVariant()} className="mb-10">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some testimonials from clients I've worked with. Their feedback
          reflects my commitment to delivering high-quality solutions and exceptional
          service.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 