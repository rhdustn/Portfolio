import React from 'react'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import TravelDetail from "../contents/TravelDetail"
import ReactImg from "../img/react.png"

const BounceContent = () => {
    const [isShowingModal, toggleModal] = useModal()
    return (
        <div className=" bg-white shadow-lg w-[350px] h-[500px] m-2 rounded-2xl hover:scale-110 transition-transform ease-in-out duration-500 relative">
            <div className="bg-red-200 h-[200px] rounded-t-2xl">
                <img className='w-full h-[220px]  rounded-t-2xl' src={ReactImg} alt="react 메인 이미지" />
            </div>
            <div className="ml-3 mt-5">
                <div>
                    <span className="font-semibold text-xl text-slate-700">Travel Opener</span>
                    <span className="font-medium">(팀프로젝트 (4명))</span>
                </div>
                <div className="py-3">
                    <div>
                        트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트 GOOGLE
                        MAP API를 통해 주변 관광지 추천이 가능한 사이트
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl w-14 text-slate-700 border flex justify-center rounded-lg bg-blue-300/30">
                        skills
                    </div>
                    <div className="flex text-[32px] gap-[8px] py-[8px]">
                        <DiJavascript />
                        <DiNodejs />
                        <DiGithubBadge />
                        <DiReact />
                    </div>
                </div>
                <div
                    className="font-semibold text-base w-20 text-slate-700 border-[5px] border-blue-300/30 hover:bg-blue-300/30  flex justify-center rounded-lg absolute bottom-4 cursor-pointer "
                    onClick={toggleModal}
                >
                    상세보기
                </div>
            </div>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <TravelDetail />
            </Modal>
        </div>
    )
}

export default BounceContent
