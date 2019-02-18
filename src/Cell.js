import { Box } from "rebass";
import React from "react";

const Cell = props => (
  <Box p={2} width={1}>
    {props.children}
  </Box>
);

export default Cell;
