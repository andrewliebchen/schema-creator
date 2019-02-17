import React from "react";
import { Flex, Box, Text, Heading } from "rebass";
import { view } from "react-easy-state";
import store from "./store";
import TypeSelector from "./TypeSelector";
import Sample from "./Sample";

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
    <Sample />
  </Flex>
);

export default view(App);
