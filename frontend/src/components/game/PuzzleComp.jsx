import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useSpring, animated, Any } from "react-spring";
import { StyledEngineProvider, styled } from "@mui/material/styles";
import pepe_sad from "../../assets/pepe_sad.png";
import pepe_finding from "../../assets/pepe_finding.svg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Puzzle() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      console.log("나 이미지 변경됐어");
      const newImages = await CutImages("child_pepe.png");
      console.log("나 유즈이펙트 안의 이미지야", newImages);
      setImages(newImages);
    };
    if (images.length === 0) {
      fetchImages();
    }
  }, [images]);

  const CutImages = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      const newImages = [];
      img.onload = () => {
        console.log("onload 함수에 들어왔습니다?");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        // 이미지 채워넣기
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            const x = (j * img.width) / 3;
            const y = (i * img.height) / 3;
            const width = img.width / 3;
            const height = img.height / 3;
            const data = ctx.getImageData(x, y, width, height);
            const canvas2 = document.createElement("canvas");
            canvas2.width = width;
            canvas2.height = height;
            const ctx2 = canvas2.getContext("2d");
            ctx2.putImageData(data, 0, 0);
            const image = canvas2.toDataURL();
            newImages.push(image);
          }
        }
        resolve(newImages);
      };
    });
  };

  const [state, setState] = useState({
    items1: [
      { id: "item-1", content: "Item 1", imgUrl: images[0] },
      { id: "item-2", content: "Item 2", imgUrl: images[1] },
      { id: "item-3", content: "Item 3", imgUrl: images[2] },
    ],
    items2: [
      { id: "item-4", content: "Item 4", imgUrl: images[3] },
      { id: "item-5", content: "Item 5", imgUrl: images[4] },
      { id: "item-6", content: "Item 6", imgUrl: images[5] },
    ],
    items3: [
      { id: "item-7", content: "Item 7", imgUrl: images[6] },
      { id: "item-8", content: "Item 8", imgUrl: images[7] },
      { id: "item-9", content: "Item 9", imgUrl: images[8] },
    ],
    items4: [],
    items5: [],
    items6: [],
    items7: [],
    items8: [],
    items9: [],
    items10: [],
    items11: [],
    items12: [],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 드래그앤드롭이 시작된 droppable과 끝난 droppable이 다른 경우
    if (!destination) {
      return;
    }

    // 같은 droppable 내에서 요소를 이동하는 경우
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state[source.droppableId],
        source.index,
        destination.index
      );

      setState({
        ...state,
        [source.droppableId]: items,
      });
    } else {
      // 다른 droppable로 요소를 이동하는 경우
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <QuizSide>
          <Droppable droppableId="items1">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "250px",
                  height: "60px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {state.items1.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="items2">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "250px",
                  height: "60px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {state.items2.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="items3">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
                  padding: 4,
                  width: "250px",
                  height: "60px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {state.items3.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </QuizSide>

        <AnswerSide>
          <div
            style={{ display: "flex", flexDirection: "row", width: "500px" }}
          >
            <EachAnswer>
              <Droppable droppableId="items4">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items4.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items5">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items5.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items6">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items6.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", width: "500px" }}
          >
            <EachAnswer>
              <Droppable droppableId="items7">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items7.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items8">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items8.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items9">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items9.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </div>

          <div
            style={{ display: "flex", flexDirection: "row", width: "500px" }}
          >
            <EachAnswer>
              <Droppable droppableId="items10">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items10.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items11">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items11.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>

            <EachAnswer>
              <Droppable droppableId="items12">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver
                        ? "blue"
                        : "grey",
                      padding: 4,
                      width: 250,
                      height: 60,
                    }}
                  >
                    {state.items12.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={{
                              userSelect: "none",
                              padding: 5,
                              height: "50px",
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style,
                            }}
                          >
                            {item.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </EachAnswer>
          </div>
        </AnswerSide>
      </div>
    </DragDropContext>
  );
}
const QuizSide = styled(`div`)({
  display: "flex",
  width: "500px",
  height: "250px",
  flexDirection: "column",
  justifyContent: "space-evenly",
  backgroundColor: "skyblue",
  flex: "2",
});
const AnswerSide = styled(`div`)({
  display: "flex",
  flexDirection: "column",
  width: "500px",
  justifyContent: "space-evenly",
  backgroundColor: "pink",
  flex: "2",
});

const EachAnswer = styled(`div`)({
  width: "80px",
  height: "80px",
  backgroundColor: "lightCoral",
  marginBottom: "5px",
  flex: "2",
});
