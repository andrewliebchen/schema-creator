import React from "react";
import styled from "styled-components";
import { Box } from "rebass";

const Cell = props => (
  <Box p={2} width={1}>
    {props.children}
  </Box>
);

export default Cell;
