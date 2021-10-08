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

function Header() {
  const [showPopup, setShowPopup] = useState(false); // 팝업 오픈 여부
  const [loginOn, setLoginOn] = useState(true); // 로그인 여부 (test : true로 바꾸고 개발)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onLogin(email, password) {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post('/login', data)
      .then((res) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        console.log(data);
        console.log('에러');
      });
  }

  const togglePopup = () => {
    if (showPopup === false) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
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
                  ></input>
                </fieldset>
                <fieldset>
                  <input
                    className="signin-input"
                    onChange={handleChangePassword}
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                  ></input>
                </fieldset>
                <div id="signin-btn">
                  <button className="signin-btn-contents" onClick={onLogin}>
                    로그인
                  </button>
                  <button className="signin-btn-contents">회원가입</button>
                  <div>{email}</div>
                  <div>{password}</div>
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
              <button className="nav-btn" onClick={togglePopup}>
                로그인
              </button>
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
      </Switch>
    </BrowserRouter>
  );
}

export default Header;
