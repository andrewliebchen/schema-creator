import { Box, Heading, Flex } from "rebass";
import { getSamples, sampleConverter } from "./utils";
import { view } from "react-easy-state";
import Button from "./Button";
import copy from "clipboard-copy";
import CountControl from "./CountControl";
import fileDownload from "js-file-download";
import React, { useState } from "react";
import SampleJson from "./SampleJson";
import SampleTable from "./SampleTable";
import store from "./store";
import styled from "styled-components";
import theme from "./theme";

const viewOptions = ["Table", "JSON"];

const Root = styled(Box)`
  min-height: 100vh;
`;

const Header = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  left: ${theme.widths.sidebar};
`;

const Sample = props => {
  const [currentView, setCurrentView] = useState(0);
  const samples = getSamples(store.count, store.elements);

  const primaryColor = currentView === 0 ? "black" : "white";
  const secondaryColor = currentView === 0 ? "white" : "black";

  return (
    <Root bg={secondaryColor}>
      <Header
        justifyContent="space-between"
        alignItems="center"
        p={3}
        bg="inherit"
      >
        <Heading color={primaryColor}>Sample</Heading>
        <Flex>
          <Flex alignItems="center" mr={2}>
            {viewOptions.map((view, i) => (
              <Button
                key={i}
                type={currentView === i ? primaryColor : secondaryColor}
                onClick={() => setCurrentView(i)}
                ml={2}
                id="toggleSampleView"
              >
                {view}
              </Button>
            ))}
          </Flex>
          <CountControl type={primaryColor} />
          <Button
            type={primaryColor}
            ml={3}
            id="copySampleButton"
            onClick={() => {
              const conversion = sampleConverter(samples, currentView);
              copy(conversion.raw);
              store.toast = { show: true, message: "Copied to clipboard" };
            }}
          >
            Copy
          </Button>
          <Button
            type={primaryColor}
            ml={2}
            id="exportSampleButton"
            onClick={() => {
              const conversion = sampleConverter(samples, currentView);
              fileDownload(conversion.raw, conversion.filename);
            }}
          >
            Export
          </Button>
        </Flex>
      </Header>
      <Box pt={5}>
        {currentView === 0 && <SampleTable samples={samples} />}
        {currentView === 1 && <SampleJson samples={samples} />}
      </Box>
    </Root>
  );
};

export default view(Sample);
