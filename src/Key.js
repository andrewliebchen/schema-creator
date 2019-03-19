import { ArrowRight } from "react-feather";
import { Text, Flex } from "rebass";
import capitalize from "lodash.capitalize";
import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";

const Key = props => {
  if (props.userLabel) {
    return <Text fontSize={props.small ? 1 : 2}>{props.userLabel}</Text>;
  } else {
    return (
      <Flex alignItems="center" style={{ overflow: "hidden" }} {...props}>
        <Text mr={1} fontSize={props.small ? 1 : 2}>
          {capitalize(props.category)}
        </Text>
        <ArrowRight size={props.small ? 12 : 18} color={theme.colors.black} />
        <Text ml={1} fontWeight="bold" fontSize={props.small ? 1 : 2}>
          {props.label}
        </Text>
      </Flex>
    );
  }
};

Key.propTypes = {
  category: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
  userLabel: PropTypes.string
};

export default Key;
