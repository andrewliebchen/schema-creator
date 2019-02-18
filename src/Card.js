import React from "react";
import { Card as Root } from "rebass";
import PropTypes from "prop-types";

const Card = props => (
  <Root
    p={3}
    mt={1}
    border={1}
    borderColor="black"
    bg={props.selected && "blue"}
    {...props}
  >
    {props.children}
  </Root>
);

Card.propTyeps = {
  selected: PropTypes.boolean
};

export default Card;
