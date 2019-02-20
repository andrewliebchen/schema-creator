import React from "react";
import capitalize from "lodash.capitalize";
import { ChevronRight } from "react-feather";
import { Text, Flex } from "rebass";
import PropTypes from "prop-types";

const Key = props => (
  <Flex alignItems="center">
    <Text mr={1}>{capitalize(props.category)}</Text>
    <ChevronRight size={18} />
    <Text ml={1} fontWeight="bold">
      {props.label}
    </Text>
  </Flex>
);

Key.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string
};

export default Key;
