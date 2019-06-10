import { Box } from "rebass";
import { schemaTypes } from "./data";
import { view } from "react-easy-state";
import Key from "./Key";
import lowerCase from "lodash.lowercase";
import React from "react";
import remove from "lodash.remove";
import simpleId from "simple-id";
import store from "./store";
import TypeSelectorElement from "./TypeSelectorElement";

const TypeSelectorSearch = props => (
  <Box>
    {schemaTypes
      .filter(
        schema =>
          schema.category.includes(lowerCase(props.value)) ||
          schema.stub.includes(lowerCase(props.value))
      )
      .map((schema, i) => {
        const isIncluded = store.elements.find(
          element => element.stub === schema.stub
        );
        return (
          <TypeSelectorElement
            key={i}
            id="schemaElementToggleSelect"
            isIncluded={isIncluded ? true : false}
            type={schema.type}
            label={
              <Key
                key={i}
                selected={isIncluded ? true : false}
                query={props.value}
                {...schema}
              />
            }
            onClick={() => {
              if (isIncluded) {
                remove(store.elements, { id: isIncluded.id });
              } else {
                store.elements.push({
                  ...schema,
                  id: simpleId()
                });
              }
            }}
          />
        );
      })}
  </Box>
);

export default view(TypeSelectorSearch);
