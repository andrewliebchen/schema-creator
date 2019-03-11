import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import Button from "./Button";
import Card from "./Card";
import store from "./store";
import { view } from "react-easy-state";
import { components } from "./data";
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
