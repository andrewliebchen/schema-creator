import React from "react";
import Card from "./Card";
import { Box, Text, Flex, Link } from "rebass";
import { componentLibrary, componentProps } from "./data";
import PropTypes from "prop-types";
import store from "./store";
import { view } from "react-easy-state";
import { File } from "react-feather";
import Input from "./Input";

const StructureElement = props => {
  const element = store.elements.find(element => element.id === props.id);
  return (
    <Card mb={1} p={3}>
      <Box mb={2}>
        <Text fontSize={0}>Element</Text>
        <select
          value={element.componentElement}
          onChange={event => (element.componentElement = event.target.value)}
        >
          {componentLibrary.map(component => (
            <option key={component.name} value={component.name}>
              {component.name}
            </option>
          ))}
        </select>
      </Box>
      <Box mb={2}>
        <Text fontSize={0}>Children</Text>
        <Card p={1} borderColor={element.color}>
          <Flex alignItems="center">
            <File color={element.color} size={18} />
            <Box ml={1}>
              <Text color={element.color}>
                {element.category}.{element.stub}
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>
      <Box>
        <Text fontSize={0}>Props</Text>
        {element.componentProps.map((componentProp, i) => (
          <Flex alignItems="center" key={i} mt={1}>
            <select
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
                    {prop.key}
                  </option>
                ))}
            </select>
            <Input
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
        <Link
          onClick={() =>
            element.componentProps.push({
              key: componentProps[0].key,
              value: 0
            })
          }
        >
          Add prop
        </Link>
      </Box>
    </Card>
  );
};

StructureElement.props = {
  id: PropTypes.string
};

export default view(StructureElement);
