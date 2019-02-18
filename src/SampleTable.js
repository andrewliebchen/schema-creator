import { Text, Flex } from "rebass";
import { view } from "react-easy-state";
import Cell from "./Cell";
import React from "react";
import SampleRow from "./SampleRow";
import store from "./store";
import styled from "styled-components";

const Header = styled(Flex)`
  border-bottom: 1px solid;
  position: sticky;
  top: 0;
  background-color: white;
`;

const SampleTable = props => (
  <Flex width={1} flexDirection="column">
    <Header>
      {store.elements.map((element, i) => (
        <Cell key={i}>
          <Text fontWeight="bold">{element}</Text>
        </Cell>
      ))}
    </Header>
    {props.samples.map((sample, i) => (
      <SampleRow key={i} sample={sample} />
    ))}
  </Flex>
);

export default view(SampleTable);
