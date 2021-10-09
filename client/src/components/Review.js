import React from "react";
import "../styles/Review.css"

function Review() {
  return (
    <div>
      <div class="review_header">
        <div class="review_title">게시글 제목</div>
        <div>
          <span class="reviewer">글쓴이 닉네임</span>
          <span class="writing_time"> 글작성일</span>
        </div>
      </div>
      <div>
          글내용
      </div>
    </div>
  );
}
export default Review;
