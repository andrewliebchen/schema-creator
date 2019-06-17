import React, { useState } from "react";
import { Box, Text } from "rebass";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { view } from "react-easy-state";
import store from "./store";
import simpleId from "simple-id";
import {
  formulaStartValueTypes,
  formulaOperationTypes,
  formulaIteratorTypes
} from "./types";

const TypeSelectorFormulas = props => {
  const [startValueType, setStartValueType] = useState(
    formulaStartValueTypes[0]
  );
  const [startValue, setStartValue] = useState("");
  const [operation, setOperation] = useState(formulaOperationTypes[0]);
  const [iteratorType, setIteratorType] = useState(formulaIteratorTypes[0]);
  const [iterator, setIterator] = useState("");

  return (
    <Box mt={2}>
      <Text mb={2}>Start with a...</Text>
      <Box mb={4}>
        <Select
          mb={2}
          onChange={event => setStartValueType(event.target.value)}
          value={startValueType}
          isDisabled
        >
          {formulaStartValueTypes.map(startValueType => (
            <option key={startValueType} value={startValueType}>
              {startValueType}
            </option>
          ))}
        </Select>
        <Input
          type="number"
          value={startValue}
          placeholder="Enter a value"
          width="100%"
          onChange={event => setStartValue(event.target.value)}
          colorTheme="black"
        />
      </Box>
      <Box mb={4}>
        <Select
          mb={2}
          onChange={event => setOperation(event.target.value)}
          value={operation}
        >
          {formulaOperationTypes.map(operation => (
            <option key={operation} value={operation}>
              {operation}
            </option>
          ))}
        </Select>
        <Select
          mb={2}
          onChange={event => setIteratorType(event.target.value)}
          value={iteratorType}
        >
          {formulaIteratorTypes.map(iteratorType => (
            <option key={iteratorType} value={iteratorType}>
              {iteratorType}
            </option>
          ))}
        </Select>
        {iteratorType === formulaIteratorTypes[0] && (
          <Input
            type="number"
            placeholder="Enter a value"
            width="100%"
            value={iterator}
            onChange={event => setIterator(event.target.value)}
            colorTheme="black"
          />
        )}
      </Box>
      <Button
        onClick={() =>
          store.elements.push({
            id: simpleId(),
            category: "formula",
            startValueType: startValueType,
            startValue: startValue,
            operation: operation,
            iteratorType: iteratorType,
            iterator: iterator
          })
        }
      >
        Add formula
      </Button>
    </Box>
  );
};

export default view(TypeSelectorFormulas);
