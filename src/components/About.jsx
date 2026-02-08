import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-px rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[24px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial='hidden' animate='show'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial='hidden'
        animate='show'
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a passionate full-stack developer from Bhopal with strong experience in JavaScript, React, and Node.js. I love building efficient, scalable, and user-friendly web applications with clean architecture and great performance.

While I enjoy working on the front end, my real interest lies in the backend — designing APIs, managing databases, and optimizing server-side logic to make everything run smoothly. I’m a fast learner who enjoys solving real-world problems and continuously improving my craft with every project.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            initial='hidden'
            animate='show'
          >
            <ServiceCard index={index} {...service} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
