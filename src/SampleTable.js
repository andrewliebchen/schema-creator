import { Flex } from "rebass";
import { view } from "react-easy-state";
import Cell from "./Cell";
import React from "react";
import SampleRow from "./SampleRow";
import store from "./store";
import styled from "styled-components";
import Key from "./Key";
import { Table, Column } from "knoll";

const Header = styled(Flex)`
  border-bottom: 1px solid;
  position: sticky;
  top: 0;
  background-color: white;
`;

// Use https://www.npmjs.com/package/knoll for this?

const SampleTable = props => (
  <Flex width={1} flexDirection="column">
    <Table data={props.samples}>
      {store.elements.map(element => (
        <Column
          key={element.id}
          header={<Key small {...element} />}
          cell={row => row[`${element.category}.${element.stub}`]}
        />
      ))}
    </Table>
    {/* <Header width={1}>
      {store.elements.map((element, i) => (
        <Cell key={i}>
          <Key small {...element} />
        </Cell>
      ))}
    </Header>
    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
      {props.samples.map((sample, i) => (
        <SampleRow key={i} sample={sample} />
      ))}
    </div> */}
  </Flex>
);

export default view(SampleTable);
