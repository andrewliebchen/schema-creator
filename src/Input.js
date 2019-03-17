import { Box } from "rebass";
import React from "react";
import styled from "styled-components";

const Element = styled.input`
  appearance: none;
  border-radius: 4px;
  border: 1px solid;
  box-sizing: border-box;
  display: block;
  font-size: inherit;
  padding: 7px 16px;
  width: 100%;

  &:focus {
    box-shadow: 0 0 0 1px white, 0 0 0 3px black;
    outline: none;
  }
`;

const Input = props => (
  <Box {...props}>
    <Element {...props} />
  </Box>
);

export default Input;
