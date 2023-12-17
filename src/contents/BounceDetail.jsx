import React from 'react'

const BounceDetail = () => {
    return (
        <div className="w-full h-[600px] flex  ">
            <div className="w-[50%] ">
                <div className="h-[60%] border"> gif 슬라이드 넣을곳 </div>
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
                        <div>- 전체 페이지 구현 : 유저들이 작성한 모든 글을 보여줄 수 있는 페이지 구현</div>
                        <div> - 본인이 쓴 글 수정 삭제 가능</div>
                    </div>
                    <div>
                        <div className="font-semibold"> 2. nft List 페이지, nft detail 페이지 구현</div>
                        <div> - 사진 올리기 : 유저가 원하는 사진을 올릴 수 있게 기능을 넣었음</div>
                        <div> - 리뷰를 작성해서 올리는 기능 구현</div>
                    </div>
                    <div>
                        <div className="font-semibold"> 3. 반응형 웹 구현</div>
                        <div> - 작성한 게시글, 댓글에 좋아요 버튼 &삭제 기능 구현</div>
                        <div> - 작성한 게시글에 댓글추가 구현</div>
                        <div> - 작성한 게시글에 대댓글추가 구현</div>
                    </div>
                    <div>
                        <div className="font-semibold"> 4. 다크모드 구현</div>
                        <div> - 작성한 게시글, 댓글에 좋아요 버튼 &삭제 기능 구현</div>
                        <div> - 작성한 게시글에 댓글추가 구현</div>
                        <div> - 작성한 게시글에 대댓글추가 구현</div>
                    </div>
                    <div>
                        <div className="font-semibold">5.커스텀 훅을 이용한 검색기능 구현</div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BounceDetail
