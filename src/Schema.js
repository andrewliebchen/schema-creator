import React, { Component } from "react";
import store from "./store";
import { view } from "react-easy-state";
import Card from "./Card";
import { Text, Box, Heading, Flex } from "rebass";
import TypeSelector from "./TypeSelector";

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
              <Heading>Select schema elements</Heading>
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
              <Card key={i}>
                <Text>{element}</Text>
              </Card>
            ))}
            <Card onClick={() => this.setState({ editing: true })}>
              Add schema elements
            </Card>
          </Box>
        )}
      </Box>
    );
  }
}

export default Schema;
