import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'
import BounceContent from './BounceContent'
import TravelContent from './TravelContent'
import BounceDetail from './BounceDetail'
import TravelDetail from './TravelDetail'
import PersonalContent from './Persconal'
import PersonalDetail from './PersonalDetail'
import { useState } from 'react'




const Projects = () => {
    return (
        <Wrapper>
            <Heading>Projects</Heading>
            <div className="flex flex-wrap ">
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-4 sm:flex justify-center ">
                    <BounceContent/>
                </div>
                <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 mb-4 sm:flex justify-center">
                    <TravelContent/>
                </div>
                <div className="w-full sm:w-full  md:w-1/2 lg:w-1/3 mb-4 sm:flex justify-center">
                    <PersonalContent/>
                </div>
            </div>
        </Wrapper>
    )
}

export default Projects