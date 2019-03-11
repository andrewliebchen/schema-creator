import React from "react";
import { Box, Flex, Heading } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import Button from "./Button";
import PreviewElement from "./PreviewElement";

const Preview = props => (
  <Box p={3}>
    <Flex mb={3} justifyContent="space-between">
      <Heading>Preview</Heading>
      <Button>Add</Button>
    </Flex>
    {store.elements.map(element => (
      <PreviewElement key={element.id} id={element.id} />
    ))}
  </Box>
);

export default view(Preview);
