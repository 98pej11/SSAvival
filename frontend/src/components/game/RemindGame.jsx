import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function RemindGame() {
  const [inputs, setInputs] = useState("");
  const answer = useSelector((state) => state.gameReducer.remindAnswer);
  const wordList = useSelector((state) => state.gameReducer.remindWordList);

  const [currentWords, setCurrentWords] = useState([]);

  useEffect(() => {
    console.log(wordList);
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= wordList.length) {
        setCurrentWords((currentWords) => [
          ...currentWords,
          wordList[currentIndex],
        ]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 1500);

    return () => clearInterval(intervalId);
  }, [wordList]);

  const onChangeHandler = (event) => {
    event.preventDefault();
    setInputs(event.target.value);
  };

  const onKeyDownHandler = (event) => {
    if (event.code === "Enter") {
      if (answer === inputs) {
        console.log("정답", inputs);
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <input
        type="text"
        value={inputs}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => onKeyDownHandler(e)}
      ></input>
      {currentWords &&
        currentWords.map((word, index) => <div key={index}>{word}</div>)}
    </div>
  );
}

export default RemindGame;
