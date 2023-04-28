import React from "react";
import styled from "styled-components";

const Comp3 = styled.div`
  // font-family: "neodgm";
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 300px;
  background-color: #eee;
  padding: 20px;
`;

const Bar = styled.div`
  flex-grow: 1;
  background-color: #007bff;
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 10px;
`;

function BarChart({ data, columns }) {
  return (
    <ChartContainer>
      {data.map((value, index) => (
        <Bar key={index} style={{ height: `${value}%` }}>
          {value}%<div>{columns[index]}</div>
        </Bar>
      ))}
    </ChartContainer>
  );
}

export default function MainComp3() {
  const data = [10, 40, 20, 10, 20];
  const columns = ["서울", "대전", "부울경", "구미", "광주"];

  return (
    <Comp3>
      <BarChart data={data} columns={columns} />
    </Comp3>
  );
}
