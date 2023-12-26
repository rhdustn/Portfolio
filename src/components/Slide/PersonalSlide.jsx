import React, { useState } from 'react'
import Diary1 from "../../img/personal/diary1.gif"
import Diary2 from "../../img/personal/diary2.gif"
import Diary3 from "../../img/personal/diary3.gif"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PersonalSlide = () => {
    const slideImg = [Diary2,Diary1,Diary3];
  
    const [currentImg, setCurrentImg] = useState(0);
  
    const preSlide = () => {
      setCurrentImg((prevIdx) => Math.max(prevIdx - 1, 0));
    };
  
    const nextSlide = () => {
      setCurrentImg((prevIdx) => Math.min(prevIdx + 1, slideImg.length - 1));
    };
  
    return (
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-between relative">
          <button onClick={preSlide} disabled={currentImg === 0}>
            <FaArrowLeft />
          </button>
          <div className="flex flex-row justify-center">
            <div>
              <img
                className="w-full h-[290px]"
                src={slideImg[currentImg]}
                alt={`Slide ${currentImg}`}
              />
            </div>
          </div>
          <button onClick={nextSlide} disabled={currentImg === slideImg.length - 1}>
            <FaArrowRight />
          </button>
        </div>
        <div className="flex mt-4">
          {slideImg.map((slide, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-2 rounded-full cursor-pointer mt-8 ${
                currentImg === index ? 'bg-blue-300' : 'bg-blue-200/30'
              }`}
              onClick={() => setCurrentImg(index)}
            ></div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PersonalSlide;