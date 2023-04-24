import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TissueGame from "../components/game/TissueGame";
import Header from "../components/game/Header";
import "../index.css";
import game from "../assets/game.png";

const Pages = styled.div`
  // background-image: url(${game});
  position: relative;
  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const myProps = {
  title: "휴지를 최대한 많이! 뽑아보쟈",
};

export default function TissuePage() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    flexDirection: "column",
  };
  const imageStyle = {
    position: "relative",
    width: "100%",
    height: "auto",
    maxWidth: "300px",
  };

  const image1Style = {
    top: "464px",
    position: "absolute",
    zIndex: -1,
  };

  const image2Style = {
    zIndex: 2,
    top: "",
    position: "absolute",
  };

  const image3Style = {
    position: "absolute",
    top: "592px",
    zIndex: -1,
  };

  const count = useSelector((state) => state.count);

  return (
    <Pages>
      <Header props={myProps} />

      <div className="App" style={containerStyle}>
        <p>count : {count}</p>
        <img
          src="고양이 휴지곽 뒷면.png"
          style={{ ...imageStyle, ...image1Style }}
        ></img>
        <TissueGame style={{ ...imageStyle, ...image2Style }}></TissueGame>
        <img
          src="고양이 휴지곽 앞면.png"
          style={{ ...imageStyle, ...image3Style }}
        ></img>
      </div>
    </Pages>
  );
}
