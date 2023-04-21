import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";
import IdCardPage from "./pages/IdCardPage";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<EmojiPage />} />
          <Route path="/id-card" element={<IdCardPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
