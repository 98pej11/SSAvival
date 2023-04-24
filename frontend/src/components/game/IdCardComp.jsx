import React from "react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useDrag } from "react-use-gesture";
// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";

import idCard from "../../assets/idCard.png";
// import online from "../../assets/online.png";

import Draggable from "react-draggable";
// import { useDrag } from "react-use-gesture";

export default function Emoji() {
  // 카드 위치 좌표
  const [position, setPosition] = useState({ x: 0, y: -300 }); // box의 포지션 값

  const cardPos = useSpring({ x: 0, y: 0 });

  // 드래그
  const bindCardPos = useDrag((params) => {
    console.log(params.offset[0], params.offset[1]);
    cardPos.x.set(params.offset[0]);
    cardPos.y.set(params.offset[1]);
  });

  // 카드 드래그할 때 투명도
  const [Opacity, setOpacity] = useState(false);
  // 카드 태그할 때 바뀌는 카드 리더기
  const [divColor, setDivColor] = useState("white");
  // 태그 성공 횟수
  const [score, setScore] = useState(0);
  // 카드 리더기 위치 좌표
  const targetPosition = { x: 626, y: -819 }; // Example target position
  // 카드 리더기에 찍히는 것 감지하는 범위
  const targetRange = 50; // Example target range

  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };

  // 카드 리더기에 도착하는 것 감지
  const trackPos = (data) => {
    const currentPosition = { x: data.x, y: data.y };
    setPosition(currentPosition);
    const distance = Math.sqrt(
      Math.pow(currentPosition.x - targetPosition.x, 2) +
        Math.pow(currentPosition.y - targetPosition.y, 2)
    );
    if (distance <= targetRange) {
      // 카드 찍기 성공, 점수 갱신!!!
      setScore(score + 1);
      console.log("Arrived at target location! score is", score);
      // 카드 찍기에 성공하면 카드 리더기 빛난 후
      divColor.style.backgroundColor = "red";
      divColor.style.transform = "roatate(45deg)";

      // 지연 효과
      setTimeout(() => {
        setPosition({
          x: Math.floor(Math.random() * 600),
          y: -300,
        });
      }, 150); // 이 코드를 실행하기 전에 3초 동안 기다립니다.

      console.log(position);
    } else {
      // 카드 리더기 밖이면 색 변화 x
      divColor.style.backgroundColor = "white";
      divColor.style.transform = "roatate(45deg)";
    }
  };

  return (
    <div>
      <div
        style={{
          width: 1000,
          height: 600,
          display: "flex",
          backgroundColor: "#D4F2FF",
          border: 1,
          borderColor: "",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "350px",
            height: "500px",
            backgroundColor: "gray",
            marginTop: "2%",
            marginLeft: "60%",
            justifyContent: "center",
          }}
        >
          <div
            ref={setDivColor}
            onDrag={(e, data) => trackPos(data)}
            style={{
              width: "70%",
              height: "70%",
              backgroundColor: divColor,
              marginTop: "5%",
            }}
          ></div>
        </div>
      </div>

      <animated.div
        {...bindCardPos()}
        onDrag={(e, data) => trackPos(data)}
        onStart={handleStart}
        onStop={handleEnd}
        // position={{ x: position.x, y: position.y }}
        style={{
          // position: "relative",
          // top: position.y,
          // left: position.x,
          x: cardPos.x,
          y: cardPos.y,
        }}
      >
        <img
          src={idCard}
          alt="idCard"
          style={{
            width: "300px",
            height: "250px",
          }}
        />
      </animated.div>

      <Draggable
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
      </Draggable>
    </div>
  );
}

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));
