import * as React from "react";
import Box from "@mui/material/Box";
import TimerBomb from "./TimerBomb";

export default function GameComp(props) {
  const { children } = props;
  const [recorder, setRecorder] = React.useState(null);

  const startRecording = () => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const element = document.getElementById("capture-area");

    const stream = canvas.captureStream();
    const chunks = [];

    const newRecorder = new MediaRecorder(stream);
    newRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
      console.log(chunks.length);
    };
    newRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "recorded.webm";
      a.click();
      window.URL.revokeObjectURL(url);
    };

    setRecorder(newRecorder);

    if (
      element &&
      (element instanceof HTMLCanvasElement ||
        element instanceof HTMLImageElement ||
        element instanceof HTMLVideoElement)
    ) {
      // 유효한 이미지 객체인지 확인
      ctx.drawImage(element, 0, 0, canvas.width, canvas.height);
    }
    newRecorder.start();
  };

  // 녹화 종료
  const stopRecording = () => {
    recorder.stop();
  };

  const hasBg = Boolean(children.props.bg);

  return (
    <Box
      id="capture-area" // 녹화할 요소의 id를 부여합니다.
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        border: "none",
        borderRadius: 10,
        boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: 3,
        maxWidth: "70%",
        width: "100%",
        height: "72vh",
        overflow: "hidden",
        backgroundImage: hasBg ? `url(${children.props.bg})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <TimerBomb timeLimit={10} />
      {children}
      <button onClick={startRecording}>녹화 시작</button>
      <button onClick={stopRecording}>녹화 종료</button>
    </Box>
  );
}
