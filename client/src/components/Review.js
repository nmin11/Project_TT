import React, { useState }  from 'react';
import { useLocation } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { dummyComments } from '../dummy/dummyData';
import axios from 'axios';
import '../styles/Review.css';

axios.defaults.withCredentials = true;

function Review() {
  const history = useHistory();
  const { state , props } = useLocation();
  const [comment, setComment] = useState('');
  const changeComment = (e) => {
    setComment(e.target.value);
  }
  async function deleteReview() {
    await axios(
      'http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review/' + state.id,
      {
        method: 'DELETE',
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE',
          'Access-Control-Allow-Credentials': 'true',
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        history.push('/destinationReviews')
      })
      .catch((e) => {

      });
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
        <span id="reviewer">{`글쓴이 : ${state.author}`}</span>
      </div>

      <img id="review-img" src={state.image} alt={state.image}></img>
      <div id="reviewer-description">{state.content}</div>
      <span>
      {props.loginOn ? 
      <Link
        to={{
          pathname: '/newReview',
          props: props,
          state: state,
          mode: "modifyPost",
        }}
      >
        <button id="review-modify-btn">글수정</button>
      <button onClick={deleteReview}>글삭제(테스트용 아무나 삭제 가능)</button>
      </Link>
      : null}
      </span>

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
