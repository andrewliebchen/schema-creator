import styled from "styled-components";
import React from "react";
import { Box } from "rebass";

const Element = styled.input`
  width: 100%;
  box-sizing: border-box;
  appearance: none;
  padding: 7px 16px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;
  display: block;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 3px black;
  }
`;

const Input = props => (
  <Box {...props}>
    <Element {...props} />
  </Box>
);

export default Input;
