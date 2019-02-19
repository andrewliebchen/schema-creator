import { Heading, Flex, Button, Box, Text } from "rebass";
import { Trash, ChevronRight } from "react-feather";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import React from "react";
import store from "./store";
import TypeSelector from "./TypeSelector";
import { schemaTypes } from "./data";
import capitalize from "lodash.capitalize";

const Schema = props => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between" alignItems="center" mb={2}>
      <Heading>Schema</Heading>
      <Button
        bg="black"
        onClick={() => (store.editingSchema = !store.editingSchema)}
      >
        {store.editingSchema ? "Done" : "Add"}
      </Button>
    </Flex>
    {store.editingSchema ? (
      <TypeSelector />
    ) : (
      store.elements.map(element => (
        <Card
          key={element.stub}
          text={
            <Flex alignItems="center">
              <Text mr={1}>{capitalize(element.category)}</Text>
              <ChevronRight size={18} />
              <Text ml={1} fontWeight="bold">
                {element.label}
              </Text>
            </Flex>
          }
          value={element.stub}
          mb={1}
          icon={
            <Trash
              data-tip="Remove"
              onClick={() => console.log("Fix this")}
              size={18}
            />
          }
        />
      ))
    )}
  </Flex>
);

export default view(Schema);
