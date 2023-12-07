import React, { useState } from 'react'
import NextJs from '../img/1.png'
import NextJsDark from '../img/1Dark.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slide = () => {
    const slideImg = [
    { img: NextJs, content: '동해물과 백두산이 마르고 닳도록' },
    { img: NextJsDark,content: '하느님이 보우하사 우리 나라만세'  }]

    const [currentImg, setCurrentImg] = useState(0)

    const preSlide = () => {
        setCurrentImg((prevIdx) => Math.max(prevIdx - 1, 0));
    };

    const nextSlide = () => {
        setCurrentImg((prevIdx) => Math.min(prevIdx + 1, slideImg.length - 1));
    };


    return (
        <div className="flex">
            <div className="flex">
                <button onClick={preSlide}>
                    <FaArrowLeft />
                </button>
                <div className="">
                    <img className="w-[300px]" src={slideImg[currentImg].img} alt={`Slide ${currentImg}`} />
                </div>
                <button onClick={nextSlide}>
                    <FaArrowRight />
                </button>
            </div>
            <div className="p-2">
                <ul>
                    <li>{slideImg[currentImg].content}</li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Slide
