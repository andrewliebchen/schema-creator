import { Text, Box, Flex, Heading, Button, Link, Image, Card } from "rebass";
import { view } from "react-easy-state";
import PropTypes from "prop-types";
import React from "react";
import store from "./store";

const components = {
  Text: Text,
  Box: Box,
  Flex: Flex,
  Heading: Heading,
  Button: Button,
  Link: Link,
  Image: Image,
  Card: Card
};

const PreviewElement = props => {
  const element = store.structureElements.find(
    element => element.id === props.id
  );

  let elementProps = {};
  element.props.map(prop => (elementProps[prop.key] = prop.value));

  return React.createElement(
    components[element.component],
    elementProps,
    props.sample
  );
};

PreviewElement.propTypes = {
  id: PropTypes.string
};

export default view(PreviewElement);
