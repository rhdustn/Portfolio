import React from 'react'
import Slide from '../components/Slide/Slide'

const BounceDetail = () => {
    return (
        <div className="w-full h-[600px] flex">
            <div className="w-[50%] ">
                <div className="h-[60%]">
                    <Slide />
                    <div className="text-gray-400 text-sm">슬라이드 뒤에 시현 동영상 있습니다</div>
                </div>
                <div className="mt-10">
                    <div className="w-28 border-4 rounded-lg border-blue-200 flex justify-center">배포링크</div>
                    <div>
                       <a href="https://zerohoney.com/">https://zerohoney.com/</a>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="w-28 border-4 rounded-lg border-blue-200 flex justify-center">리포지토리</div>
                    <div>https://github.com/zerohoney97/blockExploreFront</div>
                </div>
            </div>
            <div className="ml-10 w-[50%]">
                <div>
                    <div className="text-2xl font-bold border-b-4 border-blue-200">프로젝트 소개</div>
                    <div>
                        {' '}
                        바운스코드회사와 함께 진행한 협약 프로젝트로써 블록체인 네트워크 내에서 유통되는 토큰, 블록 등에
                        저장되어 있는 데이터를 확인할 수 있는 사이트를 만들고자 함
                    </div>
                </div>
                {/* <div>
                <div className="text-2xl font-semibold border-b-4 border-blue-200">후기</div>
                <div>후기</div>
            </div> */}
                <div>
                    <div className="text-lg my-3 font-bold border-b-4 border-blue-200">구현 기능</div>
                    <div>
                        <div className="font-semibold"> 1. tokenList 페이지, token detail 페이지 구현</div>
                    </div>
                    <br />
                    <div>
                        <div className="font-semibold"> 2. block List 페이지, block detail 페이지 구현</div>
                        <div>- block의 number를 누르면 해당 넘버의 페이지로 가도록 경로를 설정해서 구현 </div>
                    </div>
                    <br />
                    <div>
                        <div className="font-semibold"> 3. 반응형 웹 구현</div>
                        <div>
                            -Tailwind CSS 를 이용해서 sm,mf,lg로 너비를 세 부분으로 나뉘 breakpoint 지정 해 너비에 따라
                            달리지는 반응형 웹을 구현{' '}
                        </div>
                    </div>
                    <br />

                    <div>
                        <div className="font-semibold"> 4. 다크모드 구현</div>
                        <div> - 다크모드 커스텀 훅을 만들어서 재사용성을 높임 </div>
                        <div> -localStorage를 사용하여 사용자의 테마 설정을 로컬에 저장하도록 함 </div>
                    </div>
                    <br />

                    <div>
                        <div className="font-semibold">5.커스텀 훅을 이용한 검색기능 구현</div>
                        <div>
                            {' '}
                            - 검색 기능을 구현하고 입력값을 처리하여 적절한 경로로 이동하는 데 사용검색어가 주소, 거래
                            해시 또는 숫자인 경우 해당하는 경로를 반환 하게 만들었음{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BounceDetail
