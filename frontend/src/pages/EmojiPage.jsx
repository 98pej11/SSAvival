import React from "react";
import styled from "styled-components";
import EmojiComp from "../components/game/EmojiComp";
import Header from "../components/game/Header";
import "../index.css";

const Pages = styled.div`
  position: relative;
`;

const myProps = {
  title: "MM에 알맞은 이모지를 붙여보자",
};

export default function EmojiPage() {
  return (
    <Pages>
      <Header props={myProps} />

      <EmojiComp />
    </Pages>
  );
}
