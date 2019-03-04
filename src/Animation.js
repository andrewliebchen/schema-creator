import transition from "styled-transition-group";

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

export const SlideUp = transition.div.attrs({
  unmountOnExit: true
})`
  &:enter {
    transform: translateY(100%);
  }
  &:enter-active {
    transform: translateY(0);
    transition:  150ms ease-in-out;
  }
  &:exit {
    transform: translateY(0);
  }
  &:exit-active {
    transform: translateY(100%);
    transition:  150ms ease-in-out;
  }
`;

export const SlideDown = transition.div.attrs({
  unmountOnExit: true
})`
  &:enter {
    opacity: 0;
    transform: scale(1.25);
    filter: blur(100px);
  }
  &:enter-active {
    opacity: 1
    transform: scale(1);
    filter: blur(0);
    transition:  150ms linear;
  }
  &:exit {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
  &:exit-active {
    opacity: 0;
    transform: scale(1.25);
    filter: blur(100px);
    transition:  150ms linear;
  }
`;

export const Fade = transition.div.attrs({
  unmountOnExit: true
})`
  &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition:  200ms linear;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition:  200ms linear;
  }
`;
