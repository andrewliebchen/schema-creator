import { ArrowLeft, Trash, File } from "react-feather";
import { Heading, Flex } from "rebass";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import Card from "./Card";
import Key from "./Key";
import React from "react";
import store from "./store";
import styled from "styled-components";
import TypeSelector from "./TypeSelector";

const Root = styled(Flex)`
  position: sticky;
  top: 0;
`;

const Schema = props => (
  <Root flexDirection="column" p={3}>
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
        onClick={() => {
          store.editingSchema = !store.editingSchema;
          store.selectedCategory = false;
        }}
      >
        {store.editingSchema ? "Done" : "Edit"}
      </Button>
    </Flex>
    {store.editingSchema ? (
      <TypeSelector />
    ) : (
      store.elements.map((element, i) => (
        <Card
          key={i}
          text={<Key {...element} />}
          value={element.stub}
          mb={1}
          icon={<File size={18} />}
          action={
            <Trash
              size={18}
              onClick={() =>
                store.elements.splice(
                  store.elements.findIndex(schema => schema.id === element.id),
                  1
                )
              }
            />
          }
        />
      ))
    )}
  </Root>
);

export default view(Schema);
