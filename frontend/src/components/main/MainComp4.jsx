import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Comp4 = styled.div`
  // font-family: "neodgm";
`;

const Title = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  padding-bottom: 10px;
  font-family: "neodgm";
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`;
const Line = styled.div`
  font-size: 0.8rem;
`;
export default function MainComp4(props) {
  return (
    <Comp4>
      {" "}
      <Box
        sx={{
          width: "100%",
          height: "45vh",
          backgroundColor: "#F2F2F2",
          borderRadius: 12,
        }}
      >
        <Title>Quest / 전적</Title>
        {/* <CircularProgress variant="determinate" {...props} /> */}
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3%",
              fontSize: 12,
            }}
          >
            승리
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: "#EC2C54",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3%",
              fontSize: 12,
            }}
          >
            패배
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: "#8898A9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3%",
              fontSize: 12,
            }}
          >
            무승부
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
        <Row>
          <Box
            sx={{
              borderRadius: "50%",
              marginRight: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: "#3396F4",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "3%",
              fontSize: 12,
            }}
          >
            패배
          </Box>
          <Line>
            2023.04.02
            <br /> pepe vs 은정공쥬짱
          </Line>
        </Row>
      </Box>
    </Comp4>
  );
}
