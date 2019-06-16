import { Flex, Text } from "rebass";
import { view } from "react-easy-state";
import Input from "./Input";
import React from "react";
import store from "./store";

const CountControl = props => (
  <Flex alignItems="center">
    <Text mr={2} color={props.color}>
      Item count
    </Text>
    <Input
      type="number"
      value={store.count}
      onChange={event => (store.count = event.target.value)}
      id="sampleCountControlInput"
      colorTheme={props.color}
      {...props}
    />
  </Flex>
);

export default view(CountControl);
