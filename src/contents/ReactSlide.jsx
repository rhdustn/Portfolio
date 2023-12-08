import React, { useState } from 'react'
import board from '../img/board.png'
import boarddetail from '../img/boarddetail.png'
import comment from '../img/comments.png'
import likes from '../img/likes.png'
import reactImg from '../img/react.png'
import reactInfo from '../img/reactInfo.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const ReactSlide = () => {
    const slideImg = [
        {
            img: reactImg,
            content:
                '트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트를 구상 하였습니다',
        },
        {
            img: board,
            content:
                '이슈사항 : 글 작성을 하고 이미지들을 넣을때 이미지배열의 첫번째 이미지가 썸네일처럼 나오면 좋을거 같다라고 생각해서 구현하기 위해 노력함 ',
            content2:
            ' 해결방법 : JSON 형식으로 인코딩된 이미지 배열의값 개체에서 이미지 속성을 가져오고  그 배열의첫 번째 항목을 선택하게 만들었다.thumbNail변수에 첫 번째 이미지의 정보를 효과적으로 저장하여 해결함'
            },
        {
            img: boarddetail,
            content:
                '이슈사항 : 게시판을 만들때 게시판 디테일 페이지에서 자신이 쓴 글과 댓글을 자신만 수정하거나 삭제를 하는 기능을 구현하는 도중에 로그인을 한 유저의 정보를 가져오지 못하는 이슈 발생',
            content2:
            ' 해결방법 : 로그인한 유저의 정보를 저장할 수 있는 redux 를 만들어서 store에 저장을 하고useSelector 후크를 사용하여 redux store에서 로그인한 유저의 정보 데이터를 추출을 해서전역변수화 시켜 사용자의 데이터를 불러옴'
            },
        {
            img: comment,
            content:
                '이슈사항 : 게시판을 만들때 게시판 디테일 페이지에서 자신이 쓴 글과 댓글을 자신만 수정하거나 삭제를 하는 기능을 구현하는 도중에 로그인을 한 유저의 정보를 가져오지 못하는 이슈 발생 함',
            content2:
            ' 해결방법 : 로그인한 유저의 정보를 저장할 수 있는 redux 를 만들어서 store에 저장을 하고  useSelector 후크를 사용하여 redux store에서 로그인한 유저의 정보 데이터를 추출을 해서전역변수화 시켜 사용자의 데이터를 불러옴'
            },
        { img: likes, content: '좋아요 기능을 제작을 하면서 comment와 비슷한 기능이였음' },
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
            <div className="flex flex-row justify-center">
                <button onClick={preSlide} disabled={currentImg === 0}>
                    <FaArrowLeft />
                </button>
                <div className=''>
                    <img className='w-[60%]' src={slideImg[currentImg].img} alt={`Slide ${currentImg}`} />
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

export default ReactSlide
