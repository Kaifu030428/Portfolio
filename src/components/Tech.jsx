// import React from "react";
// import { motion } from "framer-motion";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// // const Tech = () => {
// //   return (
// //     <div className='flex flex-row flex-wrap justify-center gap-10'>
// //       {technologies.map((technology) => (
// //         <div className='w-28 h-28' key={technology.name}>
// //           <BallCanvas icon={technology.icon} />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology, index) => (
//         <motion.div
//           key={technology.name}
//           className="w-28 h-28"
//           whileHover={{ scale: 1.1 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
//         >
//           <BallCanvas icon={technology.icon} />
//           <p className="text-center text-white mt-2 text-sm font-medium">
//             {technology.name}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   );
// };


// export default SectionWrapper(Tech, "");
import BallCanvas from "../components/BallCanvas";

import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";// 3D canvas for each tech

// Animation variants
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring", stiffness: 120, damping: 20, delay },
});

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          variants={fadeInUp(index * 0.1)}
          initial="initial"
          animate="animate"
          whileHover={{ scale: 1.15, rotate: 5 }}
          className="w-28 h-28 cursor-pointer"
        >
          <div className="w-full h-full relative">
            <BallCanvas icon={tech.icon} /> {/* 3D rotating icon */}
            <motion.div
              className="absolute bottom-0 w-full text-center text-white text-sm font-semibold"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {tech.name}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
