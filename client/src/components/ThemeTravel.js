import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Theme.css';

function ThemeTravel() {
  return (
  <div>
    <div class='hash'>
      <h1>#신나는</h1>
      <div class='imagebox'>
        <img class='theme-img' src="/images/images-1.jpg"></img>
        <img class='theme-img' src="/images/images-2.jpg"></img>
        <img class='theme-img' src="/images/images-3.jpg"></img>
      </div>
    </div>
    <div class='hash'>
      <h1>#조용한</h1>
      <div class='imagebox'>
        <img class='theme-img' src="/images/images-4.jpg"></img>
        <img class='theme-img' src="/images/images-5.jpg"></img>
        <img class='theme-img' src="/images/images-6.jpg"></img>
      </div>
    </div>
    <div class='hash'>
      <h1>#자연의</h1>
      <div class='imagebox'>
        <img class='theme-img' src="/images/images-7.jpg"></img>
        <img class='theme-img' src="/images/images-8.jpg"></img>
        <img class='theme-img' src="/images/images-9.jpg"></img>
      </div>
    </div>
  </div>
    );
}
export default ThemeTravel;
