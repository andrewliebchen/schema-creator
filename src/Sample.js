import React from "react";
import { Box, Heading, Text, Flex } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import SampleRow from "./SampleRow";
import CountControl from "./CountControl";
import { getSamples } from "./utils";

const Sample = props => (
  <Box>
    <Flex>
      <Heading>Sample</Heading>
      <CountControl />
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
        {getSamples(store.count, store.elements).map((sample, i) => (
          <SampleRow key={i} sample={sample} />
        ))}
      </tbody>
    </table>
  </Box>
);

export default view(Sample);
