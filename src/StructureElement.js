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

const SchemaChild = props => (
  <Flex alignItems="center">
    <File color={props.color} />
    <Text ml={1}>
      {props.category}.{props.stub}
    </Text>
  </Flex>
);

const StructureElement = props => {
  const element = store.elements.find(element => element.id === props.id);
  return (
    <Card mb={1} p={3}>
      {/* <Pointer onClick={props.onSelect}>
          <Checkbox checked={props.selected} />
        </Pointer> */}
      {props.children &&
        props.children.map((child, i) => (
          <Box mb={3} key={i}>
            <StructureElement {...child} />
          </Box>
        ))}
      <Box mb={3}>
        <Select
          defaultValue={element.component}
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
            onClick={() => {
              // .props.push({
              //   key: componentLibraryProps[0].key,
              //   value: 0
              // })
            }}
          >
            Add
          </Link>
        </Flex>
        {/* {element.properties.map((elementProp, i) => (
          <Flex alignItems="center" key={i} mt={1}>
            <Select
              width={1}
              defaultValue={elementProp.key}
              onChange={event => (element.props[i].key = event.target.value)}
            >
              {componentLibraryProps
                .filter(property =>
                  property.components.includes(element.component)
                )
                .map(property => (
                  <option key={property.key} value={property.key}>
                    {property.label}
                  </option>
                ))}
            </Select>
            <Input
              width={1}
              ml={2}
              type={
                componentLibraryProps.find(
                  property => property.key === elementProp.key
                ).type
              }
              defaultValue={elementProp.value}
              onChange={event => (element.props[i].value = event.target.value)}
            />
          </Flex>
        ))} */}
      </Box>
    </Card>
  );
};

StructureElement.props = {
  id: PropTypes.string
};

export default view(StructureElement);
