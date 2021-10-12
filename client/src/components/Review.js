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

      <img id="review-img" src={state.src} alt={state.id}></img>
      <div id="reviewer-description">{state.description}</div>
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
              <div class="comment-content">
                <span class="comment-user">{`댓글 작성자`}</span>
                <span class="comment-createdat">{ele.created_at.toString()}</span>
                <span class="comment-description">{ele.content}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Review;
