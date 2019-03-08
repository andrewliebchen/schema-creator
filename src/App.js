import { Flex, Box } from "rebass";
import React from "react";
import Sample from "./Sample";
import Schema from "./Schema";
import Toast from "./Toast";

const App = props => (
  <Flex>
    <Box width={1 / 5}>
      <Schema />
    </Box>
    <Box width={2 / 5}>Structure</Box>
    <Box width={2 / 5}>Preview</Box>
    <Toast />
  </Flex>
);

export default App;
