import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div className="">
            <div
                ref={animatedElementRef}
                className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex flex-col gap-[16px] w-full items-center">
                    <RiDoubleQuotesL />

                    <div className="text-center text-[16px] md:text-[24px]">
                        <p>
                            <span className="text-xl font-semibold relative">
                                침착함<span className="absolute bottom-[1px] left-0 w-full h-1 bg-blue-300 z-[-1]"></span>
                            </span>
                            으로
                            <span className="text-xl font-semibold"> 효율적인 방법</span>을 찾기 위해 노력하는 개발자
                            입니다
                        </p>
                    </div>
                    {/* <div className="text-center text-[16px] md:text-[24px]">
                        <p>
                            With{' '}
                            <span className="text-xl font-semibold relative">
                                Calm
                                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
                            </span>{' '}
                            Developers trying to find efficient methods no see
                        </p>
                    </div> */}
                    <RiDoubleQuotesR />
                </div>
            </div>
        </div>
    )
}

export default Introduce
