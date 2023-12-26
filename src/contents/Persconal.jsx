import React from 'react'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress,SiLocal } from 'react-icons/si'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import Personal from "../img/personal/diary2.gif"
import PersonalDetail from './PersonalDetail'

const BounceContent = () => {
    const [isShowingModal, toggleModal] = useModal()
    return (
        <div className=" bg-white shadow-lg w-[350px] h-[500px] m-2 rounded-2xl hover:scale-110 transition-transform ease-in-out duration-500 relative">
            <div className="bg-red-200 h-[200px] rounded-t-2xl">
                <img className='w-full h-[220px]  rounded-t-2xl' src={Personal} alt="react 메인 이미지" />
            </div>
            <div className="ml-3 mt-5">
                <div>
                    <span className="font-semibold text-xl text-slate-700">개인 diary</span>
                    <span className="font-medium">react(개인)</span>
                </div>
                <div className="py-3">
                    <div>
                        나만의 개인 다이어리만들기 위해 react를 활용해서 만들었음  
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl w-14 text-slate-700 border flex justify-center rounded-lg bg-blue-300/30">
                        skills
                    </div>
                    <div className="flex text-[32px] gap-[8px] py-[8px]">
                        <DiJavascript />
                        <DiHtml5/>
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
                <PersonalDetail />
            </Modal>
        </div>
    )
}

export default BounceContent
