import {
  File,
  Hash,
  DollarSign,
  Calendar,
  Image,
  Book,
  Folder
} from "react-feather";
import React from "react";
import PropTypes from "prop-types";
import theme from "./theme";

const TypeSelectorElementIcon = props => {
  let icon;

  switch (props.type) {
    case "number":
    case "numberish":
      icon = <Hash />;
      break;
    case "currency":
      icon = <DollarSign />;
      break;
    case "date":
      icon = <Calendar />;
      break;
    case "image":
      icon = <Image />;
      break;
    case "helper":
      icon = <Book />;
      break;
    case "category":
      icon = <Folder />;
      break;
    default:
      icon = <File />;
  }

  return React.cloneElement(icon, {
    size: 18,
    color: theme.colors[props.selected ? "white" : "black"]
  });
};

TypeSelectorElementIcon.defaultProps = {
  type: "string"
};

TypeSelectorElementIcon.propTypes = {
  selected: PropTypes.bool,
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

export default TypeSelectorElementIcon;
