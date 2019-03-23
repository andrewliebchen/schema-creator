import { ArrowLeft } from "react-feather";
import { Heading, Flex, Box } from "rebass";
import { Relative, Absolute, Pointer } from "./StyleHelpers";
import { SlideIn } from "./Animation";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import Help from "./Help";
import React, { useState } from "react";
import SchemaElement from "./SchemaElement";
import store from "./store";
import theme from "./theme";
import TypeSelector from "./TypeSelector";

const Schema = props => {
  const [editing, setEditing] = useState(false);

  return (
    <Box p={3}>
      <Flex justifyContent="space-between" alignItems="center" mb={3}>
        {store.selectedCategory ? (
          <Flex alignItems="center">
            <Pointer
              onClick={() => (store.selectedCategory = false)}
              id="goBackSchemaCategory"
              title="Go back"
            >
              <ArrowLeft color={theme.colors.black} />
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
    </Box>
  );
};

export default view(Schema);
