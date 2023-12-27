import React from 'react'
import ReactSlide from '../components/Slide/ReactSlide'

const TravelDetail = () => {
    return (
        <div className="w-full h-[600px] flex  ">
            <div className="w-[50%] ">
                <div className="h-[60%]">
                    <ReactSlide />
                <div className='text-gray-400 text-sm'>
                    슬라이드 뒤에 시현 동영상 있습니다
                </div>
                </div>
                <div className="mt-10">
                    <div className="w-28 border-4 rounded-lg border-blue-200 flex justify-center">리포지토리</div>
                    <div>https://github.com/9oodam/Travel-Opener</div>
                </div>
            </div>
            <div className="ml-10 w-[50%]">
                <div>
                    <div className="text-2xl font-bold border-b-4 border-blue-200">프로젝트 소개</div>
                    <div>
                        트리플 여행앱 아이디어에 AI를 접목하여 개개인의 취향에 맞는 여행 플랜을 제공하는 프로젝트 GOOGLE
                        MAP API를 통해 주변 관광지 추천이 가능한 사이트
                    </div>
                </div>
                {/* <div>
                    <div className="text-2xl font-semibold border-b-4 border-blue-200">후기</div>
                    <div>후기</div>
                </div> */}
                <div>
                    <div className="text-lg my-3 font-bold border-b-4 border-blue-200">구현 기능</div>
                    <div>
                        <div className="font-semibold"> 1. 자유게시판 페이지 작성</div>
                        <div>- 전체 페이지 구현 : 유저들이 작성한 모든 글을 보여줄 수 있는 페이지 구현</div>
                        <div> - 본인이 쓴 글 수정 삭제 가능</div>
                    </div>
                    <br/>
                    <div>
                        <div className="font-semibold"> 2. 글 등록 페이지 작성</div>
                        <div> - 사진 올리기 : 유저가 원하는 사진을 올릴 수 있게 기능을 넣었음</div>
                        <div> - 리뷰를 작성해서 올리는 기능 구현</div>
                    </div>
                    <br/>
                    <div>
                        <div className="font-semibold"> 3. 게시판 상세 페이지 작성</div>
                        <div> - 작성한 게시글, 댓글에 좋아요 버튼 &삭제 기능 구현</div>
                        <div> - 작성한 게시글에 댓글추가 & 대댓글추가 구현</div>
                    </div>
                    <br/>
                    <div>
                        <div className="font-semibold">4. 마이페이지 구현</div>
                        <div> - 프로필 : 내 정보 변경 가능</div>
                        <div> - 팔로우 : 좋아요 한 게시물과 댓글을 보여주는 기능 구현</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelDetail
