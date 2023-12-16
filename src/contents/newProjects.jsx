import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'

const Projects = () => {
    return (
        <Wrapper>
            <Heading>Projects</Heading>
            <div className="flex">
                <div className="bg-white shadow-lg w-80 h-[500px] m-2">
                    <div className="bg-red-200 h-[200px]">이미지</div>
                    <div className='ml-2'>
                    <div>
                        <span className='font-semibold text-xl text-slate-700'>Bounce explorer</span>
                        <span className='font-medium'>(기업 협약 프로젝트)</span>
                    </div>
                    <div className='py-3'>
                        <div>바운스코드회사와 함께 진행한 협약 프로젝트로써 블록체인 네트워크 내에서 유통되는 토큰, 블록
                            등에 저장되어 있는 데이터를 확인할 수 있는 사이트를 만들고자 함</div>
                    </div>
                    <div>
                        <div className='font-semibold text-xl text-slate-700'>skills</div>
                        <div className="flex text-[32px] gap-[8px] py-[8px]">
                            <DiGithubBadge />
                            <DiJavascript />
                            <SiTypescript />
                            <SiTailwindcss />
                            <DiReact />
                            <SiNextdotjs />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Projects
