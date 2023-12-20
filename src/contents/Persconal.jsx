import React from 'react'
import { DiJavascript, DiNodejs, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si'

const PersonalContent = () => {
  return (
    <div className=" bg-white shadow-lg w-80 h-[500px] m-2 rounded-2xl hover:scale-110 transition-transform ease-in-out duration-500">
            <div className="bg-red-200 h-[200px] rounded-t-2xl">이미지</div>
            <div className="ml-3">
                <div>
                    <span className="font-semibold text-xl text-slate-700">My Project</span>
                    <span className="font-medium">(개인 프로젝트)</span>
                </div>
                <div className="py-3">
                    <div>
                      react로 일기장 만들꺼임
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl w-14 text-slate-700 border flex justify-center rounded-lg bg-gray-300">
                        skills
                    </div>
                    <div className="flex text-[32px] gap-[8px] py-[8px]">
                        <DiGithubBadge />
                        <DiJavascript />
                        <DiNodejs />
                        <DiReact />
                        <SiExpress />
                        <SiTailwindcss/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PersonalContent