import React from 'react'
import react from '../../img/skill/react.png'
import redux from '../../img/skill/redux.png'
import next from '../../img/skill/next.js.png'

const Front = ({ onClick, onClick2 }) => {
    const handleFrontClick = () => {
        onClick()
    }

    return (
        <div className="relative">
            <div
                className="w-24 h-24 border-4 border-yellow-100 font-semibold flex items-center justify-center rounded-full mb-2 bg-white z-0  sm:w-16 sm:h-16 sm:text-xs text-center"
                onClick={handleFrontClick}
            >
                Front-end
            </div>

            {onClick2 && (
                <>
                    <div className="absolute left-[20%] top-1 z-10 flex ">
                        <img src={react} alt="" className="rounded-md w-16 h-16 " />
                        <img src={redux} alt="" className="rounded-md w-16 h-16 " />
                        <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] w-72 p-2 bg-white shadow-xl ml-3 ">
                            <li>react의 생명주기에 대해 숙지했습니다.</li>

                            <li>redux의 상태관리에 대해 이해하고 스토어 안에 필요한 데이터를 담아서 사용했습니다. </li>
                        </ul>
                    </div>
                    <div className=" absolute top-32 group left-[1%] z-10 ">
                        <img src={next} alt="" className="rounded-md w-20 h-12 " />
                        <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[14px] p-2 bg-white shadow-xl mt-3 ">
                            <li>Next.js 13의 SSR과 CSR의 차이를 숙지했습니다.</li>
                            <li>Next.js 13에서 라우팅이 작동하는 방식을 숙지하였습니다</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}

export default Front
