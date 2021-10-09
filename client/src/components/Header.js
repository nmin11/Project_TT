import React, { useState } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import '../styles/Header.css';
import Signin from './Signin';

function Header() {
  const [loginOn, setLoginOn] = useState(false); // 로그인 여부 (test : true로 바꾸고 개발)
  const [modalOn, setModalOn] = useState(false);

  let history = useHistory();

  const loginModalOpen = () => {
    setModalOn(true);
  };

  const handleSignOut = () => {
    history.push('/');
    setLoginOn(false);
  };

  return (
    <div>
      <Signin showPopup={modalOn} setShowPopup={setModalOn} setLoginOn={setLoginOn} />
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
            {loginOn ? (
              <li>
                <button className="text-link" onClick={handleSignOut}>
                  로그아웃
                </button>
              </li>
            ) : (
              <li>
                <button className="text-link" onClick={loginModalOpen}>
                  로그인
                </button>
              </li>
            )}
            <li>
              <Link className="text-link" to="/signUp">
                회원가입
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default withRouter(Header);
