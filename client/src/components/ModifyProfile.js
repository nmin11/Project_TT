import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/ModifyProfile.css';
import { API_URL } from '../config/constants';

function ModifyProfile(props) {
  const history = useHistory();

  const [changeNickname, setChangeNickname] = useState(props.userInfo.nickname);

  const modifyInfo = async () => {
    await axios(`${API_URL}/profile/${props.userInfo.id}`, {
      method: 'PUT',
      data: { nickname: changeNickname },
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT',
        'Access-Control-Allow-Credentials': 'true',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        props.setUserInfo(res.data);
        history.push('/mypage');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const modifyNickname = (e) => {
    setChangeNickname(e.target.value);
    console.log(changeNickname);
  };

  return (
    <div id="modify-profile">
      <div id="profile-contents">
        <div id="profile-photo">
          <span className="info-title">정보 수정</span>
          <img src="images/avatar.png" alt="프로필 사진" />
          <input id="profile-modify-name" defaultValue={props.userInfo.nickname} onChange={modifyNickname}></input>
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
          <button className="info-btn" onClick={modifyInfo}>
            정보 수정
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModifyProfile;
