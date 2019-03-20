import React from "react";
import Card from "./Card";
import { Flex, Text } from "rebass";
import { Check, ArrowRight } from "react-feather";
import PropTypes from "prop-types";
import theme from "./theme";

const TypeSelectorElement = props => (
  <Card
    hover
    mb={1}
    selected={props.isIncluded}
    title={props.isIncluded && "Added to schema"}
    {...props}
  >
    <Flex justifyContent="space-between" alignItems="center" p={3}>
      <Flex alignItems="center">
        {React.cloneElement(props.icon, {
          size: 18,
          color: props.isIncluded ? "white" : "black"
        })}
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
  onClick: PropTypes.func,
  id: PropTypes.string,
  icon: PropTypes.node,
  isIncluded: PropTypes.shape({
    id: PropTypes.string
  }),
  label: PropTypes.node,
  showArrow: PropTypes.bool
};

export default TypeSelectorElement;
