/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

const HeaderComp = styled.div`
  font-family: "neodgm", sans-serif;
`;

function Header(props) {
  return (
    <HeaderComp>
      <AppBar
        elevation={0}
        position="relative"
        // variant="outlined"
        style={{
          backgroundColor: "transparent",
          height: "120px",
          boxShadow: "none",
          marginBottom: "10px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              height: "120px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component={Link}
              to="/mainPage"
              sx={{
                display: "flex",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              점수에용
            </Box>
            <Box
              sx={{
                display: "flex",
                //   justifyContent: "center",
                //   alignItems: "center",
                color: "black",
                fontSize: "2.5rem",
              }}
            >
              <span>~ {props.props.title} ~</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                color: "black",
                fontSize: "1.2rem",
              }}
            >
              남은시간
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderComp>
  );
}
export default Header;
