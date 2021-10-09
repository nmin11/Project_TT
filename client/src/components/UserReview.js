import React from 'react';
import '../styles/UserReview.css';

function UserReview(props) {
  return (
    <>
      <div className="user-review-content">
        <img src={props.src} alt="여행이미지" />
        <div className="user-review-wrapper">
          <span className="user-review-title">{props.title}</span>
          <span className="user-review-description">{props.description.slice(0, 35) + '...'}</span>
          <span className="user-review-count">{`조회수 : ${props.count}`}</span>
          <div className="user-review-likes">
            <img src="https://www.pnglib.com/wp-content/uploads/2020/01/facebook-like_5e134e4160605.png" alt="좋아요" />
            <span className="user-review-likes-count">{props.likeCount}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserReview;
