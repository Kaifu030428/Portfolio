import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      whileHover={{ 
        scale: 1.1,
        rotateY: 10,
        z: 50,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card cursor-pointer'
    >
      <div
        className='bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden group'
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(145, 94, 255, 0.3), transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute top-4 left-4 w-2 h-2 bg-purple-500 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-2 h-2 bg-pink-500 rounded-full opacity-60"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Icon with animation */}
        <motion.div
          className="relative z-10"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.img
            src={icon}
            alt={title}
            className='w-20 h-20 object-contain drop-shadow-lg'
            whileHover={{
              scale: 1.2,
              rotate: 360,
              filter: "brightness(1.2)",
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Title with gradient */}
        <motion.h3 
          className='text-white text-[20px] font-bold text-center mt-4 relative z-10'
          style={{
            background: 'linear-gradient(90deg, #fff, #915EFF, #fff)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {title}
        </motion.h3>

        {/* Hover effect border glow */}
        <motion.div
          className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100"
          style={{
            boxShadow: '0 0 20px rgba(145, 94, 255, 0.6), 0 0 40px rgba(255, 0, 110, 0.4)',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial='hidden' whileInView='show' viewport={{ once: true }}>
        <motion.p 
          className={styles.sectionSubText}
          whileHover={{ scale: 1.05, x: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Introduction
        </motion.p>
        <motion.h2 
          className={styles.sectionHeadText}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Overview.
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a passionate full-stack developer from Bhopal with strong experience in JavaScript, React, and Node.js. I love building efficient, scalable, and user-friendly web applications with clean architecture and great performance.

While I enjoy working on the front end, my real interest lies in the backend — designing APIs, managing databases, and optimizing server-side logic to make everything run smoothly. I'm a fast learner who enjoys solving real-world problems and continuously improving my craft with every project.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
