import { Box, Text, Flex } from "rebass";
import { Check } from "react-feather";
import { schemaTypes } from "./data";
import { view } from "react-easy-state";
import Card from "./Card";
import includes from "lodash.includes";
import React from "react";
import store from "./store";
import styled from "styled-components";
import capitalize from "lodash.capitalize";

const Heading = styled(Flex)`
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  background-color: white;
`;

const TypeSelector = props => (
  <Box>
    {Object.keys(schemaTypes).map(parent => (
      <Box key={parent} mb={3}>
        <Heading py={2} mb={2}>
          <Text fontWeight="bold">{capitalize(parent)}</Text>
        </Heading>
        {schemaTypes[parent].map(schema => {
          const isIncluded = includes(store.elements, schema.stub);
          return (
            <Card
              key={schema.stub}
              mb={1}
              value={schema.stub}
              onClick={() => store.elements.push(schema.stub)}
              fontWeight={isIncluded ? "bold" : "normal"}
              text={schema.label}
              icon={isIncluded && <Check size={18} color="white" />}
              selected={isIncluded}
              hover
            />
          );
        })}
      </Box>
    ))}
  </Box>
);

export default view(TypeSelector);
