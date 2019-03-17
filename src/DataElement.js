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
  <Card mb={1} hover>
    <Flex alignItems="center" p={3}>
      <File color={props.color} />
      <Box ml={2} mr="auto">
        <Flex alignItems="center">
          <Text fontSize={1}>
            {props.category}.{props.stub}
          </Text>
        </Flex>
        <Text fontWeight="bold">{props.sample}</Text>
      </Box>
      <ShowOnHover>
        <Flex>
          <Pointer
            mr={1}
            onClick={() =>
              (store.findDataElement("id", props.id).sample = genSample(props))
            }
            title="Refresh"
          >
            <RefreshCcw size={18} />
          </Pointer>
          <Pointer
            onClick={() => store.destroyElement(props.id)}
            title="Delete"
          >
            <Trash size={18} />
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
