import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PopularDestination from './PopularDestination';
import DestinationReviews from './DestinationReviews';
import Signup from './Signup';
import BestPhotos from './BestPhotos';
import ThemeTravel from './ThemeTravel';
import Mypage from './Mypage';
import axios from 'axios';
import '../styles/Header.css';

axios.defaults.withCredentials = true;

function Header() {
  const [showPopup, setShowPopup] = useState(false); // 팝업 오픈 여부
  const [loginOn, setLoginOn] = useState(true); // 로그인 여부 (test : true로 바꾸고 개발)
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userLoginError, setUserLoginError] = useState('');

  const onLogin = async () => {
    const userData = {
      email: userEmail,
      password: userPassword,
    };

    // id, pw 입력란 초기화
    setUserEmail('');
    setUserPassword('');

    console.log(userData);

    // 로그인 JWT 인증 처리 (API POST : /login)
    await axios('http://ec2-3-35-140-107.ap-northeast-2.compute.amazonaws.com:8080/login', {
      method: 'POST',
      data: userData,
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'https://localhost:3000',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((res) => {
        const { accessToken } = res.data;
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        console.log(`email = ${userData.email}, password = ${userData.password}`);
        setUserLoginError('이메일 또는 비밀번호를 잘못 입력하셨습니다.');
        if (err.response) {
          // 에러에 response가 있으면 해당 data를 출력
          console.log(err.response.data);
        }
      });
  };

  const togglePopup = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
      setUserEmail('');
      setUserPassword('');
      setUserLoginError('');
    }
  };

  // 이메일 입력 상태관리
  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(userEmail);
  };

  // 비밀번호 입력 상태관리
  const handleChangePassword = (e) => {
    setUserPassword(e.target.value);
    console.log(userPassword);
  };

  // 모달 창 끄고 회원가입으로 이동
  const moveSignup = () => {
    setShowPopup(false);
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <BrowserRouter>
      <div>
        {showPopup ? (
          <div className="popup">
            <div className="popup_inner">
              <div id="signin-close-btn">
                <button className="close" onClick={togglePopup}>
                  <img src="images/close_btn.png" alt="닫기 버튼" />
                </button>
              </div>
              <div id="signin-contents">
                <img src="images/projecttt_logo.png" alt="project_tt_logo" />
                <span id="signin-title">로그인</span>
                <fieldset>
                  <input
                    className="signin-input"
                    onChange={handleChangeEmail}
                    type="email"
                    id="username"
                    placeholder="이메일"
                    maxlength="30"
                    value={userEmail}
                  ></input>
                </fieldset>
                <fieldset>
                  <input
                    className="signin-input"
                    onChange={handleChangePassword}
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    maxlength="30"
                    value={userPassword}
                  ></input>
                </fieldset>
                <span id="login-error">{userLoginError}</span>
                <div id="signin-btn">
                  <button className="signin-btn-contents" onClick={onLogin}>
                    로그인
                  </button>
                  <Link id="logo-link" to="/signUp">
                    <button className="signin-btn-contents" onClick={moveSignup}>
                      회원가입
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <header id="header">
        <Link id="logo-link" to="/">
          <img src="/images/projecttt_logo.png" alt="Project_TT LOGO" />
        </Link>
        <nav id="nav">
          <ul id="ul">
            <li>
              <Link className="text-link" to="/themeTravel">
                테마별 여행
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/destinationReviews">
                여행지 리뷰
              </Link>
            </li>
            {loginOn ? (
              <li>
                <Link className="text-link" to="/myPage">
                  마이 페이지
                </Link>
              </li>
            ) : null}

            <li>
              <button className="text-link" onClick={togglePopup}>
                로그인
              </button>
            </li>
            <li>
              <Link className="text-link" to="/signUp">
                회원가입
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <ThemeTravel />
        </Route>
        <Route exact path="/popularDestination">
          <PopularDestination />
        </Route>
        <Route exact path="/destinationReviews">
          <DestinationReviews />
        </Route>
        <Route exact path="/bestPhotos">
          <BestPhotos />
        </Route>
        <Route exact path="/themeTravel">
          <ThemeTravel />
        </Route>
        <Route exact path="/myPage">
          <Mypage />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
