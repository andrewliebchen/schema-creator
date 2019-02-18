import React from "react";
import store from "./store";
import { view } from "react-easy-state";
import { Flex, Text } from "rebass";
import Input from "./Input";

const CountControl = props => (
  <Flex alignItems="center">
    <Text mr={2}>Item count</Text>
    <Input
      type="number"
      value={store.count}
      onChange={event => (store.count = event.target.value)}
    />
  </Flex>
);

export default view(CountControl);
