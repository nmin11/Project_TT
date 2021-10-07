import React, { useState } from 'react';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles /> {/* CSS 전역 설정 */}
      <Header /> {/* 헤더(로고, 네비게이션) */}
    </div>
  );
}
export default App;
