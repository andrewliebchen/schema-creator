import React from "react";
import { Card as Root, Flex, Text } from "rebass";
import PropTypes from "prop-types";

const Card = props => (
  <Root
    p={3}
    mt={1}
    border={1}
    borderColor="black"
    bg={props.selected && "blue"}
    borderRadius={4}
    {...props}
  >
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontWeight={props.fontWeight}>{props.text}</Text>
      {props.icon}
    </Flex>
  </Root>
);

Card.propTyeps = {
  selected: PropTypes.boolean,
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
  text: PropTypes.string,
  icon: PropTypes.node
};

export default Card;
