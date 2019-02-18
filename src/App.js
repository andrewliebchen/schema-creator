import { Flex, Box } from "rebass";
import React from "react";
import ReactTooltip from "react-tooltip";
import Sample from "./Sample";
import Schema from "./Schema";

const App = props => (
  <Flex>
    <Box width={400} p={3}>
      <Schema />
    </Box>
    <Box width={1} p={3}>
      <Sample />
    </Box>
    <ReactTooltip />
  </Flex>
);

export default App;
