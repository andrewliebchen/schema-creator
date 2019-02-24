import { Box } from "rebass";
import { Check, ArrowRight } from "react-feather";
import { schemaTypes, categories } from "./data";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import Card from "./Card";
import React from "react";
import remove from "lodash.remove";
import sample from "lodash.sample";
import simpleId from "simple-id";
import store from "./store";
import styled from "styled-components";

const Root = styled(Box)`
  position: sticky;
  top: 0;
`;

const TypeSelector = props => (
  <Root>
    {store.selectedCategory
      ? schemaTypes
          .filter(schema => schema.category === store.selectedCategory)
          .map(schema => {
            const isIncluded = store.elements.find(
              element => element.stub === schema.stub
            );
            return (
              <Card
                fontWeight={isIncluded ? "bold" : "normal"}
                hover
                icon={isIncluded && <Check size={18} color="white" />}
                key={schema.stub}
                mb={1}
                selected={isIncluded}
                text={schema.label}
                value={schema.stub}
                onClick={() => {
                  if (isIncluded) {
                    console.log(isIncluded.id);
                    remove(store.elements, { id: isIncluded.id });
                  } else {
                    store.elements.push({ ...schema, id: simpleId() });
                  }
                }}
              />
            );
          })
      : categories.map(category => (
          <Card
            hover
            icon={<ArrowRight size={18} />}
            key={category}
            mb={1}
            onClick={() => (store.selectedCategory = category)}
            text={capitalize(category)}
            value={category}
          />
        ))}
    <Box mt={2}>
      <Button
        onClick={() =>
          store.elements.push({ ...sample(schemaTypes), id: simpleId() })
        }
      >
        I'm feeling lucky
      </Button>
    </Box>
  </Root>
);

export default view(TypeSelector);
