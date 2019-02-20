import { Box, Heading, Flex, Button } from "rebass";
import { getSamples } from "./utils";
import { view } from "react-easy-state";
import Card from "./Card";
import CountControl from "./CountControl";
import React from "react";
import SampleJson from "./SampleJson";
import SampleTable from "./SampleTable";
import store from "./store";
import fileDownload from "js-file-download";
import json2csv from "json2csv";
import datef from "datef";

const viewOptions = ["Table", "JSON"];

const Sample = props => {
  const samples = getSamples(store.count, store.elements);
  return (
    <Box>
      <Flex width={1} justifyContent="space-between" alignItems="center" mb={2}>
        <Heading>Sample</Heading>
        <Flex>
          <Flex alignItems="center" mr={2}>
            {viewOptions.map(view => (
              <Button
                key={view}
                bg={store.view === view ? "black" : "white"}
                color={store.view === view ? "white" : "black"}
                onClick={() => (store.view = view)}
              >
                {view}
              </Button>
            ))}
          </Flex>
          <CountControl />
          <Button bg="black" ml={3}>
            Copy
          </Button>
          <Button
            bg="black"
            ml={1}
            onClick={() => {
              if (store.view === viewOptions[0]) {
                fileDownload(
                  json2csv.parse(samples),
                  `Sample ${datef("MM-dd-YY h:mm:ss", new Date())}.csv`
                );
              } else {
                fileDownload(
                  JSON.stringify(samples),
                  `Sample ${datef("MM-dd-YY h:mm:ss", new Date())}.json`
                );
              }
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
