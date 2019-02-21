import { Box, Text, Flex } from "rebass";
import { Check } from "react-feather";
import { schemaTypes, categories } from "./data";
import { view } from "react-easy-state";
import capitalize from "lodash.capitalize";
import Card from "./Card";
import React from "react";
import remove from "lodash.remove";
import simpleId from "simple-id";
import store from "./store";
import styled from "styled-components";

const Heading = styled(Flex)`
  position: sticky;
  top: 0;
  border-bottom: 1px solid;
  background-color: white;
`;

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
                onClick={() => {
                  if (isIncluded) {
                    console.log(isIncluded.id);
                    remove(store.elements, { id: isIncluded.id });
                  } else {
                    store.elements.push({ ...schema, id: simpleId() });
                  }
                }}
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
