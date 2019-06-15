import React, { useState } from "react";
import { Box, Text, Flex } from "rebass";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

const types = ["Number", "Currency", "Time"];
const operations = ["Add", "Subtract", "Multiply", "Divide"];
const iterators = [
  "A specific number",
  "A random number",
  "Fibonacci sequence"
];

const TypeSelectorFormulas = props => {
  const [type, setType] = useState(types[0]);
  const [operation, setOperation] = useState(operations[0]);
  const [iterator, setIterator] = useState(iterators[0]);

  return (
    <Box>
      <Text mb={3}>Configure a formula</Text>
      <Box mb={4}>
        <Select
          mb={2}
          onChange={event => setType(event.target.value)}
          value={types[type]}
        >
          {types.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
        <Input type="number" placeholder="Enter a value" width="100%" />
      </Box>
      <Box mb={4}>
        <Select
          mb={2}
          onChange={event => setOperation(event.target.value)}
          value={operations[operation]}
        >
          {operations.map(operation => (
            <option key={operation} value={operation}>
              {operation}
            </option>
          ))}
        </Select>
        <Select
          mb={2}
          onChange={event => setIterator(event.target.value)}
          value={iterators[iterator]}
        >
          {iterators.map(iterator => (
            <option key={iterator} value={iterator}>
              {iterator}
            </option>
          ))}
        </Select>
        {iterator === iterators[0] && (
          <Input type="number" placeholder="Enter a value" width="100%" />
        )}
      </Box>
      <Button>Add formula</Button>
    </Box>
  );
};

export default TypeSelectorFormulas;
