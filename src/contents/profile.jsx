import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'
import { RiNotionFill } from 'react-icons/ri'
import { Wrapper, Heading } from '../components/common'
import logo from '../img/logo192.png'
import img from '../img/증명사진.jpg'
import Introduce from './introduce'

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
        <Wrapper>
            <Heading>About Me</Heading>
            <div className="bg-white flex justify-center w-full ">
                <div
                    ref={animatedElementRef}
                    className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="w-full md:w-1/2 ">
                        <Introduce />
                    </div>
                    {/* <div className="w-[30%] md:w-[28%] ">
                <img
                    src={img}
                    aria-hidden
                    alt="profile image" 
                    className=" m-auto w-64 "
                />
            </div> */}
                    <div className="box-border md:w-1/2 ">
                        <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                            <button class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow-lg m-2 w-[300px]">
                                <p className="flex items-center gap-[5px] text-slate-600">Name : 고연수</p>
                            </button>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow-lg m-2 w-[300px]">
                                <a
                                    href="mailto:web7722@gmail.com"
                                    className="flex items-center gap-[5px] text-slate-600"
                                >
                                    <TfiEmail />
                                    gys2116@gmail.com
                                </a>
                            </button>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow-lg m-2 w-[300px]">
                                <a
                                    href="https://github.com/rhdustn?tab=repositories"
                                    className="flex items-center gap-[5px] text-slate-600"
                                >
                                    <IoLogoGithub />
                                    https://github.com/rhdustn
                                </a>
                            </button>
                            <button class="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded shadow-lg m-2 w-[300px]">
                                <a
                                    href="https://responsible-lung-5e7.notion.site/39a8590e73bd4bfe97ace86f5a2d482d?pvs=4"
                                    className="flex items-center gap-[5px] text-slate-600"
                                >
                                    <RiNotionFill />
                                    개발일지
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Profile
