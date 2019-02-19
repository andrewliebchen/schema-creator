import { Box, Text, Flex } from "rebass";
import { Check } from "react-feather";
import { schemaTypes, categories } from "./data";
import { view } from "react-easy-state";
import Card from "./Card";
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

// // FIXME: Selected

const TypeSelector = props => (
  <Box>
    {categories.map(category => (
      <Box key={category} mb={3}>
        <Heading py={2} mb={2}>
          <Text fontWeight="bold">{capitalize(category)}</Text>
        </Heading>
        {schemaTypes
          .filter(schema => schema.category === category)
          .map(schema => {
            const isIncluded = store.elements.find(
              element => element.stub === schema.stub
            );
            return (
              <Card
                key={schema.stub}
                mb={1}
                value={schema.stub}
                onClick={() => store.elements.push(schema)}
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
