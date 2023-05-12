import React, { useState, useEffect } from "react";
import Header from "../components/game/Header";
import "../index.css";
import Box from "@mui/material/node/Box";
import GitbashGame from "../components/game/GitbashGame";
import TypoGame from "../components/game/TypoGame";
import { store } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import TimerBomb from "../components/game/TimerBomb";
import TissueGame from "../components/game/TissueGame";
import ElevatorGame from "../components/game/ElevatorGame";
import RemindGame from "../components/game/RemindGame";
import EmojiComp from "../components/game/EmojiComp";
import LockerGame from "../components/game/LockerGame";
import AttendanceGame from "../components/game/AttendanceGame";

const container = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1%",
  height: "100vh",
};
const gameContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
  padding: 3,
  maxWidth: "70%", // 최대 너비 값 설정
  width: "100%",
  height: "72vh",
  overflow: "hidden",

  // // 게임 컴포넌트의 개별 배경이 있는 경우(ex_모니터)
  // backgroundImage: hasBg ? `url(${children.props.bg})` : undefined,
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
};

const gameContainer2 = {
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "wrap",
  border: "none", // 테두리 없애기
  borderRadius: 10,
  boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
  backgroundColor: "rgba(255, 255, 255, 0.7)", // 배경색 투명하게 만들기
  padding: 3,
  maxWidth: "40%", // 최대 너비 값 설정
  width: "100%",
  height: "72vh",
  overflow: "hidden",
  marginRight: 10, //
};

const Comp = {
  display: "flex",
  justifyContent: "center",
  gap: 10,
};

export default function GamePage() {
  const gameMode = useSelector((state) => state.gameMode);
  const dispatch = useDispatch();
  const minigameActive = useSelector(
    (state) => state.gameReducer.minigameActive
  );
  const round = useSelector((state) => state.gameReducer.round);
  const gameTitleData = useSelector((state) => state.gameReducer.gameTitleData);
  useEffect(() => {
    dispatch({ type: "SET_MINIGAME_START" });
  }, [dispatch]);

  // 렌더링 후 minigameActive 값이 false가 되면 3초만큼 기다린 후 setIndex를 바꾼 뒤 setTimerstart() 실행
  useEffect(() => {
    let timeoutId = null;

    if (!minigameActive && round < gameTitleData.length) {
      timeoutId = setTimeout(() => {
        dispatch({ type: "SET_MINIGAME_START" });
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, gameTitleData, round, minigameActive]);

  // 갈아끼울 게임 컴포넌트 리스트
  const gameComps = [
    <LockerGame key="LockerGame" />,
    <AttendanceGame key="AttendanceGame" />,
    <GitbashGame key="GitbashGame" />,
    <TypoGame key="TypoGame" />,
    <TissueGame key="TissueGame" />,
    <RemindGame key="RemindGame" />,
    <ElevatorGame key="ElevatorGame" />,
    <EmojiComp key="EmojiComp" />,
  ];

  // redux : timeLimit(게임 제한시간)이랑 bgPath(게임 배경) 구독
  // const timeLimit = useSelector((state) => state.gameReducer.timeLimit);
  const bgPath = useSelector((state) => state.gameReducer.bgPath);

  // 렌더링 후 timeLimit 값이 바뀔 때마다 timeLimit 초만큼 기다린 후 index 값 변경
  // if (timeLimit) {
  //   setTimeout(() => {
  //     setIndex(index + 1);
  //   }, timeLimit * 1000);
  // }
  // console.log(timeLimit);
  // console.log(timeLimit);

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
        {gameMode === "single" ? (
          <Box sx={gameContainer}>
            <TimerBomb />
            {gameComps[round - 1]}
          </Box>
        ) : (
          <Box sx={Comp}>
            <Box sx={gameContainer2}>
              <TimerBomb />
              {gameComps[round - 1]}
            </Box>
            <Box sx={gameContainer2}>
              <TimerBomb />
              {gameComps[round - 1]}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
