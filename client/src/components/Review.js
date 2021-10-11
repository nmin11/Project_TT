import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "../styles/Review.css"

function Review() {
    const {state} = useLocation();
  return (
    <div>
      <div class="review_header">
        <div class="review_title">{state.title}</div>
        <div>
          <span class="reviewer">글쓴이</span>
          <span class="writing_time">작성시간</span>
          <Link to={{
                  pathname: "/Review",
                  state: state
                }}>
          <button>글수정</button>
          </Link>
        </div>
      </div>
      <div><img src={state.src}></img></div>
      <div>
      {state.description}
      </div>
    </div>
  );
}
export default Review;
