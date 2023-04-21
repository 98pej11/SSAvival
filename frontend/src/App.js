import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";
import TissuePage from "./pages/TissuePage";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<EmojiPage />} />
          <Route path="/tissue" element={<TissuePage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
