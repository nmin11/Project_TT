import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import DestinationReviews from './DestinationReviews';
import Signup from './Signup';
import ThemeTravel from './ThemeTravel';
import Mypage from './Mypage';
import Signin from './Signin';
import '../styles/Header.css';

function Header() {
  const [loginOn, setLoginOn] = useState(true); // 로그인 여부 (test : true로 바꾸고 개발)
  const [modalOn, setModalOn] = useState(false);

  const loginModalOpen = () => {
    setModalOn(true);
  };

  return (
    <BrowserRouter>
      <Signin showPopup={modalOn} setShowPopup={setModalOn} />
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
              <button className="text-link" onClick={loginModalOpen}>
                로그인
              </button>
            </li>
            <li>
<<<<<<< Updated upstream
              <Link className="text-link" to="/signUp">
=======
               <Link className="text-link" to="/signUp">
>>>>>>> Stashed changes
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
        <Route exact path="/destinationReviews">
          <DestinationReviews />
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
