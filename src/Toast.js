import { CheckCircle } from "react-feather";
import { Flex, Text } from "rebass";
import { SlideUp } from "./Animation";
import { view } from "react-easy-state";
import PropTypes from "prop-types";
import React from "react";
import ReactInterval from "react-interval";
import store from "./store";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`;

const Toast = props => (
  <Wrapper>
    <SlideUp in={store.toast.show} timeout={200}>
      <Flex
        width={1}
        p={3}
        justifyContent="center"
        alignItems="center"
        bg="rgba(0, 0, 0, 0.9)"
      >
        <CheckCircle color="white" />
        <Text color="white" fontWeight="bold" ml={2}>
          {store.toast.message}
        </Text>
      </Flex>
    </SlideUp>
    <ReactInterval
      timeout={6000}
      enabled={store.toast}
      callback={() => (store.toast.show = false)}
    />
  </Wrapper>
);

Toast.propTypes = {
  message: PropTypes.string
};

export default view(Toast);
