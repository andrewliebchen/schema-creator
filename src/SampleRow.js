import { Text, Flex } from "rebass";
import Cell from "./Cell";
import React from "react";

const SampleRow = props => (
  <Flex width={1}>
    {Object.values(props.sample).map((element, i) => (
      <Cell key={i}>
        <Text>{element}</Text>
      </Cell>
    ))}
  </Flex>
);

export default SampleRow;
