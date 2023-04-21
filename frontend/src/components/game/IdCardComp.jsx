import React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import pepe from "../../assets/pepe.jpg";
import idCard from "../../assets/idCard.png";
// import online from "../../assets/online.png";
import mmtop from "../../assets/mmtop.png";
import MattermostEmoji from "./MattermostEmoji";

export default function Emoji() {
  return (
    <div
      style={{
        width: 1000,
        height: 600,
        display: "flex",
        backgroundColor: "#D4F2FF",
        border: 1,
        borderColor: "",
        // position: "relative",
      }}
    >
      <img
        src={idCard}
        alt="idCard"
        style={{
          width: "30%",
          height: "30%",
          marginTop: "30%",
        }}
      />
      <div
        style={{
          display: "flex",
          width: "40%",
          height: "70%",
          backgroundColor: "gray",
          marginTop: "2%",
          marginLeft: "45%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: "white",
            marginTop: "5%",
            // marginLeft: "60%",
          }}
        ></div>
      </div>
      {/* <Box
        sx={{
          margin: "0 auto",
          maxWidth: 1000,
          minHeight: 600,
          border: 1,
          borderColor: "gray",
          position: "relative",
        }}
      ></Box> */}
    </div>
  );
}

const FirstLine = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // justifyContent: "center",
});

const Reader = styled(Box)({
  display: "flex",
  alignItems: "center",
});
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
