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
            <div className="flex">
                <BounceContent/>
                <TravelContent/>
                <PersonalContent/>
            </div>
        </Wrapper>
    )
}

export default Projects
