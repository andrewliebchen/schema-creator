import { Box, Text } from "rebass";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Element = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => props.type};
  border-radius: 4px;
  border: 0;
  color: ${props => (props.type === "black" ? "white" : "black")};
  cursor: pointer;
  display: flex;
  font-size: inherit;
  font-weight: bold;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;

  &:hover {
    box-shadow: inset 0 0 0 1px black, 0 0 0 1px white, 0 0 0 2px black;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 3px black;
  }
`;

const Button = props => (
  <Box ml={props.ml} width={props.width}>
    <Element {...props}>{props.children}</Element>
  </Box>
);

Button.defaultProps = {
  type: "black"
};

Button.propTypes = {
  type: PropTypes.oneOf(["black", "white"]),
  ml: PropTypes.number,
  width: PropTypes.number
};

export default Button;
