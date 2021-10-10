import React from 'react';
import ThemeSlide from './ThemeSlide';

function ThemeTravel() {
  return (
    <>
      <ThemeSlide
        themeTitle="#신나는"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiotFlQx4s9kjqYNS8mDtVichRyM42Ckmi6bm7cWLLhCBfbKMn47jxHEmN4fcb8xPfS60&usqp=CAU"
      />
      <ThemeSlide themeTitle="#조용한" src="https://www.koreageoparks.kr/img/geoparks/jeju/sungsanilchul_02.jpg" />
      <ThemeSlide themeTitle="#자연의" src="http://www.jejusori.net/news/photo/202104/328671_337538_3757.jpg" />
    </>
  );
}
export default ThemeTravel;
