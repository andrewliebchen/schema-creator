import { Flex, Button } from "rebass";
import { view } from "react-easy-state";
import React from "react";
import store from "./store";
import styled from "styled-components";
import Key from "./Key";
import { Table, Column } from "knoll";

const components = {
  table: styled.table`
    border-spacing: 0;
  `,
  headerCell: styled.th`
    border-bottom: 1px solid black;
    padding: 8px;
  `,
  cell: styled.td`
    padding: 8px;
  `
};

const SampleTable = props => (
  <Flex width={1} flexDirection="column">
    <Table data={props.samples} components={components}>
      {store.elements.map(element => (
        <Column
          key={element.id}
          header={<Key small {...element} />}
          cell={row => row[`${element.category}.${element.stub}`]}
        />
      ))}
    </Table>
    <Flex p={1}>
      <Button width={1} bg="black" onClick={() => store.count + 10}>
        Add 10 more...
      </Button>
    </Flex>
  </Flex>
);

export default view(SampleTable);
