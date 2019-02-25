import { Card as Base, Flex, Text, Box } from "rebass";
import { Check, X } from "react-feather";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";
import store from "./store";
import { view } from "react-easy-state";

const Root = styled(Base)`
  cursor: ${props => props.hover && "pointer"};

  &:hover {
    box-shadow: ${props => props.hover && "inset 0 0 0 2px black"};
  }
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: this.props.value
    };
  }

  render() {
    return (
      <Root
        border={1}
        borderColor="black"
        bg={this.props.selected && "black"}
        borderRadius={4}
        {...this.props}
      >
        {this.props.children || (
          <div>
            {this.state.editing ? (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                px={3}
                py={2}
              >
                <Input
                  value={this.state.value}
                  onChange={event =>
                    this.setState({ value: event.target.value })
                  }
                />
                <Flex>
                  <X onClick={() => this.setState({ editing: false })} />
                  <Check
                    onClick={() => {
                      store.elements.find(
                        element => element.id === this.props.element.id
                      ).userLabel = this.state.value;
                      this.setState({ editing: false });
                    }}
                  />
                </Flex>
              </Flex>
            ) : (
              <Flex justifyContent="space-between" alignItems="center" p={3}>
                <Flex alignItems="center">
                  {this.props.icon}
                  <Text
                    ml={1}
                    fontWeight={this.props.fontWeight}
                    color={this.props.selected ? "white" : "black"}
                    onClick={() =>
                      this.props.editable && this.setState({ editing: true })
                    }
                  >
                    {this.props.text}
                  </Text>
                </Flex>
                {this.props.action}
              </Flex>
            )}
          </div>
        )}
      </Root>
    );
  }
}

Card.propTyeps = {
  selected: PropTypes.boolean,
  fontWeight: PropTypes.oneOf(["normal", "bold"]),
  text: PropTypes.string,
  icon: PropTypes.node,
  action: PropTypes.node,
  hover: PropTypes.boolean,
  editable: PropTypes.boolean,
  value: PropTypes.string,
  element: PropTypes.object
};

export default view(Card);
