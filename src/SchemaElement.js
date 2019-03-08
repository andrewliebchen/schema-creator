import { categories } from "./data";
import { Check, X, File, Trash, Edit3, RefreshCcw } from "react-feather";
import { Flex, Text, Box } from "rebass";
import { Pointer, ShowOnHover } from "./StyleHelpers";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import Key from "./Key";
import PropTypes from "prop-types";
import React, { useState } from "react";
import store from "./store";
import { genSample } from "./utils";

const SchemaElement = props => (
  <Card mb={1} hover>
    <Flex alignItems="center" p={3}>
      <div
        style={{
          height: 18,
          width: 18,
          borderRadius: 4,
          backgroundColor: props.color
        }}
      />
      <Box ml={2} mr="auto">
        <Flex alignItems="center">
          <Text>{props.stub}</Text>
        </Flex>
        <Text fontWeight="bold">{props.sample}</Text>
      </Box>
      <ShowOnHover>
        <Flex>
          <Pointer
            mr={1}
            onClick={() =>
              (store.elements.find(
                element => element.id === props.id
              ).sample = genSample(props))
            }
            title="Refresh"
          >
            <RefreshCcw size={18} />
          </Pointer>
          <Pointer
            onClick={() =>
              store.elements.splice(
                store.elements.findIndex(schema => schema.id === props.id),
                1
              )
            }
            title="Delete"
          >
            <Trash size={18} />
          </Pointer>
        </Flex>
      </ShowOnHover>
    </Flex>
  </Card>
);

SchemaElement.propTyeps = {
  category: PropTypes.oneOf([categories]),
  id: PropTypes.number,
  stub: PropTypes.string,
  sample: PropTypes.string,
  color: PropTypes.string
};

export default view(SchemaElement);
