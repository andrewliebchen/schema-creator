import { Box } from "rebass";
import React from "react";
import Sample from "./Sample";
import Schema from "./Schema";
import Toast from "./Toast";
import styled from "styled-components";
import theme from "./theme";

const Sidebar = styled(Box)`
  position: fixed;
  top: 0;
  width: ${theme.widths.sidebar};
  bottom: 0;
  background-color: ${theme.colors.white};
  z-index: 1;
`;

const Main = styled(Box)`
  padding-left: ${theme.widths.sidebar};
  width: 100vw;
  position: relative;
`;

const App = props => (
  <Box>
    <Sidebar>
      <Schema />
    </Sidebar>
    <Main>
      <Sample />
    </Main>
    <Toast />
  </Box>
);

export default App;
