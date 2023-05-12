import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";
import GitbashGame from "../components/game/GitbashGame";
import monitor from "../assets/game_gitbash/monitor.png";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  name: "git",
  title: "주어진 시간 내에 명령어를 입력하라!",
  bg: monitor,
  number: 2,
};

export default function IntervalPage() {
  const gameMode = useSelector((state) => state.gameMode);

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
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <GitbashGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <GitbashGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}
