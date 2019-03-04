import { Box, Heading, Flex } from "rebass";
import { getSamples, sampleConverter } from "./utils";
import { view } from "react-easy-state";
import Button from "./Button";
import Card from "./Card";
import copy from "clipboard-copy";
import CountControl from "./CountControl";
import fileDownload from "js-file-download";
import React from "react";
import SampleJson from "./SampleJson";
import SampleTable from "./SampleTable";
import store from "./store";

const viewOptions = ["Table", "JSON"];

const Sample = props => {
  const samples = getSamples(store.count, store.elements);
  return (
    <Box>
      <Flex width={1} justifyContent="space-between" alignItems="center" mb={3}>
        <Heading>Sample</Heading>
        <Flex>
          <Flex alignItems="center" mr={2}>
            {viewOptions.map(view => (
              <Button
                key={view}
                type={store.view === view ? "black" : "white"}
                onClick={() => (store.view = view)}
                ml={1}
              >
                {view}
              </Button>
            ))}
          </Flex>
          <CountControl />
          <Button
            type="black"
            ml={3}
            onClick={() => {
              const conversion = sampleConverter(samples, store.view);
              copy(conversion.raw);
              store.toast.show = true;
            }}
          >
            Copy
          </Button>
          <Button
            type="black"
            ml={1}
            onClick={() => {
              const conversion = sampleConverter(samples, store.view);
              fileDownload(conversion.raw, conversion.filename);
            }}
          >
            Export
          </Button>
        </Flex>
      </Flex>
      <Card>
        {store.view === viewOptions[0] && <SampleTable samples={samples} />}
        {store.view === viewOptions[1] && <SampleJson samples={samples} />}
      </Card>
    </Box>
  );
};

export default view(Sample);
