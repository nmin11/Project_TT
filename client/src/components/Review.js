import React, { useState }  from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { dummyComments } from '../dummy/dummyData';
import axios from 'axios';
import '../styles/Review.css';

axios.defaults.withCredentials = true;

function Review() {
  const { state } = useLocation();
  const [comment, setComment] = useState('');
  const changeComment = (e) => {
    setComment(e.target.value);
  }
  
  async function postComment() {
    await axios(
      'http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/comment',
      {
        method: 'POST',
        data: {
          userId : 1,
          reviewId : state.id,
          content : comment
        },
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Credentials': 'true',
        },
        withCredentials: true,
      }
    )
      .then((res) => {

      })
      .catch((e) => {

      });
  }

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
      <div>
        <span>댓글작성자</span>
        <textarea maxLength="500" rows="5" cols="60" onChange={changeComment}></textarea>
        <button onClick={postComment}>등록</button>
      </div>
    </div>
  );
}
export default Review;
