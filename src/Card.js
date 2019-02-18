import React from "react";
import { Card as Base, Flex, Text } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled(Base)`
  cursor: ${props => props.hover && "pointer"};

  &:hover {
    box-shadow: ${props => props.hover && "inset 0 0 0 2px black"};
  }
`;

const Card = props => (
  <Root
    border={1}
    borderColor="black"
    bg={props.selected && "black"}
    borderRadius={4}
    {...props}
  >
    {props.children || (
      <Flex justifyContent="space-between" alignItems="center" p={3}>
        <Text
          fontWeight={props.fontWeight}
          color={props.selected ? "white" : "black"}
        >
          {props.text}
        </Text>
        {props.icon}
      </Flex>
    )}
  </Root>
);

Card.propTyeps = {
  selected: PropTypes.boolean,
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
  text: PropTypes.string,
  icon: PropTypes.node,
  hover: PropTypes.boolean
};

export default Card;
