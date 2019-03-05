import { ArrowLeft } from "react-feather";
import { Heading, Flex } from "rebass";
import { SlideIn } from "./Animation";
import { Relative, Absolute, Sticky, Pointer } from "./StyleHelpers";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import React from "react";
import SchemaElement from "./SchemaElement";
import store from "./store";
import TypeSelector from "./TypeSelector";
import Help from "./Help";

const Schema = props => (
  <Sticky p={3}>
    <Flex justifyContent="space-between" alignItems="center" mb={3}>
      {store.selectedCategory ? (
        <Flex alignItems="center">
          <Pointer onClick={() => (store.selectedCategory = false)}>
            <ArrowLeft />
          </Pointer>
          <Heading ml={2}>{capitalize(store.selectedCategory)}</Heading>
        </Flex>
      ) : (
        <Flex alignItems="center">
          <Heading mr={2}>Schema</Heading>
          <Help />
        </Flex>
      )}
      <Button
        id="schemaEditToggle"
        onClick={() => {
          store.editingSchema = !store.editingSchema;
          store.selectedCategory = false;
        }}
      >
        {store.editingSchema ? "Done" : "Edit"}
      </Button>
    </Flex>
    <Relative>
      <SlideIn in={!store.editingSchema} timeout={200}>
        <Absolute>
          {store.elements.map(element => (
            <SchemaElement key={element.id} {...element} />
          ))}
        </Absolute>
      </SlideIn>
      <SlideIn in={store.editingSchema} timeout={200}>
        <Absolute>
          <TypeSelector />
        </Absolute>
      </SlideIn>
    </Relative>
  </Sticky>
);

export default view(Schema);
