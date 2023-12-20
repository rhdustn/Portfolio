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
      }, 200); // 200 milliseconds interval for each character
    };

    

    animateText("yeon's", setFirstText);
    setTimeout(() => {
      animateText('Frontend portfolio', setSecondText);
    }, 2000); // Wait for 3 seconds before starting the second text animation
  }, []);


  return (
    <div className="relative">
      <img className="w-full md:h-[900px]" src={gif} alt="Main " />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl text-center">
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