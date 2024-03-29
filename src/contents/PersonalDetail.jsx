import React from 'react'
import PersonalSlide from '../components/Slide/PersonalSlide'

const PersonalDetail = () => {
    return (
        <div className="w-full h-[600px] flex  ">
            <div className="w-[50%] ">
                <div className="h-[60%]">
                    <PersonalSlide />
                </div>
                <div className="mt-10">
                    <div className="w-28 border-4 rounded-lg border-blue-200 flex justify-center">리포지토리</div>
                   <a href="https://github.com/rhdustn/diaryProject.git">https://github.com/rhdustn/diaryProject.git</a>
                </div>
            </div>
            <div className="ml-10 w-[50%]">
                <div>
                    <div className="text-2xl font-bold border-b-4 border-blue-200">프로젝트 소개</div>
                    <div>
                        일기장을 만들어 CURD 기능을 넣어 만든 일기장 입니다 로컬스토리지로 데이터를 저장해서 간단한게
                        작업을 해봤습니다{' '}
                    </div>
                </div>
                <div>
                    <div className="text-lg my-3 font-bold border-b-4 border-blue-200">구현 기능</div>
                    <div>
                        <div className="font-semibold"> 1.일기장의 CRUD 구현</div>
                        <div>- 일기를 작성한 년, 월에 따라 DiaryList가 변경 </div>
                        <div>- 최신순 오래된 & 날씨 순으로 나열할 수 있는 토글버튼 구현 </div>
                        <div>- 조건에 따라 요소의 조건부 렌더링 버튼을 구현하였습니다 </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default PersonalDetail
