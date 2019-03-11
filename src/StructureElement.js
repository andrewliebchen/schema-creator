import React from "react";
import Card from "./Card";
import { Box, Text, Flex, Link } from "rebass";
import { components, componentProps } from "./data";
import PropTypes from "prop-types";
import store from "./store";
import { view } from "react-easy-state";
import { File } from "react-feather";
import Input from "./Input";

const StructureElement = props => (
  <Card mb={1} p={3}>
    <Box mb={2}>
      <Text fontSize={0}>Element</Text>
      <select
        value={props.component.element}
        onChange={event =>
          (store.elements.find(
            element => element.id === props.id
          ).component.element = event.target.value)
        }
      >
        {components.map(component => (
          <option key={component} value={component}>
            {component}
          </option>
        ))}
      </select>
    </Box>
    <Box mb={2}>
      <Text fontSize={0}>Children</Text>
      <Card p={1} borderColor={props.color}>
        <Flex alignItems="center">
          <File color={props.color} />
          <Box ml={1}>
            <Text color={props.color} fontSize={1}>
              {props.stub}
            </Text>
            <Text fontWeight="bold" color={props.color}>
              {props.sample}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
    <Box>
      <Text fontSize={0}>Props</Text>
      <Flex>
        <Text>Color</Text>
        <Input
          defaultValue={props.component.props.color}
          onChange={event =>
            (store.elements.find(
              element => element.id === props.id
            ).component.props.color = event.target.value)
          }
        />
      </Flex>
    </Box>
  </Card>
);

StructureElement.props = {
  color: PropTypes.string,
  stub: PropTypes.string,
  sample: PropTypes.string,
  component: PropTypes.shape({
    element: PropTypes.oneOf(components),
    children: PropTypes.array,
    props: PropTypes.array
  })
};

export default view(StructureElement);
