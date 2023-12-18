import React from 'react'
import gif from '../img/하늘.gif'
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative ">
      <img className="w-full md:h-[900px]" src={gif} alt="Main " />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl  text-center">
        <AnimatePresence>
          <motion.div
            key="yeons"
            initial="initial"
            animate="animate"
            variants={textVariants}
            exit={{ opacity: 0 }}
            style={{
              WebkitTextStroke: '1px white',
              color: 'transparent',
            }}
          >
                yeon's 
          </motion.div>
          <motion.div
            key="frontend-pofol"
            initial="initial"
            animate="animate"
            variants={textVariants}
            exit={{ opacity: 0 }}
            style={{
              WebkitTextStroke: '1px white',
              color: 'transparent',
            }}
          >
            Frontend portfolio
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Main;