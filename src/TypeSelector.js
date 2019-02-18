import { Box, Text, Flex } from "rebass";
import { Check } from "react-feather";
import { schemaTypes } from "./data";
import { view } from "react-easy-state";
import Card from "./Card";
import includes from "lodash.includes";
import React from "react";
import store from "./store";

const TypeSelector = props => (
  <Box>
    {Object.keys(schemaTypes).map(parent => (
      <Box key={parent} mb={3}>
        <Text fontWeight="bold" mb={2}>
          {parent}
        </Text>
        {schemaTypes[parent].map(type => {
          const value = `${parent}.${type}`;
          const isIncluded = includes(store.elements, value);
          return (
            <Card
              key={type}
              value={value}
              onClick={() => store.elements.push(value)}
              fontWeight={isIncluded ? "bold" : "normal"}
              text={type}
              icon={isIncluded && <Check size={18} />}
            />
          );
        })}
      </Box>
    ))}
  </Box>
);

export default view(TypeSelector);
