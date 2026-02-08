import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const experiences = [];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      icon={
        <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold mb-1">{experience.title}</h3>
        <p className="text-secondary text-[14px] font-medium mb-2">{experience.name}</p>
      </div>

      <ul className="mt-4 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            key={index}
            className="text-white-100 text-[14px] pl-1 tracking-wide"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {point}
          </motion.li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={`${styles.sectionSubText} text-center`}>My Learning Journey</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects & Skills</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");