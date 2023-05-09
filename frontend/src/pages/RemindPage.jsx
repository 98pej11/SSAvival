import React, { useEffect } from "react";
import RemindGame from "../components/game/RemindGame";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import Header from "../components/game/Header";
import game from "../assets/game.png";
import { useDispatch } from "react-redux";
import { GameAction } from "../redux/actions/GameAction";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "gpt와 함께하는 연상게임!",
  number: 5,
};

function RemindPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GameAction.getRemindAnswer("음식"));
  }, []);

  return (
    <Pages>
      <Header props={myProps} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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

export default RemindPage;
