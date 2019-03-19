import { Box } from "rebass";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import theme from "./theme";

const Element = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${props => theme.colors[props.type]};
  border-radius: 4px;
  border: 0;
  color: ${props =>
    props.type === "black" ? theme.colors.white : theme.colors.black};
  cursor: pointer;
  display: flex;
  font-size: inherit;
  font-weight: bold;
  justify-content: center;
  padding: 8px 16px;
  width: 100%;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px
        ${props =>
          props.type === "black" ? theme.colors.white : theme.colors.black},
      0 0 0 3px ${props => props.type};
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
  ml: PropTypes.number,
  type: PropTypes.oneOf(["black", "white"]),
  width: PropTypes.number
};

export default Button;
