import { RiDoubleQuotesL,} from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div className='mt-10'>
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />

                <div className="text-center text-[16px] md:text-[24px]">
                    <p>침착함으로 효율적인 방법을 찾기 위해 노력하는 개발자 입니다</p>
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
        </div>
    )
}

export default Introduce
