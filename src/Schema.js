import React, { Component } from "react";
import store from "./store";
import { view } from "react-easy-state";
import Card from "./Card";
import { Text, Box, Heading, Flex } from "rebass";
import TypeSelector from "./TypeSelector";
import { Trash, Plus } from "react-feather";

class Schema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <Box>
        {this.state.editing ? (
          <Box>
            <Flex justifyContent="space-between">
              <Heading>Select schema</Heading>
              <Text onClick={() => this.setState({ editing: false })}>
                Done
              </Text>
            </Flex>
            <TypeSelector />
          </Box>
        ) : (
          <Box>
            <Heading>Schema</Heading>
            {store.elements.map((element, i) => (
              <Card
                key={i}
                text={element}
                icon={
                  <Trash
                    data-tip="Remove"
                    onClick={() => store.elements.splice(i, 1)}
                    size={18}
                  />
                }
              />
            ))}
            <Card
              onClick={() => this.setState({ editing: true })}
              text="Add schema elements"
              icon={<Plus size={18} />}
            />
          </Box>
        )}
      </Box>
    );
  }
}

export default view(Schema);
