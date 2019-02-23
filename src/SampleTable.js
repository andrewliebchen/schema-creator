import { Flex, Button, Text } from "rebass";
import { Table, Column } from "knoll";
import { view } from "react-easy-state";
import Key from "./Key";
import React from "react";
import store from "./store";

const components = {
  table: props => <table style={{ borderSpacing: 0 }} {...props} />,
  headerCell: props => (
    <th style={{ borderBottom: "1px solid black", padding: 8 }} {...props} />
  ),
  cell: props => (
    <td
      style={{
        padding: 8,
        maxWidth: 200,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}
      {...props}
    />
  )
};

const SampleTable = props => (
  <Flex width={1} flexDirection="column">
    <Table data={props.samples} components={components}>
      {store.elements.map(element => (
        <Column
          key={element.id}
          header={<Key small {...element} />}
          cell={row => (
            <Text>{row[`${element.category}.${element.stub}`]}</Text>
          )}
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
