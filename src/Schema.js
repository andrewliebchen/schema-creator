import { ArrowLeft } from "react-feather";
import { Heading, Flex } from "rebass";
import { SlideIn } from "./Animation";
import { Relative, Absolute, Sticky, Pointer } from "./StyleHelpers";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import React, { useState } from "react";
import SchemaElement from "./SchemaElement";
import store from "./store";
import TypeSelector from "./TypeSelector";

// TODO: Rename <Elements />?

const Schema = props => {
  const [editing, setEditing] = useState(false);

  return (
    <Sticky p={3}>
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        {store.selectedCategory ? (
          <Flex alignItems="center">
            <Pointer
              onClick={() => (store.selectedCategory = false)}
              id="goBackSchemaCategory"
              title="Go back"
            >
              <ArrowLeft />
            </Pointer>
            <Heading ml={2}>{capitalize(store.selectedCategory)}</Heading>
          </Flex>
        ) : (
          <Flex alignItems="center">
            <Heading mr={2}>Schema</Heading>
          </Flex>
        )}
        <Button
          id="schemaEditToggle"
          onClick={() => {
            setEditing(!editing);
            store.selectedCategory = false;
          }}
        >
          {editing ? "Done" : "Edit"}
        </Button>
      </Flex>
      <Relative>
        <SlideIn in={!editing} timeout={200}>
          <Absolute>
            {store.elements.map(element => (
              <SchemaElement key={element.id} {...element} />
            ))}
          </Absolute>
        </SlideIn>
        <SlideIn in={editing} timeout={200}>
          <Absolute>
            <TypeSelector />
          </Absolute>
        </SlideIn>
      </Relative>
    </Sticky>
  );
};

export default view(Schema);
