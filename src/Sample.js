import { Box, Heading, Flex, Button } from "rebass";
import { getSamples } from "./utils";
import { view } from "react-easy-state";
import Card from "./Card";
import CountControl from "./CountControl";
import CsvDownloader from "react-csv-downloader";
import datef from "datef";
import React from "react";
import SampleTable from "./SampleTable";
import store from "./store";

const Sample = props => {
  const samples = getSamples(store.count, store.elements);
  return (
    <Box>
      <Flex width={1} justifyContent="space-between" alignItems="center" mb={2}>
        <Heading>Sample</Heading>
        <Flex>
          <CountControl />
          <CsvDownloader
            datas={samples}
            filename={`Sample ${datef("MM-dd-YY h:mm:ss", new Date())}`}
          >
            <Button bg="black" ml={2}>
              Export CSV
            </Button>
          </CsvDownloader>
        </Flex>
      </Flex>
      <Card>
        <SampleTable samples={samples} />
      </Card>
    </Box>
  );
};

export default view(Sample);
