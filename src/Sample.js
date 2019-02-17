import React from "react";
import { Box, Heading, Text, Flex, Button } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import SampleRow from "./SampleRow";
import CountControl from "./CountControl";
import { getSamples } from "./utils";
import CsvDownloader from "react-csv-downloader";
import datef from "datef";

const Sample = props => {
  const samples = getSamples(store.count, store.elements);
  return (
    <Box>
      <Flex>
        <Heading>Sample</Heading>
        <CountControl />
        <CsvDownloader
          datas={samples}
          filename={`Sample ${datef("MM-dd-YY h:mm:ss", new Date())}`}
        >
          <Button>CSV</Button>
        </CsvDownloader>
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
