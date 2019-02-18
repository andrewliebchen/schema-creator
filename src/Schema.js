import { Heading, Flex, Button } from "rebass";
import { Trash } from "react-feather";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import React from "react";
import store from "./store";
import TypeSelector from "./TypeSelector";

const Schema = props => (
  <Flex flexDirection="column">
    <Flex justifyContent="space-between" alignItems="center" mb={2}>
      {store.editingSchema ? (
        <Input type="Search" placeholder="search" />
      ) : (
        <Heading>Schema</Heading>
      )}
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
      store.elements.map((element, i) => (
        <Card
          key={i}
          text={element}
          mb={1}
          icon={
            <Trash
              data-tip="Remove"
              onClick={() => store.elements.splice(i, 1)}
              size={18}
            />
          }
        />
      ))
    )}
  </Flex>
);

export default view(Schema);
