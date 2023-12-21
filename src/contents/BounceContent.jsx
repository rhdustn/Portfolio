import React from 'react'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import BounceDetail from './BounceDetail'
import MainImg from "../img/1.png"

const BounceContent = () => {
  const [isShowingModal, toggleModal] = useModal()
    return (
        <div className="bg-white shadow-lg w-[350px] h-[500px] m-2 rounded-2xl hover:scale-110 transition-transform ease-in-out duration-500 relative">
            <div className="bg-red-200 h-[200px] rounded-t-2xl">
                <img className='w-full h-[220px]  rounded-t-2xl' src={MainImg} alt="바운스코드 메인 이미지" />
            </div>
            <div className="ml-3 mt-5">
                <div>
                    <span className="font-semibold text-xl text-slate-700">Bounce explorer</span>
                    <span className="font-medium">(기업 협약 프로젝트)</span>
                </div>
                <div className="py-3">
                    <div>
                        바운스코드회사와 함께 진행한 협약 프로젝트로써 블록체인 네트워크 내에서 유통되는 토큰, 블록 등에
                        저장되어 있는 데이터를 확인할 수 있는 사이트를 만들고자 함
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl w-14 text-slate-700 border flex justify-center rounded-lg bg-blue-300/30">
                        skills
                    </div>
                    <div className="flex text-[32px] gap-[8px] py-[8px]">
                        <DiGithubBadge />
                        <DiJavascript />
                        <SiTypescript />
                        <SiTailwindcss />
                        <DiReact />
                        <SiNextdotjs />
                    </div>
                </div>
            <div className="font-semibold text-base w-20 text-slate-700 border-[5px] border-blue-300/30 hover:bg-blue-300/30  flex justify-center rounded-lg absolute bottom-4 cursor-pointer "
             onClick={toggleModal}>
                        상세보기
                    </div>
            </div>


            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <BounceDetail />
            </Modal>
        </div>

        
    )
}

export default BounceContent
