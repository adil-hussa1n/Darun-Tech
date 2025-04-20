import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Huzaif Ahmed",
          from_email: form.email,
          to_email: "dev.huzaif@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative w-full mx-auto">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact Us</h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-[#915EFF] text-xl mr-4">📍</div>
                <div>
                  <h4 className="text-white font-bold">Address</h4>
                  <p className="text-secondary">123 Business Street, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#915EFF] text-xl mr-4">📞</div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-secondary">+880 1234 567890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#915EFF] text-xl mr-4">✉️</div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-secondary">info@daruntech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-[#915EFF] text-xl mr-4">⏰</div>
                <div>
                  <h4 className="text-white font-bold">Business Hours</h4>
                  <p className="text-secondary">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.5, 0.75)}
            className="bg-tertiary p-8 rounded-[20px] shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-6">Send us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#333] focus:border-[#915EFF] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#333] focus:border-[#915EFF] focus:outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#333] focus:border-[#915EFF] focus:outline-none"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-[#1a1a1a] text-white border border-[#333] focus:border-[#915EFF] focus:outline-none h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#915EFF] text-white rounded-lg font-bold hover:bg-[#7a4dff] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
