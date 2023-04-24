import React from "react";
import styled from "styled-components";
import StopWatch from "../components/StopWatch";

function IpPage() {
  return (
    <Wrapper>
      <Nav>
        <span>인터넷 프로토콜 버전 4(TCP/IPv4) 속성</span>
        <span>X</span>
      </Nav>
      <div></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Nav = styled.div`
  width: 100%;
  height: 60px;
`;

export default IpPage;
