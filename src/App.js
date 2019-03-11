import { Flex, Box } from "rebass";
import Dataset from "./Dataset";
import React from "react";
import Structure from "./Structure";
import Toast from "./Toast";
import Preview from "./Preview";

const App = props => (
  <Flex>
    <Box width={1 / 5}>
      <Dataset />
    </Box>
    <Box width={2 / 5}>
      <Structure />
    </Box>
    <Box width={2 / 5}>
      <Preview />
    </Box>
    <Toast />
  </Flex>
);

export default App;
