import * as React from "react";
import TimerBomb from "./TimerBomb";
export default function GameComp(props) {
  const { children } = props;
  return (
    <div
      style={{
        display: "inline-block",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "60%",
        height: "650px",
      }}
    >
      {/* 타이머 시간을 초로 집어넣으면 됩니다. */}
      <TimerBomb timeLimit={10} />
      {children}
    </div>
  );
}
