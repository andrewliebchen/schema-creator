import { Box, Flex, Text } from "rebass";
import { Check, ArrowRight, File, Folder, Book } from "react-feather";
import { schemaTypes, categories, helpers } from "./data";
import { SlideIn } from "./Animation";
import { Absolute, Relative } from "./StyleHelpers";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import Card from "./Card";
import React from "react";
import remove from "lodash.remove";
import sample from "lodash.sample";
import simpleId from "simple-id";
import store from "./store";

const TypeSelector = props => (
  <Relative>
    <SlideIn in={store.selectedCategory ? false : true} timeout={200}>
      <Absolute>
        <Card
          hover
          mb={1}
          onClick={() => (store.selectedCategory = "helpers")}
          id="schemaHelperSelector"
        >
          <Flex justifyContent="space-between" alignItems="center" p={3}>
            <Flex alignItems="center">
              <Folder size={18} />
              <Text ml={1}>Helpers</Text>
            </Flex>
            <ArrowRight size={18} />
          </Flex>
        </Card>
        {categories.map(category => (
          <Card
            hover
            key={category}
            mb={1}
            onClick={() => (store.selectedCategory = category)}
            id="schemaCategorySelector"
          >
            <Flex justifyContent="space-between" alignItems="center" p={3}>
              <Flex alignItems="center">
                <Folder size={18} />
                <Text ml={1}>{capitalize(category)}</Text>
              </Flex>
              <ArrowRight size={18} />
            </Flex>
          </Card>
        ))}
        <Box mt={2}>
          <Button
            id="randomSchemaElementButton"
            onClick={() =>
              store.elements.push({ ...sample(schemaTypes), id: simpleId() })
            }
          >
            I'm feeling lucky
          </Button>
        </Box>
      </Absolute>
    </SlideIn>
    <SlideIn in={store.selectedCategory ? true : false} timeout={200}>
      <Absolute>
        {store.selectedCategory === "helpers"
          ? helpers.map(helper => (
              <Card
                hover
                key={helper.stub}
                mb={1}
                id="helperElementToggleSelect"
                onClick={() => {
                  helper.elements.map(element => {
                    store.elements.push({ ...element, id: simpleId() });
                  });
                }}
              >
                <Flex justifyContent="space-between" alignItems="center" p={3}>
                  <Flex alignItems="center">
                    <Book size={18} color="black" />
                    <Text ml={1} fontWeight="normal" color="black">
                      {helper.label}
                    </Text>
                  </Flex>
                </Flex>
              </Card>
            ))
          : schemaTypes
              .filter(schema => schema.category === store.selectedCategory)
              .map(schema => {
                const isIncluded = store.elements.find(
                  element => element.stub === schema.stub
                );
                return (
                  <Card
                    hover
                    key={schema.stub}
                    mb={1}
                    selected={isIncluded}
                    id="schemaElementToggleSelect"
                    title={isIncluded && "Added to schema"}
                    onClick={() => {
                      if (isIncluded) {
                        remove(store.elements, { id: isIncluded.id });
                      } else {
                        store.elements.push({ ...schema, id: simpleId() });
                      }
                    }}
                  >
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      p={3}
                    >
                      <Flex alignItems="center">
                        <File
                          size={18}
                          color={isIncluded ? "white" : "black"}
                        />
                        <Text
                          ml={1}
                          fontWeight={isIncluded ? "bold" : "normal"}
                          color={isIncluded ? "white" : "black"}
                        >
                          {schema.label}
                        </Text>
                      </Flex>
                      {isIncluded && <Check size={18} color="white" />}
                    </Flex>
                  </Card>
                );
              })}
      </Absolute>
    </SlideIn>
  </Relative>
);

export default view(TypeSelector);
