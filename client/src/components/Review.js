import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { dummyComments } from "../dummy/dummyData";
import "../styles/Review.css";

function Review() {
  const { state } = useLocation();
  return (
    <div>
      <div class="review_header">
        <div class="review_title">{state.title}</div>
        <div>
          <span class="reviewer">글쓴이</span>
          <span class="writing_time">작성시간</span>
          <Link
            to={{
              pathname: "/ModifyReview",
              state: state,
            }}
          >
            <button>글수정</button>
          </Link>
        </div>
      </div>
      <div>
        <img src={state.src}></img>
      </div>
      <div>{state.description}</div>
      <div>
        {dummyComments.map((ele) => {
          if (ele.board_id === state.id) {
            return (
              <div>
                <div>----------------댓글------------------</div>
                <div>댓글 작성자</div>
                <div>{ele.created_at.toString()}</div>
                <div>{ele.content}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Review;
