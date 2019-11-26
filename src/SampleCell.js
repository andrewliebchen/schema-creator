import { categories } from "./data";
import { Text } from "rebass";
import { view } from "react-easy-state";
import copy from "clipboard-copy";
import datef from "datef";
import NumericLabel from "react-pretty-numbers";
import { Pointer } from "./StyleHelpers";
import PropTypes from "prop-types";
import React from "react";
import store from "./store";
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
        <img
          src={cellContent}
          height={48}
          width="auto"
          alt={props.stub}
          style={{ borderRadius: 6 }}
        />
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
    case "date":
      cell = <Text>{datef("MMM d, YYYY h:mm a", cellContent)}</Text>;
      break;
    default:
      cell = cellContent;
  }

  return (
    <Pointer
      title="Copy to clipboard"
      id="copyCell"
      onClick={() => {
        copy(cellContent);
        store.toast = {
          show: true,
          message: "Cell copied to clipboard"
        };
      }}
    >
      <Text>{cell}</Text>
    </Pointer>
  );
};

SampleCell.props = {
  category: PropTypes.oneOf(categories),
  row: PropTypes.object,
  stub: PropTypes.string,
  type: PropTypes.oneOf(["image", "number", "date"])
};

export default view(SampleCell);
