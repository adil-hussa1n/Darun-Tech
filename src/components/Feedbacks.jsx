import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const testimonials = [
  {
    name: "Ahmed Rahman",
    company: "Tech Solutions Ltd",
    image: "👨‍💼",
    feedback: "Darun Tech's digital marketing team helped us increase our website traffic by 300% in just 6 months. Their understanding of the Bangladeshi market is exceptional, and their strategies are perfectly tailored for our local audience."
  },
  {
    name: "Fatima Akter",
    company: "Style Boutique",
    image: "👩‍💼",
    feedback: "The e-commerce website developed by Darun Tech, complete with Bkash integration, has transformed our business. Our online sales have doubled, and the customer experience is seamless. Their team's attention to detail is remarkable."
  },
  {
    name: "Mohammad Ali",
    company: "Food Express",
    image: "👨‍🍳",
    feedback: "As a restaurant owner, Darun Tech's review platform has been invaluable. We've seen a 40% increase in customer engagement and positive reviews. Their platform is perfect for the Bangladeshi market."
  },
  {
    name: "Nusrat Jahan",
    company: "Creative Agency",
    image: "👩‍🎨",
    feedback: "Darun Tech's graphic design team created a stunning brand identity that perfectly represents our agency. Their understanding of both local and international design trends is impressive."
  },
  {
    name: "Rahim Khan",
    company: "EduTech Solutions",
    image: "👨‍🏫",
    feedback: "The educational website developed by Darun Tech has helped us reach students across Bangladesh. Their team's expertise in both Bengali and English content development is outstanding."
  },
  {
    name: "Sadia Islam",
    company: "Fashion House",
    image: "👩‍💼",
    feedback: "Darun Tech's social media management has significantly increased our brand visibility. Their content strategy perfectly aligns with our target audience in Bangladesh."
  }
];

const FeedbackCard = ({ index, name, company, image, feedback }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-8 rounded-[20px] shadow-card"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="text-4xl">{image}</div>
      <div>
        <h3 className="text-white text-[20px] font-bold">{name}</h3>
        <p className="text-secondary text-[14px]">{company}</p>
      </div>
    </div>
    <p className="text-secondary text-[14px] leading-relaxed">{feedback}</p>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What our clients say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hear from our satisfied clients across Bangladesh about their experience working with Darun Tech. We take pride in helping businesses grow and succeed in the digital space.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
