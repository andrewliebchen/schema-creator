import React from "react";
import Card from "./Card";
import { Flex, Text } from "rebass";
import { Check, ArrowRight } from "react-feather";
import PropTypes from "prop-types";
import theme from "./theme";
import TypeSelectorElementIcon from "./TypeSelectorElementIcon";

const TypeSelectorElement = props => (
  <Card hover mb={1} selected={props.isIncluded} {...props}>
    <Flex justifyContent="space-between" alignItems="center" p={3}>
      <Flex alignItems="center">
        <TypeSelectorElementIcon
          type={props.type}
          selected={props.isIncluded}
        />
        <Text
          ml={1}
          fontWeight={props.isIncluded ? "bold" : "normal"}
          color={props.isIncluded ? "white" : "black"}
        >
          {props.label}
        </Text>
      </Flex>
      {props.isIncluded && <Check size={18} color="white" />}
      {props.showArrow && <ArrowRight size={18} color={theme.colors.black} />}
    </Flex>
  </Card>
);

TypeSelectorElement.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.node,
  isIncluded: PropTypes.shape({
    id: PropTypes.string
  }),
  label: PropTypes.node,
  showArrow: PropTypes.bool,
  type: PropTypes.oneOf([
    "string",
    "number",
    "numberish",
    "currency",
    "date",
    "image",
    "helper",
    "category"
  ])
};

export default TypeSelectorElement;
