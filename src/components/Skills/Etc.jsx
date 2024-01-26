import React from 'react'
import figma from "../../img/skill/figma.png"
import css from "../../img/skill/css.png"
import html from "../../img/skill/html.png"
import styled from "../../img/skill/styled.jpg"
import tailiwind from "../../img/skill/tailwind.png"
import {
    SiAmazon,
    SiAmazonec2,
    SiAmazonroute53,
    SiCss3,
    SiHtml5,
    SiMysql,
    SiSequelize,
    SiStyledcomponents,
    SiTailwindcss,
} from 'react-icons/si'
import { FaFigma } from 'react-icons/fa6'

const Etc = ({ onClick, onClick2 }) => {
    const handleEtcClick = () => {
        onClick()
    }

    return (
        <div className="relative">
            <div
                className="w-24 h-24 border-4 border-yellow-100 font-semibold flex items-center justify-center rounded-full mb-2 bg-white z-0"
                onClick={handleEtcClick}
            >
                Etc
            </div>

            {onClick2 && (
                <>
                    <div className="w-[70%]">
                        <ul className="flex  gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                            <li className="flex flex-col   gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                                <div className='flex' >
                                <img src={tailiwind} alt="" className="rounded-md h-16 w-32  " />
                                <img src={styled} alt="" className="rounded-md ml-4  h-12   " />
                                  
                                </div>
                                <div className='flex'>
                                <img src={css} alt="" className="rounded-md  h-12  ml-2 " />
                                <img src={html} alt="" className="rounded-md h-12  ml-2  " />
                                <img src={figma} alt="" className="rounded-md h-12   ml-2  " />

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute z-10  ">
                        <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                            <div className="flex items-center gap-[8px]">
                                <SiAmazon />
                                <span className="md:w-[120px]">AWS</span>
                            </div>
                            <SiAmazonec2 />
                            <span className="md:w-[120px]">EC2</span>
                            <SiAmazonroute53 />
                            <span className="md:w-[120px]">Route53</span>
                        </span>
                        <ul
                            ul
                            className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] p-2 bg-white shadow-xl mt-3 "
                        >
                            <li>EC2를 사용해서 서버 배포한 경험이 있습니다.</li>
                            <li>Route53으로 가비아에서 구매한 도메인에 IP를 연결한 경험이 있습니다</li>
                            <li>탄력적 IP를 사용해 주소를 할당한 경험이 있습니다</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Etc
