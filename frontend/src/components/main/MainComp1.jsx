import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Comp1 = styled.div`
  font-family: "neodgm";
`;

const Title = styled.div`
  padding-left: 70px;
  padding-top: 70px;
  padding-bottom: 30px;
`;

const Buttons = styled.div`
  font-family: "neodgm";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export default function MainComp1() {
  return (
    <Comp1>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#FFE651",
          borderRadius: 12,
        }}
      >
        <Title>출석체크 & 현황</Title>
        <Buttons>
          <Box
            sx={{
              bgcolor: "white",
              width: "30%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            게임시작
          </Box>
          <Box
            sx={{
              bgcolor: "white",
              width: "30%",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            퇴실하기
          </Box>
        </Buttons>
      </Box>
    </Comp1>
  );
}
