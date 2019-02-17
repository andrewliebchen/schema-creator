import React from "react";
import { schemaTypes } from "./data";
import store from "./store";
import { view } from "react-easy-state";

const TypeSelector = props => (
  <select onChange={event => store.elements.push(event.target.value)}>
    {Object.keys(schemaTypes).map(parent =>
      schemaTypes[parent].map(type => (
        <option key={type} value={`${parent}.${type}`}>
          {parent}.{type}
        </option>
      ))
    )}
  </select>
);

export default view(TypeSelector);
