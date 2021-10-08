import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Theme.css';

function ThemeTravel() {
  return (
    <div>
      <div class='hash'>
        <h2 class = 'themefont'>#신나는</h2>
        <div class='imagebox'>
          <div class="wrapper">
            <section id="section1">
              <a href="#section3" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <a href="#section2" class="arrow__btn">›</a>
            </section>
            <section id="section2">
              <a href="#section1" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-7.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-8.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-9.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <a href="#section3" class="arrow__btn">›</a>
            </section>
            <section id="section3">
              <a href="#section2" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <a href="#section1" class="arrow__btn">›</a>
            </section>
          </div>
        </div>
      </div>
      <div class='hash'>
        <h2 class ='themefont'>#조용한</h2>
        <div class='imagebox'>
          <div class="wrapper">
            <section id="section4">
              <a href="#section6" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <a href="#section5" class="arrow__btn">›</a>
            </section>
            <section id="section5">
              <a href="#section4" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-7.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-8.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-9.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <a href="#section6" class="arrow__btn">›</a>
            </section>
            <section id="section6">
              <a href="#section5" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <a href="#section4" class="arrow__btn">›</a>
            </section>
          </div>
        </div>
      </div>
      <div class='hash'>
        <h2 class='themefont'>#자연의</h2>
        <div class='imagebox'>
          <div class="wrapper">
            <section id="section7">
              <a href="#section9" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <a href="#section8" class="arrow__btn">›</a>
            </section>
            <section id="section8">
              <a href="#section7" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-7.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-8.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-9.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-1.jpg"></img>
              </div>
              <a href="#section9" class="arrow__btn">›</a>
            </section>
            <section id="section9">
              <a href="#section8" class="arrow__btn">‹</a>
              <div class="item">
                <img class='theme-img' src="/images/images-2.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-3.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-4.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-5.jpg"></img>
              </div>
              <div class="item">
                <img class='theme-img' src="/images/images-6.jpg"></img>
              </div>
              <a href="#section7" class="arrow__btn">›</a>
            </section>
          </div>
        </div>
      </div>
    </div>

  );
}
export default ThemeTravel;
