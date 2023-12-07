import React, { useState } from 'react'
import NextJs from '../img/1.png'
import NextJsDark from '../img/1Dark.png'
import searchbar from "../img/search.png"
import tokenList from "../img/tokenList.png"
import tokenDetail from "../img/tokendetail.png"
import blockList from "../img/block.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slide = () => {
    const slideImg = [
    { img: NextJs, content: '메인페이지 입니다' },
    { img: NextJsDark,content: '다크 모드를 만들기 위해 customHook인 useDarkMode를 만들어 테마(isDark)의 상태를 관리하고, localStorage에 테마를 업데이트를 하면서, 선택한 테마에 따라 토글 기능을 구현했습니다'  },
    { img: searchbar,content: '블록익스플로러의 가장 중요한 블록 트랜젝션 조회의 검색의 기능을 구현하였고 유저의 검색 내용이 transaction의 문자열의 형태가 아닌 경우 오류 구문을 손쉽게 확인할 수 있도록 custom hook의 기능을 작성했습니다.'  },
    { img: tokenList,content: 'tokenList에 token의 data를 가져와 각각 props에 맞게 위치를 지정해 주었습니다'  },
    { img: tokenDetail,content: 'tokendetail 페이지 입니다'  },
    { img: blockList,content: '전체 block가 있는 list 페이지 입니다'  },
   
]

    const [currentImg, setCurrentImg] = useState(0)

    const preSlide = () => {
        setCurrentImg((prevIdx) => Math.max(prevIdx - 1, 0));
    };

    const nextSlide = () => {
        setCurrentImg((prevIdx) => Math.min(prevIdx + 1, slideImg.length - 1));
    };


    return (
        <div className="flex flex-col w-full h-[80%]">
            <div className="flex flex-row">
                <button onClick={preSlide}>
                    <FaArrowLeft />
                </button>
                <div className='h-[50%]'>
                    <img className='w-[80%]' src={slideImg[currentImg].img} alt={`Slide ${currentImg}`} />
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
