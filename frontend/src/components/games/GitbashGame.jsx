import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  IconButton,
  Stack,
  InputBase,
  Hidden,
} from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import gitbash_logo from "../../assets/game_gitbash/gitbash_logo.png";
import game from "../../assets/gamePage/game.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

export default function GitbashGame() {
  //게임이 마운트될 때 state 값에 변경
  const dispatch = useDispatch();
  const gameData = {
    title: "제한 시간 내 주어진 명령어를 모두 입력하라",
    timeLimit: 5,
    bgPath: game,
  };
  useEffect(() => {
    dispatch({ type: "SET_GAME", payload: gameData });
  }, []);

  // 순서대로 제시할 명령어 리스트
  const [order, setOrder] = useState(0);
  const [mileage, setMileage] = useState(0);

  const commandList = [
    "git clone https://lab.ssafy.com/Ssavival.git",
    "cd Ssavival",
    "git checkout -b feature/gitbash",
    "git add .",
    'git commit -m "FEAT : Idea Thinking"',
    "git push origin feature/gitbash",
  ];

  // folderName 변경
  let folderName = null;
  if (order >= 2) {
    folderName = "/Ssavival";
  }

  // branchName 변경
  let branchName = "master";
  if (order >= 3) {
    branchName = "feature/gitbash";
  }

  // 정답인 경우 마일리지 누적 + 아이콘 flip효과
  function onKeyPress(e) {
    if (e.key === "Enter") {
      if (e.target.value === commandList[order]) {
        console.log("정답^_^");
        setMileage(mileage + 100);
        setOrder(order + 1);
      } else {
        console.log("오답ㅠ_ㅠ");
      }
      e.target.value = null;
    }
  }

  useEffect(() => {
    const icon = document.querySelector(".mileage-icon");
    icon.classList.add("flip");
    setTimeout(() => {
      icon.classList.remove("flip");
    }, 5000);
  }, [mileage]);

  return (
    <div>
      {/* gitbash 창 구현 */}
      <Box
        sx={{
          backgroundColor: "#000000",
          borderRadius: "20px 20px 20px 20px",
          transform: "translate(50%, 70%)",
          width: "50%",
          height: "35%",
        }}
      >
        {/* 창의 상단 구현 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#DDDDDA",
            borderRadius: "20px 20px 0px 0px",
          }}
        >
          <Box
            style={{
              display: "flex",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <img
              src={gitbash_logo}
              alt="gitbash_logo"
              width="30px"
              height="30px"
              style={{
                margin: "10px",
              }}
            />
            <Typography
              fontSize="20px"
              align="left"
              variant="h6"
              component="h2"
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {" "}
              MINGW64:/c/Users/SSAFY/Desktop{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton fontSize="2vw" aria-label="minimize">
              <MinimizeIcon />
            </IconButton>
            <IconButton fontSize="2vw" aria-label="maximize">
              <CropSquareIcon />
            </IconButton>
            <IconButton fontSize="2vw" aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* 창의 하단 구현 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            paddingY: "20px",
            paddingLeft: "5px",
          }}
        >
          <Box sx={{ marginBottom: "20px" }}>
            <Typography color="white" fontSize="2.5vw" textAlign="center">
              {commandList[order]}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Typography whiteSpace={"nowrap"} fontSize="1.5vw" color="#00FF00">
              SSAFY@DESKTOP-DOGVPUB
            </Typography>
            <Typography whiteSpace={"nowrap"} fontSize="1.5vw" color="#FF00FF">
              MINGW64
            </Typography>
            <Typography
              whiteSpace={"nowrap"}
              sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
              fontSize="1.5vw"
              color="#FFFF00"
            >
              ~/Desktop{folderName}
            </Typography>
            <Typography whiteSpace={"nowrap"} fontSize="1.5vw" color="#00FFFF">
              ({branchName})
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Typography color="white" fontSize="2vw" textAlign="left">
              $
            </Typography>
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white", fontSize: "2vw" }}
              autoFocus={true}
              placeholder="명령문을 이곳에 입력하세요"
              inputProps={{ "aria-label": "input commands" }}
              onKeyPress={onKeyPress}
            />
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
            padding="20px"
          >
            <FontAwesomeIcon
              className="mileage-icon"
              icon={faCircleDollarToSlot}
              style={{ color: "#ffd91c", fontSize: "2.5vw" }}
            />
            <Typography color="white" fontSize="2.5vw" textAlign="center">
              {mileage}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}
