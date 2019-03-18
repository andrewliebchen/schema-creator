import React from "react";
import { Square, CheckSquare } from "react-feather";
import { Box } from "rebass";

const Checkbox = props => (
  <Box {...props}>{props.checked ? <CheckSquare /> : <Square />}</Box>
);

export default Checkbox;
