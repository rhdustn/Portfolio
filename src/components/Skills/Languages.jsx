import React, { useState } from 'react'
import js from '../../img/skill/javascript.png'
import ts from '../../img/skill/typescript.png'

const Languages = ({ onClick, onClick2 }) => {
    const handleLanguagesClick = () => {
        onClick()
    }

    return (
        <div className="relative">
            <div
                className="w-24 h-24 border-4 border-yellow-100 flex items-center justify-center rounded-full mb-2 bg-white group sm:w-16 sm:h-16 sm:text-xs"
                onClick={handleLanguagesClick}
            >
                <div className="font-semibold"> Languages</div>
                {onClick2 && (
                    <>
                        <div className="absolute left-[20%] top-1 z-10 flex ">
                            <img src={js} alt="" className="rounded-md w-16 h-16 " />
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] w-72 p-2 bg-white shadow-xl ml-3 ">
                                <li>실행컨택스트를 이해해서 자바스크립트 코드가 실행되는 환경을 만들었습니다.</li>
                                <li>Http 응답코드에 따라 화면을 랜더링 했습니다.</li>
                                <li>이벤트 루프에 대해 이해하고 비동기 코드를 처리했습니다</li>
                            </ul>
                        </div>
                        <div className=" absolute top-44 group left-[1%] z-10 ">
                            <img src={ts} alt="" className="w-16 h-16 " />
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] w-72 bg-white shadow-xl mt-3 ">
                                <li>typeScript 사용목적에 대해 납득하고 사용했습니다.</li>
                                <li>props를 받는 곳에 타입을 설정해 코드베이스를 이해하고 수정했습니다.</li>
                                <li>
                                    제네릭타입을 사용하여 커스텀훅을 만들어 재사용이 가능한 훅으로 만들어 사용했습니다
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Languages
