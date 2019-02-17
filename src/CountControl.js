import React from "react";
import store from "./store";
import { view } from "react-easy-state";
import { Box } from "rebass";

const CountControl = props => (
  <Box>
    <input
      type="number"
      defaultValue={store.count}
      onChange={event => (store.count = event.target.value)}
    />
  </Box>
);

export default view(CountControl);
