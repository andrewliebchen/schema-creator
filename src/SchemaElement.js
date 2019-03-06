import { categories } from "./data";
import { Check, X, File, Trash, Edit3 } from "react-feather";
import { Flex, Text } from "rebass";
import { view } from "react-easy-state";
import Card from "./Card";
import Input from "./Input";
import Key from "./Key";
import PropTypes from "prop-types";
import React, { Component } from "react";
import store from "./store";
import { Pointer, ShowOnHover } from "./StyleHelpers";

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
              onChange={event => this.setState({ value: event.target.value })}
              onKeyPress={event => event.which === 13 && this._handleSave()}
              value={this.state.value}
            />
            <Flex>
              <Pointer
                id="cancelCustomSchemaElementTitle"
                onClick={() => this.setState({ editing: false })}
              >
                <X />
              </Pointer>
              <Pointer
                id="saveCustomSchemaElementTitle"
                onClick={this._handleSave}
              >
                <Check />
              </Pointer>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyContent="space-between" alignItems="center" p={3}>
            <Flex alignItems="center">
              <File size={18} />
              <Text
                id="toggleSchemaElementTitleEdit"
                ml={1}
                onClick={() => this.setState({ editing: true })}
              >
                <Key {...this.props} />
              </Text>
            </Flex>
            <ShowOnHover>
              <Flex>
                <Pointer
                  id="toggleSchemaElementTitleEdit"
                  mr={1}
                  onClick={() => this.setState({ editing: true })}
                >
                  <Edit3 size={18} />
                </Pointer>
                <Pointer
                  id="removeSchemaElement"
                  onClick={() =>
                    store.elements.splice(
                      store.elements.findIndex(
                        schema => schema.id === this.props.id
                      ),
                      1
                    )
                  }
                >
                  <Trash size={18} />
                </Pointer>
              </Flex>
            </ShowOnHover>
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
