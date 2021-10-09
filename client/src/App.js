import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import Footer from './components/Footer';
import DestinationReviews from './components/DestinationReviews';
import Signup from './components/Signup';
import ThemeTravel from './components/ThemeTravel';
import Mypage from './components/Mypage';
import Review from './components/Review';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyles /> {/* CSS 전역 설정 */}
        <Header /> {/* 헤더(로고, 네비게이션) */}
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
          <Route exact path="/review">
            <Review />
          </Route>
        </Switch>
        <Footer /> {/* 푸터 */}
      </div>
    </BrowserRouter>
  );
}
export default App;
