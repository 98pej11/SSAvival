import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";
import TissuePage from "./pages/TissuePage";
import GamePage from "./pages/GamePage";
import IdCardPage from "./pages/IdCardPage";
import SeatPage from "./pages/SeatPage";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<EmojiPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/tissue" element={<TissuePage />} />
          <Route path="/id-card" element={<IdCardPage />} />
          <Route path="/seat" element={<SeatPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
