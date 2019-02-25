import { categories } from "./data";
import { Check, X, File, Trash } from "react-feather";
import { Flex, Text } from "rebass";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import Key from "./Key";
import PropTypes from "prop-types";
import React, { Component } from "react";
import store from "./store";

class SchemaElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: `${this.props.category}.${this.props.stub}`
    };
  }

  render() {
    return (
      <Card mb={1}>
        {this.state.editing ? (
          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={3}
            py={2}
          >
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <Flex>
              <X onClick={() => this.setState({ editing: false })} />
              <Check
                onClick={() => {
                  store.elements.find(
                    element => element.id === this.props.id
                  ).userLabel = this.state.value;
                  this.setState({ editing: false });
                }}
              />
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" alignItems="center" p={3}>
            <Flex alignItems="center">
              <File size={18} />
              <Text ml={1} onClick={() => this.setState({ editing: true })}>
                <Key {...this.props} />
              </Text>
            </Flex>
            <Trash
              size={18}
              onClick={() =>
                store.elements.splice(
                  store.elements.findIndex(
                    schema => schema.id === this.props.id
                  ),
                  1
                )
              }
            />
          </Flex>
        )}
      </Card>
    );
  }
}

SchemaElement.propTyeps = {
  id: PropTypes.number,
  category: PropTypes.oneOf([categories]),
  stub: PropTypes.string
};

export default view(SchemaElement);
