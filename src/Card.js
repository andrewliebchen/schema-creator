import { Card as Base } from "rebass";
import PropTypes from "prop-types";
import React from "react";
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
    {props.children}
  </Root>
);

Card.propTyeps = {
  hover: PropTypes.boolean,
  selected: PropTypes.boolean
};

export default Card;
