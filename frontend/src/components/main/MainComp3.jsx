import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CampusChart from "./CampusChart";
import Ranking from "./Ranking";

const Comp3 = styled.div`
  // font-family: "neodgm";
  width: "100%";
`;

const ChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 40px;
`;

export default function MainComp3() {
  return (
    <Comp3>
      <Box
        sx={{
          width: "100%",
          height: "45vh",
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: 12,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ChartWrapper>
          <CampusChart />
          <Ranking />
        </ChartWrapper>
      </Box>
    </Comp3>
  );
}
