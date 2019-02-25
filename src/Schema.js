import { ArrowLeft } from "react-feather";
import { Heading, Flex } from "rebass";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import React from "react";
import SchemaElement from "./SchemaElement";
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
      store.elements.map(element => (
        <SchemaElement key={element.id} {...element} />
      ))
    )}
  </Root>
);

export default view(Schema);
