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
    this._handleSave = this._handleSave.bind(this);
  }

  _handleSave() {
    const matchingElement = store.elements.find(
      element => element.id === this.props.id
    );

    matchingElement.userLabel = this.state.value;
    this.setState({ editing: false });
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
              autoFocus
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              onKeyPress={event => event.which === 13 && this._handleSave()}
            />
            <Flex>
              <X
                onClick={() => this.setState({ editing: false })}
                id="cancelCustomSchemaElementTitle"
              />
              <Check
                onClick={this._handleSave}
                id="saveCustomSchemaElementTitle"
              />
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" alignItems="center" p={3}>
            <Flex alignItems="center">
              <File size={18} />
              <Text
                ml={1}
                onClick={() => this.setState({ editing: true })}
                id="toggleSchemaElementTitleEdit"
              >
                <Key {...this.props} />
              </Text>
            </Flex>
            <Trash
              size={18}
              id="removeSchemaElement"
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
  category: PropTypes.oneOf([categories]),
  id: PropTypes.number,
  stub: PropTypes.string
};

export default view(SchemaElement);
