import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { FaNode } from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiReact,
    SiRedux,
    SiMysql,
    SiSequelize,
    SiTailwindcss,
    SiAmazonec2,
    SiStyledcomponents,
    SiHtml5,
    SiCss3,
} from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>Skills</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>var, let, const의 차이점을 알고 목적에 맞게 사용했습니다.</li>
                                <li>try,catch문을 활용하여 에러처리하는 방법을 사용하였습니다.</li>
                                <li>동기,비동기처리를 통하여 실행순서를 효율적으로 처리하였습니다.</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>interface를 통하여 객체의 타입을 지정하였습니다.</li>
                                <li>
                                    제네릭타입을 사용하여 커스텀훅과 같이 재사용이 가능한 훅을 더 효율적으로 처리
                                    하였습니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiReact />
                                    <span className="md:w-[120px]">React</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiRedux />
                                    <span className="md:w-[120px]">Redux</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>react의 생명주기에 대해 숙지했습니다.</li>
                                <li>props를 사용해 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달을 숙지했습니다.</li>
                                <li>react에서 re-rendering이 되는 경우를 알고 있습니다.</li>
                                <li>상태관리에 대해 이해하고 state를 효율적으로 처리했습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>next.js의 SSR(server-side-rendering)과 CSR(client-side-rendering)의 차이를 숙지했습니다.</li>
                                <li>next.js에서 라우팅이 작동하는 방식을 숙지하였습니다</li>
                                <li>데이터 페치를 진행해 보았습니다</li>
                                <li>Error 컴포넌트로 찾는 페이지에 데이터가 없으면 나타나는 Error 페이지를 진행해 보았습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiExpress />
                                    <span className="md:w-[120px]">Express</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <FaNode />
                                    <span className="md:w-[120px]">NodeJS</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Model,Controller로 웹서버의 요청을 받아 데이터를 처리 하였습니다.</li>
                                <li>JWT 토큰을 발행하여 로그인기능을 구현하였습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiMysql />
                                    <span className="md:w-[120px]">My SQL</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiSequelize />
                                    <span className="md:w-[120px]">Sequelize</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li> Node.js 와 Express 를 사용하여 서버 환경을 구축하였습니다.</li>
                                <li>Sequelize 를 사용하여 MySQL 데이터베이스 스키마 설계 및 테이블을 구성하였습니다</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        배포
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiAmazonec2 />
                                    <span className="md:w-[120px]">Ec2</span>
                                </div>

                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>EC2를 사용해서 인스턴스에 배포한 경험이 있습니다.</li>

                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <div className="w-[15%]">
                        <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold  basisc-[25%]">
                            기타 스택
                        </h3>
                    </div>
                    <div className="w-[70%]">
                        <ul className="flex  gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                            <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                                <SiTailwindcss />
                                <span className="md:w-[120px]">Tailwindcss</span>
                                <SiStyledcomponents />
                                <span className="md:w-[120px]">Styled-Components</span>
                                <SiHtml5 />
                                <span className="md:w-[120px]">HTML</span>
                                <SiCss3 />
                                <span className="md:w-[120px]">CSS</span>
                           
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
