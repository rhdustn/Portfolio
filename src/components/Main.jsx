import React, { useEffect, useState } from 'react';
import gif from '../img/하늘.gif';
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {
  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  useEffect(() => {
    const animateText = (fullText, setTextFunction) => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTextFunction(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 200); 
    };

    

    animateText("yeon's", setFirstText);
    setTimeout(() => {
      animateText('Frontend portfolio', setSecondText);
    }, 1500); 
  }, []);


  return (
    <div className="relative">
      <img className="w-full h-auto" src={gif} alt="Main " />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-7xl text-center sm:text-xl">
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
            {firstText}
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
            {secondText}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Main;