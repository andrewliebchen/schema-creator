import transition from "styled-transition-group";
import styled from "styled-components";
import { Box } from "rebass";

export const Relative = styled(Box)`
  position: relative;
  width: 100%;
`;

export const Absolute = styled(Box)`
  position: absolute;
  width: 100%;
`;

export const SlideIn = transition.div.attrs({
  unmountOnExit: true
})`
  &:enter {
    opacity: 0;
    transform: translateX(-150%);
  }
  &:enter-active {
    opacity: 1
    transform: translateX(0);
    transition:  200ms ease-in-out;
  }
  &:exit {
    opacity: 1;
    transform: translateX(0);
  }
  &:exit-active {
    opacity: 0;
    transform: translateX(-150%);
    transition:  200ms ease-in-out;
  }
`;
