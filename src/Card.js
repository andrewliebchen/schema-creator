import { Card as Base } from "rebass";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled(Base)`
  cursor: ${props => props.hover && "pointer"};

  &:hover {
    box-shadow: ${props =>
      props.hover && `inset 0 0 0 2px ${props.borderColor}`};
  }
`;

const Card = props => (
  <Root
    border={1}
    borderRadius={4}
    bg={props.selected ? "black" : "white"}
    {...props}
  >
    {props.children}
  </Root>
);

Card.defaultProps = {
  borderColor: "black"
};

Card.propTyeps = {
  hover: PropTypes.boolean,
  selected: PropTypes.boolean,
  borderColor: PropTypes.string
};

export default Card;
