import { Box, Heading, Flex } from "rebass";
import { view } from "react-easy-state";
import Button from "./Button";
import React, { useState } from "react";
import store from "./store";
import StructureElement from "./StructureElement";
import remove from "lodash.remove";

const Structure = props => {
  const [selected, setSelected] = useState([]);
  return (
    <Box p={3}>
      <Flex mb={3} justifyContent="space-between">
        <Heading>Structure</Heading>
        <Button disabled={selected.length < 1}>Wrap with element</Button>
      </Flex>
      {store.structureElements.map(element => {
        const isIncluded = selected.includes(element.id);
        return (
          <StructureElement
            key={element.id}
            element={element}
            selected={isIncluded}
            onSelect={() => {
              if (isIncluded) {
                const newArray = remove(selected, element.id);
                setSelected(newArray);
              } else {
                setSelected([...selected, element.id]);
              }
            }}
          />
        );
      })}
    </Box>
  );
};

export default view(Structure);
