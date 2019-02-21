import { Text, Flex } from "rebass";
import Cell from "./Cell";
import React from "react";
import styled from "styled-components";

const Truncate = styled(Text)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SampleRow = props => (
  <Flex width={1}>
    {Object.values(props.sample).map((element, i) => (
      <Cell key={i}>
        <Truncate>{element}</Truncate>
      </Cell>
    ))}
  </Flex>
);

export default SampleRow;
