import React from "react";
import { Flex, Box, Text, Heading } from "rebass";
import { view } from "react-easy-state";
import store from "./store";
import Sample from "./Sample";
import Card from "./Card";
import Schema from "./Schema";
import ReactTooltip from "react-tooltip";

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

export default view(App);
