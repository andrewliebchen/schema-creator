import { ArrowLeft } from "react-feather";
import { Heading, Flex } from "rebass";
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
    <Flex
      flexDirection="column"
      p={3}
      style={{ overflow: "scroll", height: "100vh" }}
    >
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
          <Heading>Schema</Heading>
        )}
        <Flex alignItems="center">
          <Help />
          <Button
            ml={2}
            id="schemaEditToggle"
            onClick={() => {
              setEditing(!editing);
              store.selectedCategory = false;
            }}
          >
            {editing ? "Done" : "Edit"}
          </Button>
        </Flex>
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
    </Flex>
  );
};

export default view(Schema);
