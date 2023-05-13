import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
import reader from "../../assets/reader.png";
import idCard from "../../assets/IDcard.svg";
import back from "../../assets/card_back.png";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import { useDrag } from "react-use-gesture";

export default function IdCard() {
  // 카드 위치 좌표
  // const [position, setPosition] = useState({ x: 0, y: -300 }); // box의 포지션 값

  // const cardPos = useSpring({ x: Math.floor(Math.random() * 600), y: -250 });

  // 드래그
  // const bindCardPos = useDrag((params) => {
  //   console.log("나", params.offset[0], params.offset[1]);
  //   cardPos.x.set(params.offset[0]);
  //   cardPos.y.set(params.offset[1]);

  //   const currentPosition = { x: params.offset[0], y: params.offset[1] };
  //   const distance = Math.sqrt(
  //     Math.pow(currentPosition.x - targetPosition.x, 2) +
  //       Math.pow(currentPosition.y - targetPosition.y, 2)
  //   );
  //   if (distance <= targetRange) {
  //     // 카드 찍기 성공, 점수 갱신!!!
  //     setScore(score + 1);
  //     console.log("Arrived at target location! score is", score);
  //     // 카드 찍기에 성공하면 카드 리더기 빛난 후
  //     divColor.style.backgroundColor = "red";
  //     console.log("여기");
  //     var tempXpos = Math.floor(Math.random() * 600);
  //     cardPos.x.set(tempXpos);
  //     cardPos.y.set(-250);
  //     params.offset[0] = tempXpos;
  //     params.offset[1] = -250;
  //   } else {
  //     // 카드 리더기 밖이면 색 변화 x

  //     divColor.style.backgroundColor = "white";
  //   }
  // });

  // 카드 드래그할 때 투명도
  // const [Opacity, setOpacity] = useState(false);
  // 카드 태그할 때 바뀌는 카드 리더기
  // const [divColor, setDivColor] = useState("white");
  // 태그 성공 횟수
  // const [score, setScore] = useState(0);
  // 카드 리더기 위치 좌표
  // const targetPosition = { x: 800, y: -420 }; // Example target position
  // 카드 리더기에 찍히는 것 감지하는 범위
  // const targetRange = 80; // Example target range

  // 카드 찍고 일시적으로 사라지게 하기 => 몰루?!?!
  const [state, setState] = useState({
    items1: [
      { id: "item1", imageUrl: "idCard" },
      { id: "item2", imageUrl: "idCard" },
      { id: "item3", imageUrl: "idCard" },
      { id: "item4", imageUrl: "idCard" },
      { id: "item5", imageUrl: "idCard" },
      { id: "item6", imageUrl: "idCard" },
    ],
    items2: [],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state[source.droppableId],
        source.index,
        destination.index
      );

      setState({ ...state, [source.droppableId]: items });
    } else {
      const result = move(
        state[source.droppableId],
        state[destination.droppableId],
        source,
        destination
      );

      setState({
        ...state,
        [source.droppableId]: result[source.droppableId],
        [destination.droppableId]: result[destination.droppableId],
      });
    }
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  // const handleStart = () => {
  //   setOpacity(true);
  // };
  // const handleEnd = () => {
  //   setOpacity(false);
  // };

  // 이미지 이동 실험
  const [pos, setPos] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPos((pos) => pos + 10);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          userSelect: "none",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          backgroundImage: `url(${back})`,
        }}
      >
        {/* <img src={back} style={{ position: "relative", width: "100%" }} /> */}
        <Droppable droppableId="items1">
          {(provided) => (
            <Cards
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundColor: "pink",
                width: "90%",
                height: "200px",
                // transform: `translateX(${pos}px)`,
              }}
              // style={{ transform: `translateX(${pos}px)` }}
            >
              {state.items1.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => {
                    const imageStyle = {
                      backgroundImage: `url(${idCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      userSelect: "none",
                      // padding: 16,
                      margin: "0 0 8px 0",
                      width: "90%",
                      height: "100px",
                      ...provided.draggableProps.style,
                    };
                    return (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={
                          imageStyle

                          // ...provided.draggableProps.style,
                          // position: "relative",
                          // backgroundSize: "contain",
                          // backgroundRepeat: "no-repeat",
                          // width: "330px",
                          // height: "100px",
                          // backgroundImage: `url(${idCard})`,
                        }
                      >
                        {/* <img src={item.imageUrl} alt="item" /> */}
                      </Card>
                    );
                  }}
                </Draggable>
              ))}
              {provided.placeholder}
            </Cards>
          )}
        </Droppable>
        <Droppable droppableId="items2">
          {(provided, snapshot) => (
            <Reader
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                // backgroundColor: snapshot.isDraggingOver
                //   ? "lightblue"
                //   : "lightgrey",

                // padding: 4,
                backgroundImage: `url(${reader})`,
              }}
            >
              {state.items2.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: "330px",
                        height: "100px",
                        backgroundImage: `url(${idCard})`,
                      }}
                    >
                      {/* <img src={item.imageUrl} alt="item" /> */}
                    </div>
                  )}
                </Draggable>
              ))}
            </Reader>
          )}
        </Droppable>
      </div>
    </DragDropContext>

    // <div><img
    // src={idCard}
    // alt="moving"
    // // className="move"
    // style={{ transform: `translateX(${pos}px)`, width: "200px" }}
    // /></div>>
  );
}

const Cards = styled(`div`)({
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  // top: 0,
  marginTop: "30%",
  justifyContent: "space-around",
});

const Card = styled(`div`)({
  marginBottom: "10px",
  position: "relative",
  userSelect: "none",
  width: "150px",
  height: "100px",
});

const Reader = styled(`div`)({
  position: "relative",
  // display: "flex",
  // flexDirection: "row",
  width: "300px",
  marginTop: "15%",
  // top: 0,
  // marginTop: "30%",
  // justifyContent: "space-around",
});
