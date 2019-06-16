import { ArrowRight } from "react-feather";
import { Text, Flex } from "rebass";
import capitalize from "lodash.capitalize";
import Highlighter from "react-highlight-words";
import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";
import truncate from "truncate";

const highlightStyle = {
  backgroundColor: theme.colors.black,
  color: theme.colors.white,
  borderRadius: 2,
  fontWeight: "bold"
};

const Key = props => {
  if (props.userLabel) {
    return <Text fontSize={props.small ? 1 : 2}>{props.userLabel}</Text>;
  } else {
    return (
      <Flex alignItems="center" style={{ overflow: "hidden" }} {...props}>
        <Text mr={1} fontSize={props.small ? 1 : 2}>
          <Highlighter
            searchWords={props.query ? [props.query] : [""]}
            textToHighlight={capitalize(props.category)}
            highlightStyle={highlightStyle}
          />
        </Text>
        {props.label && (
          <Flex alignItems="center">
            <ArrowRight
              size={props.small ? 12 : 18}
              color={theme.colors[props.selected ? "white" : "black"]}
            />
            <Text ml={1} fontWeight="bold" fontSize={props.small ? 1 : 2}>
              <Highlighter
                searchWords={props.query ? [props.query] : [""]}
                textToHighlight={truncate(props.label, 16)}
                highlightStyle={highlightStyle}
              />
            </Text>
          </Flex>
        )}
      </Flex>
    );
  }
};

Key.propTypes = {
  query: PropTypes.string,
  category: PropTypes.string,
  label: PropTypes.string,
  small: PropTypes.bool,
  userLabel: PropTypes.string,
  selected: PropTypes.bool
};

export default Key;
