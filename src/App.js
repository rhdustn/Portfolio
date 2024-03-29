import React, { useEffect, useRef, useState } from 'react'
import Profile from './contents/profile'
import Introduce from './contents/introduce'
import Skills from './contents/skills'
import Footer from './contents/footer'
import Header from './components/Header'
import Main from './components/Main'
import NewProjects from './contents/newProjects'
import NewSkills from './contents/Newskills'

function App() {
    const profileRef = useRef(null)
    const projectsRef = useRef(null)
    const mainRef = useRef(null)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const scrollToMain = () => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToProfile = () => {
        if (profileRef.current) {
            profileRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const [selectedContent, setSelectedContent] = useState('NewProjects')

    const handleContentChange = (content) => {
        setSelectedContent(content)
    }

    const calculateScrollPercentage = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollTop =
            window.scrollY ||
            window.pageYOffset ||
            document.body.scrollTop + ((document.documentElement && document.documentElement.scrollTop) || 0)

        const totalHeight = documentHeight - windowHeight
        const scrolled = (scrollTop / totalHeight) * 100

        setScrollPercentage(scrolled)
    }

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollPercentage)

        return () => {
            window.removeEventListener('scroll', calculateScrollPercentage)
        }
    }, [])

    return (
        <>
            <Header
                scrollToMain={scrollToMain}
                scrollToProfile={scrollToProfile}
                scrollToProjects={scrollToProjects}
                scrollPercentage={scrollPercentage}
            />
            <div className="sm:flex items-center justify-center flex-col">
                <Main />
                <div className="w-full h-full bg-gradient-to-b to-white ">
                    <div className="w-full mx-auto p-[16px] md:p-[30px] box-border flex flex-col">
                        {/* introduce */}
                        <div ref={profileRef} className="flex sm:flex-col justify-center">
                            <div className="w-full sm:w-full md:w-1/2">
                                <Profile />
                            </div>
                            <div className="w-full sm:w-full md:w-1/2">
                                <NewSkills />
                            </div>
                        </div>
                        {/* <Skills/> */}
                        {/* <div className="mt-20" ref={skillsRef}>
                       <Skills2/>
                    </div> */}
                        <Introduce />
                        {/* Project Experiencea */}
                        <div className="mt-20" ref={projectsRef}>
                            {/* <Projects /> */}
                            <NewProjects />
                        </div>
                        {/* Skills */}

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
