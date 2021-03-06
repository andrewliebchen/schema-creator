import { Box } from "rebass";
import { renameKeys } from "./utils";
import { view } from "react-easy-state";
import JSONPretty from "react-json-pretty";
import React from "react";
import store from "./store";
import theme from "./theme";

const codeTheme = {
  main: `
    background-color: ${theme.colors.black};
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
    <Box px={3} bg="black">
      <JSONPretty data={samplesWithUserLabels} theme={codeTheme} />
    </Box>
  );
};

export default view(SampleJson);
