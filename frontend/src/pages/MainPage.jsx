import React from "react";
import styled from "styled-components";
import ElevatorGame from "../components/game/ElevatorGame";
import GameComp from "../components/game/GameComp";
import Header from "../components/main/MainHeader";
import "../index.css";

const Pages = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function MainPage() {
  return (
    <Pages>
      <Header />
    </Pages>
  );
}
