import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const Comp2 = styled.div`
  font-family: "neodgm";
`;
const Line = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  // padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: white;
`;
const Line2 = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  // padding-bottom: 30px;
  display: flex;
  gap: 20px;
  color: white;
`;
const Chips = styled.div`
  span {
    margin: 5px;
  }
  border-bottom: 1px;
`;
const Title = styled.div``;
const Content = styled.div`
  margin-right: 30px;
`;
const Data = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;
export default function MainComp2() {
  return (
    <Comp2>
      {" "}
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#3396F4",
          borderRadius: 12,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 2, marginTop: 30 }}>
          <Line>
            <Title>내 티어</Title>
            <Content>Silver</Content>
          </Line>
          <Line>
            <Title>마일리지</Title>
            <Content>3165 EXP</Content>
          </Line>
        </div>
        <div
          style={{
            borderRight: "1px solid white",
            marginTop: 20,
            marginBottom: 20,
          }}
        ></div>
        <div style={{ flex: 3, marginTop: 30 }}>
          <Line2>
            <Title>나의 전적</Title>
          </Line2>
          <Line2>
            <Box
              sx={{
                width: "120px",
                height: "120px",
                backgroundColor: "white",
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="primary" size={100}>
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >
                  {`${Math.round(80)}%`}
                </Typography>
              </CircularProgress>
            </Box>
            <div>
              <Chips>
                <Chip
                  label="대전 횟수"
                  color="success"
                  variant="filled"
                  sx={{ width: 100, height: 30 }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="승리"
                  color="success"
                  variant="filled"
                  sx={{ width: 100, height: 30 }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="무승부"
                  color="success"
                  variant="filled"
                  sx={{ width: 100, height: 30 }}
                />
                <span>244전</span>
              </Chips>
              <Chips>
                <Chip
                  label="패배"
                  color="success"
                  variant="filled"
                  sx={{ width: 100, height: 30 }}
                />
                <span>244전</span>
              </Chips>
            </div>
          </Line2>
        </div>
      </Box>
    </Comp2>
  );
}
