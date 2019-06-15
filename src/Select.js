import React from "react";
import styled from "styled-components";
import theme from "./theme";
import { Box } from "rebass";
import { ChevronDown } from "react-feather";
import PropTypes from "prop-types";

const Root = styled(Box)`
  position: relative;
`;

const Element = styled.select`
  appearance: none;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  border: 1px solid;
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: inherit;
  font-weight: bold;
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

const Arrow = styled(ChevronDown)`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
`;

const Select = props => (
  <Root ml={props.ml} mb={props.mb} width={props.width}>
    <Element {...props}>{props.children}</Element>
    <Arrow size={18} />
  </Root>
);

Select.propTypes = {
  ml: PropTypes.number,
  mb: PropTypes.number,
  width: PropTypes.number
};

export default Select;
