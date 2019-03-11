import React from "react";
import { Text, Button } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import PropTypes from "prop-types";

const components = { Text: Text, Button: Button };

const PreviewElement = props => {
  const element = store.elements.find(element => element.id === props.id);
  return React.createElement(
    components[element.component.element],
    element.component.props,
    element.sample
  );
};

PreviewElement.propTypes = {
  id: PropTypes.string
};

export default view(PreviewElement);
