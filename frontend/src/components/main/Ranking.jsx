import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Rank = styled.div`
  font-family: "neodgm";
  color: black;
  div {
    text-align: center;
  }
`;

const columns = [
  { field: "id", headerName: "", width: 30 },
  { field: "user", headerName: "", width: 130 },
  { field: "score", headerName: "", width: 100 },
  { field: "fight", headerName: "", width: 100 },
];

const rows = [
  { id: 1, user: "은동이", score: 35, fight: 2 },
  { id: 2, user: "리윤두", score: 42, fight: 3 },
  { id: 3, user: "김행균", score: 45, fight: 1 },
  { id: 4, user: "양용용", score: 16, fight: 1 },
  { id: 5, user: "서영둔", score: null, fight: 4 },
];

const Pag = styled.div`
  display: flex; /* 가로 정렬을 위해 flexbox 설정 */
  justify-content: center; /* 가운데 정렬 */
  // height:
`;

export default function Ranking() {
  return (
    <Rank>
      <div>주간 랭킹</div>
      <Box sx={{ width: "300px", height: "60% " }}>
        <Table sx={{ textAlign: "center" }}>
          <TableBody>
            {rows.map((item) => (
              <TableRow key={item.id}>
                <TableCell sx={{ padding: 0 }}>{item.id}</TableCell>
                <TableCell sx={{ height: "5px" }}>{item.user}</TableCell>
                <TableCell sx={{ height: "5px" }}>{item.score} M</TableCell>
                <TableCell sx={{ height: "5px" }}>{item.fight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pag>
          <Stack spacing={1}>
            <Pagination />
          </Stack>
        </Pag>
      </Box>
    </Rank>
  );
}
