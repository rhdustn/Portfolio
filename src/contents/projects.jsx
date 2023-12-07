import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5 } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import NextJs from '../img/1.png'
import NextJsDark from '../img/1Dark.png'
import ReactImg from '../img/react.png'
import ReactPhone from '../img/reactPhone.png'
import React, { useState } from 'react'
import Slide from './Slide'
import ReactSlide from './ReactSlide'
import NodeSlide from './NodeSlide'
import Node from '../img/node.png'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(true)
    }

    const handleMouseOut = () => {
        setHovered(false)
    }

    const image = hovered ? NextJsDark : NextJs

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row shadow-lg rounded p-2">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src={image}
                            className="w-full"
                            onMouseOver={handleHover}
                            onMouseOut={handleMouseOut}
                            alt="기업협약 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 11. 01 ~ 2023.12.5</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            블록체인 정보 조회 사이트(협약프로젝트){' '}
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바운스코드회사와 함께 진행한 협약 프로젝트로써 블록체인 네트워크 내에서 유통되는 토큰, 블록
                            등에 저장되어 있는 데이터를 확인할 수 있는 사이트를 만들고자 함
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiGithubBadge />
                            <DiJavascript />
                            <SiTypescript />
                            <SiTailwindcss />
                            <DiReact />
                            <SiNextdotjs />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>BLOCK 전체 리스트 페이지, 디테일 페이지 작업</li>
                            <li>Token 전체 리스트 페이지, 디테일 페이지 작업</li>
                            <li>반응형 웹 디자인 설계</li>
                            <li>다크모드 개발</li>
                            <li>검색기능 구현</li>
                        </ul>
                    </div>
                </li>

                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row shadow-lg rounded p-2">
                    <div className="w-full md:w-[420px] ">
                        <img src={ReactImg} className="w-full" alt="어떤어떤 프로젝트" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 7. 28 ~ 2023.8.28</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            여행 추천 사이트(React Project)
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트
                            GOOGLE MAP API를 통해 주변 관광지 추천이 가능한 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <DiReact />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>전체 게시판 페이지, 게시판 상세 페이지 작업</li>
                            <li>좋아요 기능 구현</li>
                            <li>댓글 대댓글 구현</li>
                            <li>마이페이지 작업</li>
                        </ul>
                    </div>
                </li>
                {/* 세번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row shadow-lg rounded p-2">
                    <div className="w-full md:w-[420px] ">
                        <img src={Node} className="w-full" alt="nodeJS project" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 6. 9 ~ 2023.6.28</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            goodreads 오마주 책 구매 사이트 개발(Node.js Project)
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            다양한 여러 작가들의 등록한 책, 소설을 구매하여 독자들이 작품에 대한 리뷰를 남기며 취향에
                            맞는 책과 작가를 찾아가며 소통하는 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <DiHtml5 />
                            <SiExpress />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>책의 정보를 올리는 작성페이지 구현 </li>
                            <li>작가&독자의 마이페이지 구현</li>
                            <li>Checklist,FollowingList, BuysList 각종 리스트 업이 되는 페이지 구현</li>
                            <li>웹 소켓을 이용한 채팅 기능 구현</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <Slide />
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <ReactSlide />
            </Modal>
            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <NodeSlide />
            </Modal>
        </Wrapper>
    )
}

export default Projects
