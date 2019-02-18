import { Box, Heading, Text, Flex, Button } from "rebass";
import { getSamples } from "./utils";
import { view } from "react-easy-state";
import CountControl from "./CountControl";
import CsvDownloader from "react-csv-downloader";
import datef from "datef";
import React from "react";
import SampleRow from "./SampleRow";
import store from "./store";

const Sample = props => {
  const samples = getSamples(store.count, store.elements);
  return (
    <Box>
      <Flex width={1} justifyContent="space-between" alignItems="center">
        <Heading>Sample</Heading>
        <Flex>
          <CountControl />
          <CsvDownloader
            datas={samples}
            filename={`Sample ${datef("MM-dd-YY h:mm:ss", new Date())}`}
          >
            <Button ml={2}>Export CSV</Button>
          </CsvDownloader>
        </Flex>
      </Flex>
      <table>
        <thead>
          <tr>
            {store.elements.map((element, i) => (
              <th key={i}>
                <Text>{element}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {samples.map((sample, i) => (
            <SampleRow key={i} sample={sample} />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default view(Sample);
