import React, { useState } from 'react'
import board from "../img/board.png"
import boarddetail from "../img/boarddetail.png"
import comment from "../img/comments.png"
import likes from "../img/likes.png"
import reactImg from "../img/react.png"
import reactInfo from "../img/reactInfo.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ReactSlide = () => {
    const slideImg = [
        { img: reactImg, content: '동해물과 백두산이 마르고 닳도록' },
        { img: reactInfo,content: '하느님이 보우하사 우리 나라만세'  },
        { img: board,content: '하느님이 보우하사 우리 나라만세22222'  },
        { img: boarddetail,content: '하느님이 보우하사 우리 나라만세33333'  },
        { img: comment,content: '하느님이 보우하사 우리 나라만세44444'  },
        { img: likes,content: '하느님이 보우하사 우리 나라만세5555555'  },
    
    ]

    const [currentImg, setCurrentImg] = useState(0);

    const preSlide = () => {
        setCurrentImg((prevIdx) => Math.max(prevIdx - 1, 0));
    };

    const nextSlide = () => {
        setCurrentImg((prevIdx) => Math.min(prevIdx + 1, slideImg.length - 1));
    };

    return (
        <div className="flex">
            <div className="flex">
                <button onClick={preSlide} disabled={currentImg === 0}>
                    <FaArrowLeft />
                </button>
                <div className="">
                    <img className='w-[300px]' src={slideImg[currentImg].img} alt={`Slide ${currentImg}`} />
                </div>
                <button onClick={nextSlide} disabled={currentImg === slideImg.length - 1}>
                    <FaArrowRight />
                </button>
            </div>
            <div className='p-2'>
                <ul>
                    <li>{slideImg[currentImg].content}</li>
                </ul>
            </div>
        </div>
    );
};

export default ReactSlide;