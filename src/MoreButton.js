import React from "react";
import store from "./store";
import { view } from "react-easy-state";
import { Flex } from "rebass";
import Button from "./Button";
import PropTypes from "prop-types";

const MoreButton = props => (
  <Flex p={1}>
    <Button
      width={1}
      onClick={() => (store.count = store.count + 10)}
      id="moreSamplesButton"
      {...props}
    >
      Add 10 more...
    </Button>
  </Flex>
);

MoreButton.propTypes = {
  type: PropTypes.oneOf(["black", "white"])
};

export default view(MoreButton);
