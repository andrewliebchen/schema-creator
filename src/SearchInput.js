import { Box } from "rebass";
import { Search } from "react-feather";
import Input from "./Input";
import React from "react";
import styled from "styled-components";
import theme from "./theme";

const Root = styled(Box)`
  position: relative;
`;

const Element = styled(Input)`
  box-sizing: border-box;
  padding-left: 32px;
  width: 100%;
`;

const Icon = styled(Search)`
  left: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const SearchInput = props => (
  <Root width={1}>
    <Element
      type="search"
      placeholder="Search..."
      {...props}
      colorTheme="black"
    />
    <Icon size={18} color={theme.colors.black} />
  </Root>
);

export default SearchInput;
