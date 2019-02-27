import { Box } from "rebass";
import JSONPretty from "react-json-pretty";
import React from "react";
import store from "./store";
import { view } from "react-easy-state";
import { renameKeys } from "./utils";

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

const SampleJson = props => {
  let keysMap = {};
  store.elements.map(element => {
    if (element.userLabel) {
      keysMap[`${element.category}.${element.stub}`] = element.userLabel;
    }
    return false;
  });
  const samplesWithUserLabels = props.samples.map(sample =>
    renameKeys(keysMap, sample)
  );
  return (
    <Box p={3} bg="black">
      <JSONPretty data={samplesWithUserLabels} theme={theme} />
    </Box>
  );
};

export default view(SampleJson);
