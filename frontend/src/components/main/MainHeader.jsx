/* eslint-disable no-console */
import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

function MainHeader() {
  return (
    <AppBar
      elevation={0}
      position="relative"
      variant="outlined"
      style={{
        backgroundColor: "transparent",
        height: "80px",
        boxShadow: "none",
        maxWidth: "412px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "80px",
            display: "flex",
            justifyContents: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* 프로필 사진 및 유저 정보 */}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
