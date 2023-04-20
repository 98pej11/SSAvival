import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmojiPage from "./pages/EmojiPage";

const Pages = styled.div`
  position: relative;
`;

function App() {
  return (
    <BrowserRouter>
      <Pages>
        <Routes>
          <Route path="/" element={<EmojiPage />} />
        </Routes>
      </Pages>
    </BrowserRouter>
  );
}
export default App;
