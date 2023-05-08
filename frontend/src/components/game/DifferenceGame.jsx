import React, { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import DifferenceTest from "../../assets/game_difference/DifferenceGameTest.jpg";
import WrongMarker from "../../assets/game_difference/Wrong.png";
import CorrectMarker from "../../assets/game_difference/Correct.png";

const DifferenceGame = () => {
  const maxDistance = 30 * 30; // 정답으로 인정할 최대 거리 간격, 가로세로 30px
  const [clickedWrong, setClickedWrong] = useState({ x: -1, y: -1 });
  const [lifeInfo, setLifeInfo] = useState(10);
  const [systemMessage, setSystemMessage] = useState("다른 곳을 찾아보세요!");
  const [preventDoubleClick, setPreventDoubleClick] = useState({
    x: -1,
    y: -1,
  });
  const [pointsCenter, setPointsCenter] = useState([
    [636, 123, 0],
    [729, 66, 0],
    [414, 263, 0],
    [453, 76, 0],
    [644, 332, 0],
    [593, 356, 0],
    [768, 157, 0],
  ]); // python 코드는 왼쪽 좌표가 기준이었던 것 같으므로, 주의! 수정 필요할 수 있음

  const handleBoxClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    if (
      (preventDoubleClick.x >= 0 && preventDoubleClick.x !== rect.left) ||
      lifeInfo <= 0
    ) {
      // 더블클릭이 인식됐거나 라이프가 다 떨어진 경우 클릭 이벤트 자체를 무시
      return;
    } else if (preventDoubleClick.x < 0) {
      // 더블클릭 인식을 위한 비교값이 아직 없으면 먼저 저장해 둠
      setPreventDoubleClick({ x: rect.left, y: rect.top });
    }
    let flag = false;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 일반적인 for문으로 사용하면 리 렌더링이 되지 않으므로, map 함수를 활용함
    const newPoints = pointsCenter.map((point) => {
      const x1 = point[0] - x;
      const y1 = point[1] - y;
      const x2 = point[0] - 400 - x;
      const y2 = point[1] - y;
      const d1 = x1 * x1 + y1 * y1; // 왼쪽 그림 기준 좌표 오차
      const d2 = x2 * x2 + y2 * y2; // 오른쪽 그림 기준 좌표 오차

      if ((d1 <= maxDistance || d2 <= maxDistance) && point[2] === 0) {
        flag = true;
        return [point[0], point[1], 1];
      }
      return point;
    });

    if (flag) {
      setClickedWrong({ x: -1, y: -1 }); // 정답을 찾은 경우 : 오답 마커 숨김
      setSystemMessage("매의 눈을 가지셨군요!");
    } else {
      if (lifeInfo <= 1) {
        setSystemMessage("게임 오버! 실패하셨습니다.");
      } else {
        setSystemMessage("아쉽게도 거기는 아닙니다.");
      }
      setClickedWrong({ x, y }); // 오답인 경우 : 오답 마커 표시
      setLifeInfo((prevLifeInfo) => prevLifeInfo - 1);
    }
    setPointsCenter(newPoints); // setState() 함수를 사용하지 않고 직접 수정하면, 마찬가지로 리 렌더링이 안 됨!
  };

  return (
    <>
      <Container>
        <ClickBox onClick={handleBoxClick}>
          {pointsCenter.map((point, index) =>
            point[2] === 1 ? (
              <CorrectImg
                key={index}
                src={CorrectMarker}
                alt="Happy Pepe"
                left={point[0] - 25}
                top={point[1] - 25}
              />
            ) : null
          )}
          {clickedWrong.x >= 0 ? (
            <WrongImg
              src={WrongMarker}
              alt="coin"
              left={clickedWrong.x - 25}
              top={clickedWrong.y - 25}
            />
          ) : null}
        </ClickBox>
      </Container>
      <Container>
        <LifeInfoBox>{`${systemMessage} / 남은 라이프 ${lifeInfo}개`}</LifeInfoBox>
      </Container>
    </>
  );
};

export default DifferenceGame;

const Container = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickBox = styled(Box)`
  width: 800px;
  height: 400px;
  border: 1px solid black;
  background-image: url(${DifferenceTest});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const LifeInfoBox = styled(Box)`
  width: 800px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: white;
`;

const WrongImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`;

const CorrectImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
`;
