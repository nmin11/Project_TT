import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PopularDestination from './PopularDestination';
import DestinationReviews from './DestinationReviews';
import BestPhotos from './BestPhotos';
import ThemeTravel from './ThemeTravel';
import '../styles/Header.css';

function Header() {
  return (
    <BrowserRouter>
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
            <li>마이 페이지</li>
            <li>로그인</li>
            <li>회원가입</li>
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
