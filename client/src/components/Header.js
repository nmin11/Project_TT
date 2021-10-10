import React from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import '../styles/Header.css';
import Signin from './Signin';

function Header(props) {
  let history = useHistory();

  const loginModalOpen = () => {
    props.setModalOn(true);
  };

  const handleSignOut = () => {
    history.push('/');

    props.setLoginOn(false);
  };

  return (
    <div>
      <Signin showPopup={props.modalOn} setShowPopup={props.setModalOn} setLoginOn={props.setLoginOn} />
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
            {props.loginOn ? (
              <li>
                <Link className="text-link" to="/myPage">
                  마이 페이지
                </Link>
              </li>
            ) : null}
            {props.loginOn ? (
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
