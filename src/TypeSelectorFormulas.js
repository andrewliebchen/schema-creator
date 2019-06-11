import React, { useState } from "react";
import { Box, Text, Flex } from "rebass";
import Button from "./Button";
import Input from "./Input";

const types = ["Number", "Currency", "Time"];
const operations = ["Add", "Subtract", "Multiply", "Divide"];

const TypeSelectorFormulas = props => {
  const [type, setType] = useState(0);
  const [operation, setOperation] = useState(0);

  return (
    <Box>
      <Text>Configure a formula</Text>
      <Flex>
        <Box width={1 / 4}>
          <Button
            onClick={() => setType(type < types.length - 1 ? type + 1 : 0)}
          >
            {types[type]}
          </Button>
        </Box>
        <Input type="number" placeholder="Enter a value" />
      </Flex>
      <Flex>
        <Box width={1 / 4}>
          <Button
            onClick={() =>
              setOperation(
                operation < operations.length - 1 ? operation + 1 : 0
              )
            }
          >
            {operations[operation]}
          </Button>
        </Box>
        <Input type="number" placeholder="Enter a value" />
      </Flex>
      <Button>Add formula</Button>
    </Box>
  );
};

export default TypeSelectorFormulas;
