import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/gamePage/Header";
import Box from "@mui/material/node/Box";
import "../index.css";
import GitbashGame from "../components/games/GitbashGame";
import TypoGame from "../components/games/TypoGame";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import TimerBomb from "../components/gamePage/TimerBomb";
import TissueGame from "../components/games/TissueGame";

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1%",
  height: "100vh",
};

const gameContainer = {
  display: "flex",
  // position:'relative',
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
  backgroundColor: "rgba(0, 0, 0, 0.7)", // 배경색 투명하게 만들기
  padding: 5,
  maxWidth: "60%", // 최대 너비 값 설정
  width: "100%",
  height: "60vh",
  overflow: "hidden",
};

export default function GamePage() {
  // 갈아끼울 게임 컴포넌트 리스트
  const gameComps = [
    <GitbashGame key="GitbashGame" />,
    <TypoGame key="TypoGame" />,
    <TissueGame key="TissueGame" />,
  ];

  // 마운트할 게임 컴포넌트의 인덱스 및 이미 보여준 게임 컴포넌트 인덱스 visited 리스트에 저장
  const [index, setIndex] = React.useState(0);
  const [visited, setVisited] = React.useState([0]);
  console.log("index랑 visited 로그,", index, visited);

  // redux : timeLimit(게임 제한시간)이랑 bgPath(게임 배경) 구독
  const timeLimit = useSelector((state) => state.gameReducer.timeLimit);
  const bgPath = useSelector((state) => state.gameReducer.bgPath);

  // 렌더링 후 timeLimit 값이 바뀔 때마다 timeLimit 초만큼 기다린 후 index 값 변경
  if (timeLimit) {
    let newIndex = Math.floor(Math.random() * gameComps.length);
    while (visited.includes(newIndex)) {
      newIndex = Math.floor(Math.random() * gameComps.length);
    }

    setTimeout(() => {
      setIndex(newIndex);
      setVisited([...visited, newIndex]);
    }, timeLimit * 1000);
  }

  return (
    <Box
      style={{
        backgroundImage: `url(${bgPath})`,
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        height: "auto",
      }}
    >
      <Header />
      <Box sx={container}>
        <Box sx={gameContainer}>
          <TimerBomb timeLimit={timeLimit} />
          {gameComps[index]}
        </Box>
      </Box>
    </Box>
  );
}
