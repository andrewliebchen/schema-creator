import React from "react";
import { Flex, Box, Text, Heading, Button } from "rebass";
import { view } from "react-easy-state";
import store from "./store";
import TypeSelector from "./TypeSelector";
import faker from "faker";

const App = props => (
  <Flex>
    <Box>
      <Heading>Schema</Heading>
      {store.elements.map((element, i) => (
        <Box key={i}>
          <Text>{element}</Text>
        </Box>
      ))}
      <TypeSelector />
    </Box>
    <Box>
      <Heading>Sample</Heading>
      {store.elements.map((element, i) => {
        const types = element.split(".");
        return (
          <Box key={i}>
            <Text>{faker[types[0]][types[1]]()}</Text>
          </Box>
        );
      })}
    </Box>
  </Flex>
);

export default view(App);
