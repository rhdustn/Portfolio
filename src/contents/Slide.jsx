import React, { useState } from 'react'
import NextJs from '../img/1.png'
import NextJsDark from '../img/1Dark.png'
import searchbar from "../img/search.png"
import tokenList from "../img/tokenPc.png"
import tokenDetail from "../img/tokenDetailPc.png"
import blockList from "../img/BlockDetailPc.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slide = () => {
    const slideImg = [
      { img: NextJs, content: 'This is the main page' },
      { img: NextJsDark, content: '...' },
      { img: searchbar, content: '...' },
      { img: tokenList, content: '...' },
      { img: tokenDetail, content: '...' },
      { img: blockList, content: '...' },
    ];
  
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
                className="w-full h-[250px]"
                src={slideImg[currentImg].img}
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