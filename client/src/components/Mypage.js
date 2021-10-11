import React from "react";
import '../styles/Mypage.css';
import UserReview from './UserReview';
import { dummyMypageReview } from '../dummy/dummyData';

function Mypage() {
  // 내가 쓴 리뷰 map
  const UserReviewList = dummyMypageReview.map((ele) => (
    <UserReview
      src={ele.src}
      title={ele.title}
      description={ele.description}
      count={ele.count}
      likeCount={ele.likeCount}
    />
  ));

  return (
    <div id="mypage">
      <div id="profile-contents">
        <div id="profile-photo">
          <span className="info-title">회원 정보</span>
          <img src="images/avatar.png" alt="프로필 사진" />
          <span id="member-name">김코딩</span>
        </div>
        <div id="profile-info">
          <div id="profile-wrapper">
            <ul>
              <li className="profile-title">E-mail</li>
              <li className="profile-description">kimcoding@google.com</li>
            </ul>
            <ul>
              <li className="profile-title">가입일</li>
              <li className="profile-description">2021.10.06</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="review-contents">
        <span className="info-title">내가 쓴 리뷰</span>
        {UserReviewList}
      </div>
      <div id="btn-contents">
        <button className="info-btn">정보 수정</button>
        <button className="info-btn">회원 탈퇴</button>
      </div>
    </div>
  );
}

export default Mypage;
