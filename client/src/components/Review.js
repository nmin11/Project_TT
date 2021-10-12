import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { dummyComments } from '../dummy/dummyData';
import '../styles/Review.css';

function Review() {
  const { state } = useLocation();
  return (
    <div id="review-header">
      <div id="review-title">{state.title}</div>
      <div id="review-content">
        <span id="reviewer">{`글쓴이 : ${state.id}`}</span>
        <span id="writing-time">{`작성시간 : ${state.id}`}</span>
      </div>

      <img src={state.src} alt={state.id}></img>
      <div>{state.description}</div>
      <Link
        to={{
          pathname: '/ModifyReview',
          state: state,
        }}
      >
        <button id="review-modify-btn">글수정</button>
      </Link>

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
