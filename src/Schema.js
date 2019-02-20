import { Heading, Flex, Button } from "rebass";
import { Trash } from "react-feather";
import { view } from "react-easy-state";
import Card from "./Card";
import React from "react";
import store from "./store";
import TypeSelector from "./TypeSelector";
import Key from "./Key";

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
          text={<Key {...element} />}
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
