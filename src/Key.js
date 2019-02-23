import React from "react";
import capitalize from "lodash.capitalize";
import { ArrowRight } from "react-feather";
import { Text, Flex } from "rebass";
import PropTypes from "prop-types";

const Key = props => (
  <Flex alignItems="center" style={{ overflow: "hidden" }}>
    <Text mr={1} fontSize={props.small ? 1 : 2}>
      {capitalize(props.category)}
    </Text>
    <ArrowRight size={props.small ? 12 : 18} />
    <Text ml={1} fontWeight="bold" fontSize={props.small ? 1 : 2}>
      {props.label}
    </Text>
  </Flex>
);

Key.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool
};

export default Key;
