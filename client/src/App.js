import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';
import DestinationReviews from './components/DestinationReviews';
import Signup from './components/Signup';
import ThemeTravel from './components/ThemeTravel';
import Mypage from './components/Mypage';
import Review from './components/Review';
import ModifyProfile from './components/ModifyProfile';
import Signin from './components/Signin';
import NewReview from './components/NewReview';

function App() {
  const [loginOn, setLoginOn] = useState(false); // 로그인 여부 (test : true로 바꾸고 개발)
  const [modalOn, setModalOn] = useState(false); // 모달 오픈 여부
  const [userInfo, setUserInfo] = useState(null); // 로그인 회원 정보

  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles /> {/* CSS 전역 설정 */}
        <Signin
          modalOn={modalOn}
          setModalOn={setModalOn}
          setLoginOn={setLoginOn}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
        />
        <Header modalOn={modalOn} setModalOn={setModalOn} loginOn={loginOn} setLoginOn={setLoginOn} />
        {/* 헤더(로고, 네비게이션) */}
        <Switch>
          <Route exact path="/">
            <ThemeTravel />
          </Route>
          <Route exact path="/destinationReviews">
            <DestinationReviews setLoginOn={setLoginOn} loginOn={loginOn} userInfo={userInfo}/>
          </Route>
          <Route exact path="/themeTravel">
            <ThemeTravel />
          </Route>
          <Route exact path="/myPage">
            <Mypage setLoginOn={setLoginOn} userInfo={userInfo} setUserInfo={setUserInfo} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/modifyProfile">
            <ModifyProfile setLoginOn={setLoginOn} userInfo={userInfo} setUserInfo={setUserInfo} />
          </Route>
          <Route exact path="/newReview">
            <NewReview />
          </Route>
        </Switch>
        <Footer /> {/* 푸터 */}
      </div>
      {/*회원 가입 모달 */}
    </BrowserRouter>
  );
}
export default App;
