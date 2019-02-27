import { Box } from "rebass";
import JSONPretty from "react-json-pretty";
import React from "react";

const theme = {
  main: `
    background-color: black;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height: 1.6;
    overflow: auto;
    `,
  key: `
    color: rgba(255, 255, 255, 0.7);
  `,
  string: `
    color: white;
    font-weight: bold;
  `
};

// TODO: Use userLabel field for key

const SampleJson = props => (
  <Box p={3} bg="black">
    <JSONPretty data={props.samples} theme={theme} />
  </Box>
);

export default SampleJson;
