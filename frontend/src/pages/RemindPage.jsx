import React from "react";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import RemindGame from "../components/game/RemindGame";
import Header from "../components/game/Header";
import game from "../assets/game.png";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "연상되는 단어를 입력해봐!",
  number: 10,
};

export default function RemindPage() {
  return (
    <Pages>
      <Header props={myProps} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1%",
          height: "100vh",
        }}
      >
        <GameComp props={myProps}>
          <RemindGame {...myProps} />
        </GameComp>
      </div>
    </Pages>
  );
}
