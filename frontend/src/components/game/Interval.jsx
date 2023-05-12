import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export default function Interval() {
  const gameResult = useSelector((state) => state.gameReducer.score);

  //흐르는 텍스트 구현
  const flowing = keyframes`
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  `;
  const Flow = styled.div`
    animation: ${flowing} 2s ease-out infinite;
  `;

  if (gameResult) {
  }
  return (
    <Box>
      <Flow
        style={{
          position: "absolute",
          width: "10px",
          height: "200px",
          whiteSpace: "pre-line",
        }}
      >
        WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE
        WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE WIN LOSE
        WIN LOSE WIN LOSE WIN LOSE
      </Flow>

      {/* slot machine */}
      <Box
        style={{
          border: "5px solid black",
          backgroundColor: "black",
          transform: "transition(0,-10)",
          width: "40px",
          height: "200px",
        }}
      ></Box>
      <Box
        style={{
          border: "5px solid red",
          width: "40px",
          height: "30px",
        }}
      ></Box>
      <Box
        style={{
          border: "5px solid black",
          backgroundColor: "black",
          transform: "transition(0,-10)",
          width: "40px",
          height: "200px",
        }}
      ></Box>
    </Box>
  );
}
