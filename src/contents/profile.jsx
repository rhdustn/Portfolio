import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px] md:w-[28%] ">
                <img
                    src="./logo192.png"
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] m-auto rounded-full border-2 border-slate-500"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] ">
                <Hero>
                    고연수 <span className="text-[16px] text-slate-400 font-normal">web7722</span>
                </Hero>
                <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                    아주 작은 개발자가 될거야
                </p>
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <a href="mailto:web7722@gmail.com" className="flex items-center gap-[5px] text-slate-600">
                        <TfiEmail />
                        gys2116@gmail.com
                    </a>
                    <a
                        href="https://github.com/ingoo-blockchain?tab=repositories"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoLogoGithub />
                        https://github.com/rhdustn
                    </a>
                    <a href="https://responsible-lung-5e7.notion.site/39a8590e73bd4bfe97ace86f5a2d482d?pvs=4" className="flex items-center gap-[5px] text-slate-600">
                        <FaBlogger />
                        Notion
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Profile
