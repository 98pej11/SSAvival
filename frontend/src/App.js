import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ElevatorPage from "./pages/ElevatorPage";
import TissuePage from "./pages/TissuePage";
import MainPage from "./pages/MainPage";
import LockerPage from "./pages/LockerPage";
import AttendancePage from "./pages/AttendancePage";
import EmojiPage from "./pages/EmojiPage";
import KakaoLogin from "./pages/KakaoLogin";
import TypoPage from "./pages/TypoPage";
import GitbashPage from "./pages/GitbashPage";

import GamePage from "./pages/GamePage";
import IdCardPage from "./pages/IdCardPage";
import SeatPage from "./pages/SeatPage";
import TestPage from "./pages/TestPage";
import PuzzlePage from "./pages/PuzzlePage";
const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/emoji" element={<EmojiPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/callback/kakao" element={<KakaoLogin />} />
          <Route path="/tissue" element={<TissuePage />} />
          <Route path="/locker" element={<LockerPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/elevator" element={<ElevatorPage />} />
          <Route path="/typo" element={<TypoPage />} />
          <Route path="/git" element={<GitbashPage />} />
          <Route path="/id-card" element={<IdCardPage />} />
          <Route path="/seat" element={<SeatPage />} />
          <Route path="/puzzle" element={<PuzzlePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
