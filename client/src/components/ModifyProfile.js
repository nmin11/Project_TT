import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/ModifyProfile.css';

function ModifyProfile() {
  const history = useHistory();

  const moveMypage = () => {
    history.push('/mypage');
  };

  return (
    <div id="modify-profile">
      <div id="profile-contents">
        <div id="profile-photo">
          <span className="info-title">정보 수정</span>
          <img src="images/avatar.png" alt="프로필 사진" />
          <input id="profile-modify-name" value="김코딩"></input>
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
        <div id="btn-contents">
          <button className="info-btn" onClick={moveMypage}>
            정보 수정
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyProfile;
