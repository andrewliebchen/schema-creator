import styled from "styled-components";
import React from "react";
import { Box } from "rebass";
import { ChevronDown } from "react-feather";

const Root = styled(Box)`
  position: relative;
`;

const Element = styled.select`
  appearance: none;
  padding: 7px 16px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;
  background-color: transparent;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 3px black;
  }
`;

const Icon = styled(ChevronDown)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

const Select = props => (
  <Root {...props}>
    <Icon />
    <Element>{props.children}</Element>
  </Root>
);

export default Select;
