import { Box, Text, Flex, Link } from "rebass";
import { componentLibrary, componentLibraryProps } from "./data";
import { File } from "react-feather";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import PropTypes from "prop-types";
import React from "react";
import Select from "./Select";
import store from "./store";
import Checkbox from "./Checkbox";
import { Pointer } from "./StyleHelpers";

const StructureElement = props => {
  const element = store.findStructureElement("id", props.id);
  const schemaElement = store.findDataElement("id", element.children);

  return (
    <Card mb={1} p={3}>
      <Box mb={3}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <File color={schemaElement.color} />
            <Text ml={1}>
              {schemaElement.category}.{schemaElement.stub}
            </Text>
          </Flex>
          <Pointer onClick={props.onSelect}>
            <Checkbox checked={props.selected} />
          </Pointer>
        </Flex>
      </Box>
      <Box mb={3}>
        <Select
          value={element.component}
          onChange={event => (element.component = event.target.value)}
        >
          {componentLibrary.map(component => (
            <option key={component.name} value={component.name}>
              {component.name}
            </option>
          ))}
        </Select>
      </Box>
      <Box>
        <Flex justifyContent="space-between" mb={1}>
          <Text>Props</Text>
          <Link
            onClick={() =>
              element.props.push({
                key: componentLibraryProps[0].key,
                value: 0
              })
            }
          >
            Add
          </Link>
        </Flex>
        {element.props.map((elementProp, i) => (
          <Flex alignItems="center" key={i} mt={1}>
            <Select
              width={1}
              defaultValue={elementProp.key}
              onChange={event => (element.props[i].key = event.target.value)}
            >
              {componentLibraryProps
                .filter(prop => prop.components.includes(element.component))
                .map(prop => (
                  <option key={prop.key} value={prop.key}>
                    {prop.label}
                  </option>
                ))}
            </Select>
            <Input
              width={1}
              ml={2}
              type={
                componentLibraryProps.find(prop => prop.key === elementProp.key)
                  .type
              }
              defaultValue={elementProp.value}
              onChange={event => (element.props[i].value = event.target.value)}
            />
          </Flex>
        ))}
      </Box>
    </Card>
  );
};

StructureElement.props = {
  id: PropTypes.string
};

export default view(StructureElement);
