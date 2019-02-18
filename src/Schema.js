import React, { Component } from "react";
import store from "./store";
import { view } from "react-easy-state";
import Card from "./Card";
import { Text, Box, Heading, Flex, Button } from "rebass";
import TypeSelector from "./TypeSelector";
import { Trash, Plus, X } from "react-feather";
import Input from "./Input";

// Put this state in the store

class Schema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    const { editing } = this.state;
    return (
      <Flex flexDirection="column">
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          {editing ? (
            <Input type="Search" placeholder="search" />
          ) : (
            <Heading>Schema</Heading>
          )}

          <Button onClick={() => this.setState({ editing: !editing })}>
            {editing ? "Done" : "Add"}
          </Button>
        </Flex>
        {editing ? (
          <TypeSelector />
        ) : (
          store.elements.map((element, i) => (
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
          ))
        )}
      </Flex>
    );
  }
}

export default view(Schema);
