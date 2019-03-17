import _ from "lodash";
import { Box, Flex, Heading } from "rebass";
import { genSample } from "./utils";
import { view } from "react-easy-state";
import CountControl from "./CountControl";
import PreviewElement from "./PreviewElement";
import React from "react";
import store from "./store";

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
