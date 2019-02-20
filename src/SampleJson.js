import React from "react";
import { Box } from "rebass";
import JSONPretty from "react-json-pretty";

const theme = {
  main: `
    background-color: black;
    overflow: auto;
    line-height: 1.6;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    `,
  key: `
    color: rgba(255, 255, 255, 0.7);
  `,
  string: `
    color: white;
    font-weight: bold;
  `
};

const SampleJson = props => (
  <Box p={3} bg="black">
    <JSONPretty data={props.samples} theme={theme} />
  </Box>
);

export default SampleJson;
