import React, { useState } from 'react'
import readerPage from "../img/readerPage2.jpg"
import readerPage2 from "../img/readersPage.jpg"
import writerPage from "../img/writerPage.jpg" 
import chat from "../img/chat.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const NodeSlide = () => {
    const slideImg = [
        { img: writerPage,content: '작가페이지 입니다'  },
        { img: readerPage,content: '독자페이지 입니다'  },
        { img: readerPage2,content: '독자페이지2 입니다'  },
        { img: chat,content: 'chat 입니다'  },
    ]

    const [currentImg, setCurrentImg] = useState(0)

    const preSlide = () => {
        setCurrentImg((prevIdx) => Math.max(prevIdx - 1, 0))
    }

    const nextSlide = () => {
        setCurrentImg((prevIdx) => Math.min(prevIdx + 1, slideImg.length - 1))
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row">
                <button onClick={preSlide} disabled={currentImg === 0}>
                    <FaArrowLeft />
                </button>
                <div>
                    <img className='w-[80%]' src={slideImg[currentImg].img} alt={`Slide ${currentImg}`} />
                </div>
                <button onClick={nextSlide} disabled={currentImg === slideImg.length - 1}>
                    <FaArrowRight />
                </button>
            </div>
            <div>
                <div>
                    {slideImg[currentImg].content}
                </div>
                <div>
                    {slideImg[currentImg].content2}
                </div>
                </div>
            
        </div>
    )
}

export default NodeSlide
