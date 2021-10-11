import React, { useEffect } from 'react';
import '../styles/Mypage.css';
import UserReview from './UserReview';
import { useHistory, Link } from 'react-router-dom';
import { dummyMypageReview } from '../dummy/dummyData';
import axios from 'axios';
import { API_URL } from '../config/constants';

function Mypage(props) {
  const history = useHistory();

  // !이슈 : 새로고침 시 데이터 유지하는 방법 공부하기
  useEffect(() => {});

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

  // 회원 탈퇴 로직
  const withdrawal = async () => {
    await axios(`${API_URL}/user/${props.userInfo.id}`, {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE',
        'Access-Control-Allow-Credentials': 'true',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        // 탈퇴 완료 후 메인 페이지로 이동
        props.setLoginOn(false);
        history.push('/');
      })
      .catch((err) => {
        console.error(err);
        // 에러 완료 후 메인 페이지로 이동
        props.setLoginOn(false);
        history.push('/');
      });
  };

  return (
    <div id="mypage">
      <div id="profile-contents">
        <div id="profile-photo">
          <span className="info-title">회원 정보</span>
          <img src="images/avatar.png" alt="프로필 사진" />
          <span id="member-name">{props.userInfo.nickname}</span>
        </div>
        <div id="profile-info">
          <div id="profile-wrapper">
            <ul>
              <li className="profile-title">E-mail</li>
              <li className="profile-description">{props.userInfo.email}</li>
            </ul>
            <ul>
              <li className="profile-title">가입일</li>
              <li className="profile-description">2021.10.06</li>
            </ul>
          </div>
        </div>
        <div id="btn-contents">
          <Link id="logo-link" to="/ModifyProfile">
            <button className="info-btn">정보 수정</button>
          </Link>
          <button className="info-btn" onClick={withdrawal}>
            회원 탈퇴
          </button>
        </div>
        <span className="info-title">내가 쓴 리뷰</span>
        {UserReviewList}
      </div>
    </div>
  );
}

export default Mypage;
