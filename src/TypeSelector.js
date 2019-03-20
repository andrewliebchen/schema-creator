import { Absolute, Relative } from "./StyleHelpers";
import { Box } from "rebass";
import { File, Folder, Book } from "react-feather";
import { schemaTypes, categories, helpers } from "./data";
import { SlideIn } from "./Animation";
import { view } from "react-easy-state";
import Button from "./Button";
import capitalize from "lodash.capitalize";
import React, { useState } from "react";
import remove from "lodash.remove";
import sample from "lodash.sample";
import simpleId from "simple-id";
import store from "./store";
import SearchInput from "./SearchInput";
import Key from "./Key";
import TypeSelectorElement from "./TypeSelectorElement";
import lowerCase from "lodash.lowercase";

const TypeSelector = props => {
  const [search, setSearch] = useState("");

  return (
    <Relative>
      <Box mb={2}>
        <SearchInput
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </Box>
      {search.length > 2 ? (
        <Box>
          {schemaTypes
            .filter(schema => schema.stub.includes(lowerCase(search)))
            .map((schema, i) => {
              const isIncluded = store.elements.find(
                element => element.stub === schema.stub
              );
              return (
                <TypeSelectorElement
                  key={i}
                  icon={<File />}
                  id="schemaElementToggleSelect"
                  isIncluded={isIncluded}
                  label={
                    <Key
                      key={i}
                      selected={isIncluded ? true : false}
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
      ) : (
        <Box>
          <SlideIn in={store.selectedCategory ? false : true} timeout={200}>
            <Absolute>
              <TypeSelectorElement
                icon={<Folder />}
                id="schemaHelperSelector"
                label="Helpers"
                onClick={() => (store.selectedCategory = "helpers")}
                showArrow
              />
              {categories.map(category => (
                <TypeSelectorElement
                  key={category}
                  icon={<Folder />}
                  id="schemaCategorySelector"
                  label={capitalize(category)}
                  onClick={() => (store.selectedCategory = category)}
                  showArrow
                />
              ))}
              <Box mt={2}>
                <Button
                  id="randomSchemaElementButton"
                  onClick={() =>
                    store.elements.push({
                      ...sample(schemaTypes),
                      id: simpleId()
                    })
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
                    <TypeSelectorElement
                      key={helper.stub}
                      icon={<Book />}
                      id="helperElementToggleSelect"
                      label={helper.label}
                      onClick={() => {
                        helper.elements.map(element =>
                          store.elements.push({ ...element, id: simpleId() })
                        );
                        store.toast = { show: true, message: "Helper added" };
                      }}
                    />
                  ))
                : schemaTypes
                    .filter(
                      schema => schema.category === store.selectedCategory
                    )
                    .map(schema => {
                      const isIncluded = store.elements.find(
                        element => element.stub === schema.stub
                      );
                      return (
                        <TypeSelectorElement
                          key={schema.stub}
                          icon={<File />}
                          id="schemaElementToggleSelect"
                          isIncluded={isIncluded}
                          label={schema.label}
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
            </Absolute>
          </SlideIn>
        </Box>
      )}
    </Relative>
  );
};
export default view(TypeSelector);
