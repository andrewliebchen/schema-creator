import React from "react";
import { Text, Button, Card } from "rebass";
import store from "./store";
import { view } from "react-easy-state";
import PropTypes from "prop-types";

const components = { Text: Text, Button: Button, Card: Card };

const PreviewElement = props => {
  const element = store.elements.find(element => element.id === props.id);
  let elementProps = {};
  element.componentProps.map(prop => (elementProps[prop.key] = prop.value));

  return React.createElement(
    components[element.componentElement],
    elementProps,
    props.sample || element.sample
  );
};

PreviewElement.propTypes = {
  id: PropTypes.string
};

export default view(PreviewElement);
