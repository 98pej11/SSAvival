import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { StyledEngineProvider, styled } from "@mui/material/styles";
import pepe from "../../assets/pepe_finding.svg";
import Badge from "@mui/material/Badge";
import { useDrag } from "react-use-gesture";
// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
import reader from "../../assets/reader.png";
import idCard from "../../assets/IDcard.svg";
import back from "../../assets/card_back.png";
// import online from "../../assets/online.png";

import Draggable from "react-draggable";
// import { useDrag } from "react-use-gesture";

export default function Emoji() {
  // 카드 위치 좌표
  // const [position, setPosition] = useState({ x: 0, y: -300 }); // box의 포지션 값

  const cardPos = useSpring({ x: Math.floor(Math.random() * 600), y: -250 });

  return (
    <div
      style={{
        userSelect: "none",
        width: "1200px",
        height: "600px",
        backgroundColor: "white",
        display: "flex",
        // justifyContent: "center",
      }}
    >
      {/* 줄 서 있는 페페들 */}
      <WaitingLine>
        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>

        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>

        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>

        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>

        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>

        <Draggable>
          <Wating
            src={pepe}
            alt="pepe_finding"
            style={{
              width: "80px",
            }}
          />
        </Draggable>
      </WaitingLine>{" "}
      <AllArea>
        <LeftSide>
          {/* 1분단 */}
          <First>
            <FirstSet>
              <FirstSetset>
                <Chair>의자</Chair>
                <Chair>의자</Chair>
              </FirstSetset>

              <NormalTable>테이블1</NormalTable>
              <FirstSetset>
                <Chair>의자</Chair>
                <Chair>의자</Chair>
              </FirstSetset>
            </FirstSet>

            <FirstSet>
              <FirstSetset>
                <Chair>의자</Chair>
                <Chair>의자</Chair>
              </FirstSetset>

              <NormalTable>테이블1</NormalTable>
              <FirstSetset>
                <Chair>의자</Chair>
                <Chair>의자</Chair>
              </FirstSetset>
            </FirstSet>
          </First>
          {/* 2분단 */}
          <Second>
            <SecondSet>
              <Chair>의자</Chair>
              <MiniTable>테이블3</MiniTable>
            </SecondSet>

            <SecondSet>
              <Chair>의자</Chair>
              <MiniTable>테이블3</MiniTable>
            </SecondSet>

            <SecondSet>
              <Chair>의자</Chair>
              <MiniTable>테이블3</MiniTable>
            </SecondSet>

            <SecondSet>
              <Chair>의자</Chair>
              <MiniTable>테이블3</MiniTable>
            </SecondSet>
          </Second>
        </LeftSide>
        <RightSide>
          {/* 3분단 */}
          <Third>난 세번째야</Third>
          {/* 4분단 */}
          <Fourth>
            <LongTable>테이블 6</LongTable>
          </Fourth>
        </RightSide>
      </AllArea>
      {/* <Draggable
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        position={{ x: position.x, y: position.y }}
      >
        <div
          // ref={nodeRef}
          className="box"
          style={{ opacity: Opacity ? "0.6" : "1" }}
        >
          <img
            src={idCard}
            alt="idCard"
            style={{
              width: "300px",
              height: "250px",
            }}
          />
          <div>
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </div>
      </Draggable> */}
    </div>
  );
}

const TestDiv = styled(`div`)({
  position: "relative",
  fontSize: "5rem",
  animation: "slide 3s ease-in-out",
  "@keyframes slide": {
    from: {
      left: "-650px",
    },
    to: {
      left: "500px",
    },
  },
});

const WaitingLine = styled(`div`)({
  marginBottom: "150px",
  //   animation: "none",
  display: "flex",
  flexDirection: "row",
  width: "850px",
  justifyContent: "space-around",
  //   paddingRight: "40%",
  // backgroundColor: "blue",
  position: "absolute",
  marginBottom: "100px",
});

const Wating = styled(`img`)({
  animation: "motion 0.3s linear 0s infinite alternate",
  marginTop: "0",
  marginBottom: "10px",
  position: "relative",
  //   left: "0",
  "@keyframes motion": {
    "0%": { marginTop: "0px" },
    "100%": { marginTop: "10px" },
  },
});

const AllArea = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  //   position: "absolute",
  width: "1200px",
  height: "500px",
  //   marginLeft: "60px",
  marginTop: "100px",
  //   backgroundColor: "red",
});

const LeftSide = styled(`div`)({
  display: "flex",
  width: "600px",
  flexDirection: "column",
  //   backgroundColor: "orange",
});

const RightSide = styled(`div`)({
  display: "flex",
  width: "600px",
  //   flex: "0.4",
  flexDirection: "row",
  backgroundColor: "green",
});

const First = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  //   backgroundColor: "skyblue",
  flex: "2",
});
const Second = styled(`div`)({
  // backgroundColor: "purple",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flex: "1",
});
const Third = styled(`div`)({
  backgroundColor: "pink",
  //   width: "50%",
  flex: "1.2",
});
const Fourth = styled(`div`)({
  backgroundColor: "brown",
  //   width: "50%",
  flex: "1",
});

const FirstSet = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
});

const FirstSetset = styled(`div`)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  // alignContent: "center",
});

const SecondSet = styled(`div`)({
  // backgroundColor: "yellow",
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
});

const Chair = styled(`div`)({
  width: "50px",
  height: "50px",
  backgroundColor: "black",
});

const NormalTable = styled(`div`)({
  backgroundColor: "gray",
  // marginTop: "100px",
  width: "250px",
  height: "120px",
});

const MiniTable = styled(`div`)({
  backgroundColor: "gray",
  width: "100px",
  height: "80px",
  // marginTop: "100px",
  bottom: "0",
});

const LongTable = styled(`div`)({
  backgroundColor: "gray",
  width: "80px",
  height: "500px",
  marginLeft: "0px",
  //   marginTop: "100px",
  bottom: "0",
});
