import React from "react";
import { Box, Flex, Heading } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import Button from "./Button";
import PreviewElement from "./PreviewElement";
import CountControl from "./CountControl";
import _ from "lodash";
import { genSample } from "./utils";

const Preview = props => (
  <Box p={3}>
    <Flex mb={3} justifyContent="space-between">
      <Heading>Preview</Heading>
      <CountControl />
    </Flex>
    {store.elements.map(element => (
      <Box key={element.id}>
        <PreviewElement id={element.id} />
        {_.times(store.count - 1, i => (
          <PreviewElement key={i} id={element.id} sample={genSample(element)} />
        ))}
      </Box>
    ))}
  </Box>
);

export default view(Preview);
