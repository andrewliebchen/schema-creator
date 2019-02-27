import { categories } from "./data";
import { Text } from "rebass";
import NumericLabel from "react-pretty-numbers";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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
  category: PropTypes.oneOf(categories),
  row: PropTypes.object,
  stub: PropTypes.string,
  type: PropTypes.oneOf(["image", "number"])
};

export default SampleCell;
