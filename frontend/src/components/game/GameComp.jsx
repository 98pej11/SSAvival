import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TimerBar from "./TimerBar";
import { alpha } from "@mui/material/styles";

// const GameBox = styled.div`
//    display: inline-block,
//   justify-content: center,
//         align-items: center,
//         flex-wrap: wrap,
//         border: 1px solid gray,
//         border-radius: 10,
//         background-color: white,
//         padding: 5,
//         max-width: 60%, // 최대 너비 값 설정
//         width: 100%,
//         height: 80vh,
//         overflow: hidden,
// `;
export default function GameComp(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        // display: "inline-block",
        // justifyContent: "center",
        // alignItems: "center",
        flexWrap: "wrap",
        border: "none", // 테두리 없애기
        borderRadius: 10,
        boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
        backgroundColor: "rgba(255, 255, 255, 0.5)", // 배경색 투명하게 만들기
        padding: 5,
        maxWidth: "60%", // 최대 너비 값 설정
        width: "100%",
        height: "60vh",
        overflow: "hidden",
      }}
    >
      <TimerBar initialValue={80} decreaseValue={1} decreaseInterval={1000} />
      {children}
      {/* <Paper sx={{ marginBottom: 10}}></Paper> */}
    </Box>
  );
}
