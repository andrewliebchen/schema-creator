import { Box, Heading, Flex } from "rebass";
import { view } from "react-easy-state";
import Button from "./Button";
import React from "react";
import store from "./store";
import StructureElement from "./StructureElement";

const Structure = props => (
  <Box p={3}>
    <Flex mb={3} justifyContent="space-between">
      <Heading>Structure</Heading>
      <Button>Add</Button>
    </Flex>
    {store.elements.map(element => (
      <StructureElement key={element.id} {...element} />
    ))}
  </Box>
);

export default view(Structure);
