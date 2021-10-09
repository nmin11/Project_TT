import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../styles/Signin.css';

axios.defaults.withCredentials = true;

function Signin(props) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userLoginError, setUserLoginError] = useState('');

  const history = useHistory();

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
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Credentials': 'true',
      },
      withCredentials: true,
    })
      .then((res) => {
        const { accessToken } = res.data;
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        console.log(res.data);

        // useHistory를 사용하여 로그인 성공시 모달창을 끄고 mypage로 이동
        props.setShowPopup(false);
        setUserEmail('');
        setUserPassword('');
        setUserLoginError('');
        history.push('/mypage');
        props.setLoginOn(true);
      })
      .catch((err) => {
        console.error(err);
        console.log(`email = ${userData.email}, password = ${userData.password}`);

        if (userData.email === '' && userData.password === '') {
          setUserLoginError('이메일 또는 비밀번호를 입력해주세요.');
        } else {
          setUserLoginError('이메일 또는 비밀번호를 잘못 입력하셨습니다.');
        }

        if (err.response) {
          // 에러에 response가 있으면 해당 data를 출력
          console.log(err.response.data);
        }
      });
  };

  const togglePopup = () => {
    if (props.showPopup === false) {
      props.setShowPopup(true);
    } else {
      props.setShowPopup(false);
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
    props.setShowPopup(false);
    setUserEmail('');
    setUserPassword('');
    setUserLoginError('');
  };

  return (
    <div>
      {props.showPopup ? (
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
  );
}

export default Signin;
