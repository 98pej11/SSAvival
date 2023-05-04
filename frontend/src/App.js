import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import GamePage from "./pages/GamePage";
import KakaoLogin from "./pages/KakaoLogin";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/callback/kakao" element={<KakaoLogin />} />

        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
