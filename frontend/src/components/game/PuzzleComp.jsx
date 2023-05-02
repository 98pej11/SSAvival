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
    setImages(CutImages("child_pepe.png"));
  }, []);

  const CutImages = (src) => {
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
    };
    return newImages;
  };
  console.log("나야아아아아아아아아아아아아아", images);
  //   setImages(CutImages("child_pepe.png"));

  return (
    <div>
      {/* 나야 */}
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt={`Image ${i}`}
          style={{
            width: "33%",
            height: "33%",
            objectFit: "cover",
            overflow: "hidden",
          }}
        />
      ))}
    </div>
  );
}
