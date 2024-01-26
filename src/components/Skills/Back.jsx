import React from 'react'
import express from '../../img/skill/express.png'
import node from '../../img/skill/1200px-Node.js_logo.svg.png'
import { SiAmazon, SiAmazonec2, SiAmazonroute53, SiMysql, SiSequelize } from 'react-icons/si'

const Back = ({ onClick, onClick2 }) => {
    const handleBackClick = () => {
        onClick()
    }

    return (
        <div className="relative">
            <div
                className="w-24 h-24 border-4 border-yellow-100 font-semibold flex items-center justify-center rounded-full mb-2 bg-white z-0  sm:w-16 sm:h-16 sm:text-xs"
                onClick={handleBackClick}
            >
                Back-end
            </div>

            {onClick2 && (
                <>

                    <div className="absolute left-[20%] top-[-40%] z-10  ">
                        <div className="flex">
                            <img src={express} alt="" className="rounded-md w-20  " />
                            <img src={node} alt="" className="rounded-md  w-20  " />
                        </div>
                        <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] h-auto p-2 bg-white shadow-xl ml-3 ">
                            <li>토큰 인증을 사용한 API 서버구현을 해본 경험이 있습니다.</li>
                        </ul>
                    </div>
                    <div className=" absolute top-32 group left-[1%] z-10 ">
                        <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                            <div className="flex items-center gap-[8px]">
                                <SiMysql />
                                <span className="md:w-[120px]">My SQL</span>
                            </div>
                            <div className="flex items-center gap-[8px]">
                                <SiSequelize />
                                <span className="md:w-[120px]">Sequelize</span>
                            </div>
                        </span>
                        <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] p-2 bg-white shadow-xl mt-3 ">
                            <li>Express 를 사용하여 서버 환경을 구축하였습니다.</li>
                            <li>Sequelize 를 사용하여 MySQL 데이터베이스 스키마 설계를 해봤습니다</li>
                        </ul>
                    </div>
                    {/* <div className="absolute z-10  ">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiAmazon />
                                    <span className="md:w-[120px]">AWS</span>
                                </div>
                                <SiAmazonec2/>
                                <span className="md:w-[120px]">EC2</span>
                                <SiAmazonroute53/>
                                <span className="md:w-[120px]">Route53</span>
                            </span>
                            <ul ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] p-2 bg-white shadow-xl mt-3 ">
                                <li>EC2를 사용해서 서버 배포한 경험이 있습니다.</li>
                                <li>Route53으로 가비아에서 구매한 도메인에 IP를 연결한 경험이 있습니다</li>
                                <li>탄력적 IP를 사용해 주소를 할당한 경험이 있습니다</li>
                            </ul>
                    </div> */}
                </>
            )}
        </div>
    )
}

export default Back
