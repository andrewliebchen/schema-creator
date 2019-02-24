import React from "react";
import NumericLabel from "react-pretty-numbers";
import PropTypes from "prop-types";
import { categories } from "./data";
import styled from "styled-components";
import { Text } from "rebass";

const Number = styled.span`
  font-feature-settings: "tnum";
`;

const numberParams = {
  commafy: true
};

const currencyParams = {
  currency: true,
  precision: 2,
  commafy: true
};

// <Text style={{ fontFeatureSettings: "tnum" }}>

const SampleCell = props => {
  let cell;
  const cellContent = props.row[`${props.category}.${props.stub}`];

  switch (props.type) {
    case "image":
      cell = (
        <img src={cellContent} height={48} width="auto" alt={props.stub} />
      );
      break;
    case "number":
      cell = (
        <Number>
          <NumericLabel params={numberParams}>{cellContent}</NumericLabel>
        </Number>
      );
      break;
    case "currency":
      cell = (
        <Number>
          <NumericLabel params={currencyParams}>{cellContent}</NumericLabel>
        </Number>
      );
      break;
    case "numberish":
      cell = <Number>{cellContent}</Number>;
      break;
    default:
      cell = cellContent;
  }

  return <Text>{cell}</Text>;
};

SampleCell.props = {
  row: PropTypes.object,
  type: PropTypes.oneOf(["image", "number"]),
  category: PropTypes.oneOf(categories),
  stub: PropTypes.string
};

export default SampleCell;
