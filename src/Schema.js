import { Heading, Flex, Button } from "rebass";
import { ArrowLeft } from "react-feather";
import capitalize from "lodash.capitalize";
import { view } from "react-easy-state";
import Card from "./Card";
import Key from "./Key";
import React from "react";
import store from "./store";
import TypeSelector from "./TypeSelector";

const Schema = props => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between" alignItems="center" mb={2}>
      {store.selectedCategory ? (
        <Flex alignItems="center">
          <ArrowLeft
            onClick={() => (store.selectedCategory = false)}
            style={{ cursor: "pointer" }}
          />
          <Heading ml={2}>{capitalize(store.selectedCategory)}</Heading>
        </Flex>
      ) : (
        <Heading>Schema</Heading>
      )}
      <Button
        bg="black"
        onClick={() => (store.editingSchema = !store.editingSchema)}
      >
        {store.editingSchema ? "Done" : "Edit"}
      </Button>
    </Flex>
    {store.editingSchema ? (
      <TypeSelector />
    ) : (
      store.elements.map((element, i) => (
        <Card key={i} text={<Key {...element} />} value={element.stub} mb={1} />
      ))
    )}
  </Flex>
);

export default view(Schema);
