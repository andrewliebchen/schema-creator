import { Flex, Box } from "rebass";
import React from "react";
import Dataset from "./Dataset";
import Toast from "./Toast";
import Structure from "./Structure";

const App = props => (
  <Flex>
    <Box width={1 / 5}>
      <Dataset />
    </Box>
    <Box width={2 / 5}>
      <Structure />
    </Box>
    <Box width={2 / 5}>Preview</Box>
    <Toast />
  </Flex>
);

export default App;
