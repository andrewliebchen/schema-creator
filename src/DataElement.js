import { categories } from "./data";
import { File, Trash, RefreshCcw } from "react-feather";
import { Flex, Text, Box } from "rebass";
import { genSample } from "./utils";
import { Pointer, ShowOnHover } from "./StyleHelpers";
import { view } from "react-easy-state";
import Card from "./Card";
import PropTypes from "prop-types";
import React from "react";
import store from "./store";

const DataElement = props => (
  <Card mb={1} hover borderColor={props.color}>
    <Flex alignItems="center" p={3}>
      <File color={props.color} />
      <Box ml={2} mr="auto">
        <Flex alignItems="center">
          <Text color={props.color} fontSize={1}>
            {props.stub}
          </Text>
        </Flex>
        <Text fontWeight="bold" color={props.color}>
          {props.sample}
        </Text>
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
            <RefreshCcw size={18} color={props.color} />
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
            <Trash size={18} color={props.color} />
          </Pointer>
        </Flex>
      </ShowOnHover>
    </Flex>
  </Card>
);

DataElement.propTyeps = {
  category: PropTypes.oneOf([categories]),
  id: PropTypes.number,
  stub: PropTypes.string,
  sample: PropTypes.string,
  color: PropTypes.string
};

export default view(DataElement);
