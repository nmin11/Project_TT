import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/Review.css";

axios.defaults.withCredentials = true;

function Review(props) {

  const history = useHistory();
  const { state } = useLocation();

  const [newComment, setNewComment] = useState("1");
  const [commentText, setCommentText] = useState("");
  const [comment, setComment] = useState([])
  const changeCommentText = (e) => {
    setCommentText(e.target.value);
  };

  useEffect(() => {
    getComments();
  }, [newComment]);
  async function getComments() {
    await axios(
      "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review/" + state.id,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        let commentObj = res.data.comments;
        let objectToArray = [];
        let keys = Object.keys(commentObj);
        for (let i = 0; i < keys.length; i++) {
          objectToArray.push({ ...commentObj[keys[i]], id: keys[i] });
        }
        setComment(objectToArray);
      })
      .catch((e) => {});
  }
  console.log(props.userInfo)
  async function deleteReview() {
    await axios(
      "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/review/" +
        state.id,
      {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        history.push("/destinationReviews");
      })
      .catch((e) => {});
  }
  async function postComment() {
    await axios(
      "http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/comment",
      {
        method: "POST",
        data: {
          userId: props.userInfo.id,
          reviewId: state.id,
          content: commentText,
        },
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Credentials": "true",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        setCommentText("")
        setNewComment(newComment+1)
      })
      .catch((e) => {});
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
        {props.loginOn ? (
          <Link
            to={{
              pathname: "/newReview",
              props: props,
              state: state,
              mode: "modifyPost",
            }}
          >
            <button id="review-modify-btn">글수정</button>
            <button onClick={deleteReview}>
              글삭제(테스트용 아무나 삭제 가능)
            </button>
          </Link>
        ) : null}
      </span>

      <div>
        {comment.length !== 0 ? comment.map((ele) => {
            return (
              <div class="comment-content">
                <span class="comment-user">{ele['comment-writer']}</span>
                <span class="comment-createdat">
                </span>
                <span class="comment-description">{ele['comment-content']}</span>
              </div>
            );
          }
        ) : null}
      </div>
      <div>
      {props.loginOn ?
        <span>{}</span> : <span>로그인이 필요합니다</span>
      }
        <textarea
          maxLength="500"
          rows="5"
          cols="60"
          value={commentText}
          onChange={changeCommentText}
        ></textarea>
        <button onClick={postComment}>등록</button>
      </div>
    </div>
  );
}
export default Review;
