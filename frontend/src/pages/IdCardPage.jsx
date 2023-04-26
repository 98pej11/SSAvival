import React from "react";
import styled from "styled-components";
import IdCardComp from "../components/game/IdCardComp";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  position: relative;
  background-image: url(${game});
  // background-size: auto;
  background-size: contain;
  // background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "ID카드를 태그해서 밥을 받아보자",
  number: 4,
};

export default function IdCardPage() {
  return (
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <IdCardComp {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
