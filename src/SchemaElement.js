import { categories } from "./data";
import { Check, X, File, Trash, Edit3 } from "react-feather";
import { Flex, Text } from "rebass";
import { Pointer, ShowOnHover } from "./StyleHelpers";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import Key from "./Key";
import PropTypes from "prop-types";
import React, { useState } from "react";
import store from "./store";
import theme from "./theme";
import TypeSelectorElementIcon from "./TypeSelectorElementIcon";

const SchemaElement = props => {
  const [value, setValue] = useState(`${props.category}.${props.stub}`);
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    const matchingElement = store.elements.find(
      element => element.id === props.id
    );

    matchingElement.userLabel = value;
    setEditing(false);
  };

  return (
    <Card mb={1}>
      {editing ? (
        <Flex alignItems="center" justifyContent="space-between" px={3} py={2}>
          <Input
            autoFocus
            onChange={event => setValue(event.target.value)}
            onKeyPress={event => {
              event.which === 13 && handleSave();
            }}
            value={value}
          />
          <Flex>
            <Pointer
              id="cancelCustomSchemaElementTitle"
              onClick={() => setEditing(false)}
              title="Cancel"
            >
              <X color={theme.colors.black} />
            </Pointer>
            <Pointer
              id="saveCustomSchemaElementTitle"
              onClick={() => handleSave()}
              title="Save"
            >
              <Check color={theme.colors.black} />
            </Pointer>
          </Flex>
        </Flex>
      ) : (
        <Flex justifyContent="space-between" alignItems="center" p={3}>
          <Flex alignItems="center">
            <TypeSelectorElementIcon {...props} />
            <Text
              id="toggleSchemaElementTitleEdit"
              ml={1}
              onClick={() => setEditing(true)}
            >
              <Key {...props} />
            </Text>
          </Flex>
          <ShowOnHover>
            <Flex>
              <Pointer
                id="toggleSchemaElementTitleEdit"
                mr={1}
                onClick={() => setEditing(true)}
                title="Edit"
              >
                <Edit3 size={18} color={theme.colors.black} />
              </Pointer>
              <Pointer
                id="removeSchemaElement"
                onClick={() =>
                  store.elements.splice(
                    store.elements.findIndex(schema => schema.id === props.id),
                    1
                  )
                }
                title="Delete"
              >
                <Trash size={18} color={theme.colors.black} />
              </Pointer>
            </Flex>
          </ShowOnHover>
        </Flex>
      )}
    </Card>
  );
};

SchemaElement.propTyeps = {
  category: PropTypes.oneOf([categories]),
  id: PropTypes.number,
  stub: PropTypes.string
};

export default view(SchemaElement);
