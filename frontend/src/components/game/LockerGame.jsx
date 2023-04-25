import styled from "styled-components";
import { Box } from "@mui/material";
import paperPassword from "../../assets/paper_password.png";
import lockerBook from "../../assets/locker_book.png";
import happyPepe from "../../assets/happy_pepe.png";
import pepeSad from "../../assets/pepe_sad.png";
import React, { useState, useEffect } from "react";

export default function LockerGame(props) {
  const timeLimit = 5;
  const [lockerOpen, setLockerOpen] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(timeLimit * 100);
  const correctPassword = "1234";

  const handleNumButtonClick = (e) => {
    const { innerText } = e.target;
    setEnteredValue((prev) => {
      if (prev.length >= 3) {
        if (prev + innerText === correctPassword) {
          setLockerOpen(true);
        }
        return "";
      }
      return prev + innerText;
    });
  };

  useEffect(() => {
    let intervalId = null;
    if (timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const progress = 100 - timeLeft / timeLimit;

  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <img src={pepeSad} style={{ marginRight: "10px" }} />
        <Box
          style={{
            width: "100%",
            backgroundColor: "#007aff",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            style={{
              width: `${progress}%`,
              height: "10px",
              backgroundColor: "#eee",
            }}
          />
        </Box>
      </Box>
      <Box
        style={{
          width: "100%",
          height: "50px",
        }}
      />
      <LockerDoorContainer>
        <LockerDoor>
          {lockerOpen ? (
            <LockerInside>
              <BookInside src={lockerBook} alt="LockerBook" />
            </LockerInside>
          ) : (
            <>
              <EnteredPassword>{enteredValue}</EnteredPassword>
              <KeyPad>
                <NumButtonContainer>
                  <NumButton onClick={handleNumButtonClick}>1</NumButton>
                  <NumButton onClick={handleNumButtonClick}>2</NumButton>
                  <NumButton onClick={handleNumButtonClick}>3</NumButton>
                  <NumButton onClick={handleNumButtonClick}>4</NumButton>
                  <NumButton onClick={handleNumButtonClick}>5</NumButton>
                  <NumButton onClick={handleNumButtonClick}>6</NumButton>
                  <NumButton onClick={handleNumButtonClick}>7</NumButton>
                  <NumButton onClick={handleNumButtonClick}>8</NumButton>
                  <NumButton onClick={handleNumButtonClick}>9</NumButton>
                  <NumButton onClick={handleNumButtonClick}>*</NumButton>
                  <NumButton onClick={handleNumButtonClick}>0</NumButton>
                  <NumButton onClick={handleNumButtonClick}>#</NumButton>
                </NumButtonContainer>
                <OuterCircle />
                <InnerCircle />
              </KeyPad>
              <PasswordInfo src={paperPassword} alt="PasswordPaper" />
              <RequiredPassword>{correctPassword}</RequiredPassword>
            </>
          )}
        </LockerDoor>
      </LockerDoorContainer>
    </>
  );
}

const LockerDoorContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LockerDoor = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border: 2px solid #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LockerInside = styled.div`
  width: 450px;
  height: 450px;
  background-color: #cccccc;
  border: 1px solid #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BookInside = styled.img`
  width: 350px;
  height: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NumButtonContainer = styled.div`
  position: absolute;
  top: 12%;
  display: flex;
  flex-wrap: wrap;
  width: 93px;
`;

const EnteredPassword = styled(Box)`
  position: absolute;
  top: 24%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 30px;
  font-weight: bold;
  font-size: 2rem;
`;

const KeyPad = styled.div`
  position: absolute;
  top: 55%;
  left: 16%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 240px;
  background-color: black;
  border-left: 5px solid gray;
  border-right: 5px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NumButton = styled(Box)`
  width: 25px;
  height: 18px;
  border: 1px solid #555555;
  background-color: #cccccc;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin: 2px;

  &:active {
    background-color: #87ceeb;
  }
`;

const OuterCircle = styled.div`
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border: 5px solid gray;
  border-radius: 50%;
`;

const InnerCircle = styled.div`
  position: absolute;
  top: 78%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;

const PasswordInfo = styled.img`
  position: absolute;
  top: 55%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 180px;
`;

const RequiredPassword = styled(Box)`
  position: absolute;
  top: 55%;
  left: 62%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 30px;
  font-weight: bold;
  font-size: 2.5rem;
`;
