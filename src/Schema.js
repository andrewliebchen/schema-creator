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
      store.elements.map((element, i) => {
        const schema = Object.values(schemaTypes)
          .flat()
          .find(schema => schema.stub === element);
        return (
          <Card
            key={i}
            text={
              <Flex alignItems="center">
                <Text mr={1}>{capitalize(element.split(".")[0])}</Text>
                <ChevronRight size={18} />
                <Text ml={1} fontWeight="bold">
                  {schema.label}
                </Text>
              </Flex>
            }
            value={schema.stub}
            mb={1}
            icon={
              <Trash
                data-tip="Remove"
                onClick={() => store.elements.splice(i, 1)}
                size={18}
              />
            }
          />
        );
      })
    )}
  </Flex>
);

export default view(Schema);
