import React from "react";
import styled from "styled-components";
import Header from "../components/main/MainHeader";

const myProps = {
  title: "사물함 비밀번호 입력해보자",
  number: 3,
};

export default function MainPage() {
  return (
    <div>
      <Header props={myProps} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        {/* <GameComp props={myProps}>
          <LockerGame {...myProps} />
        </GameComp> */}
      </div>
    </div>
  );
}
