import { Box, Text, Flex, Link } from "rebass";
import { componentLibrary, componentProps } from "./data";
import { File } from "react-feather";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import PropTypes from "prop-types";
import React from "react";
import Select from "./Select";
import store from "./store";

const StructureElement = props => {
  const element = store.elements.find(element => element.id === props.id);
  return (
    <Card mb={1} p={3}>
      <Box mb={3}>
        <Flex alignItems="center">
          <File color={element.color} />
          <Box ml={1}>
            <Text color={element.color}>
              {element.category}.{element.stub}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mb={3}>
        <Select
          value={element.componentElement}
          onChange={event => (element.componentElement = event.target.value)}
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
              element.componentProps.push({
                key: componentProps[0].key,
                value: 0
              })
            }
          >
            Add
          </Link>
        </Flex>
        {element.componentProps.map((componentProp, i) => (
          <Flex alignItems="center" key={i} mt={1}>
            <Select
              width={1}
              defaultValue={componentProp.key}
              onChange={event =>
                (element.componentProps[i].key = event.target.value)
              }
            >
              {componentProps
                .filter(prop =>
                  prop.components.includes(element.componentElement)
                )
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
                componentProps.find(prop => prop.key === componentProp.key).type
              }
              defaultValue={componentProp.value}
              onChange={event =>
                (element.componentProps[i].value = event.target.value)
              }
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
