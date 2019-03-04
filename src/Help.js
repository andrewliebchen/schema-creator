import React from "react";
import Card from "./Card";
import { Text, Heading } from "rebass";
import Button from "./Button";
import styled from "styled-components";
import store from "./store";
import { view } from "react-easy-state";
import { Pointer } from "./StyleHelpers";
import { HelpCircle } from "react-feather";
import { Fade, SlideDown } from "./Animation";

const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  max-width: 500px;
  z-index: 100;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
`;

const Help = props => (
  <div style={{ position: "relative", zIndex: 9 }}>
    <Pointer onClick={() => (store.showHelp = true)}>
      <HelpCircle />
    </Pointer>

    <Fade in={store.showHelp} timeout={200}>
      <Background onClick={() => (store.showHelp = false)} />
    </Fade>

    <Center>
      <SlideDown in={store.showHelp} timeout={200}>
        <Card p={4}>
          <Heading mb={3}>What is this?</Heading>
          <Text mb={4}>
            Schema Creator helps you generate an unlimited amount of random data
            from a schema you define. Export as a CSV or JSON.
          </Text>
          <Button onClick={() => (store.showHelp = false)}>Okay!</Button>
        </Card>
      </SlideDown>
    </Center>
  </div>
);

export default view(Help);
