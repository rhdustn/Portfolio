import React, { useState } from 'react'
import Travel1 from "../../img/gif/Travel1.gif"
import Travel2 from "../../img/gif/Travel2.gif"
import Travel3 from "../../img/gif/Travel3.gif"
import Travel4 from "../../img/gif/Travel4.gif"
import Travel5 from "../../img/gif/Travel5.gif"
import Travel6 from "../../img/gif/Travel6.gif"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slide = () => {
    const slideImg = [Travel1,Travel5,Travel2,Travel3,Travel4,Travel6];
  
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
  
  export default Slide;