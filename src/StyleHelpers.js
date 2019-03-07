import { Box } from "rebass";
import styled from "styled-components";

export const Relative = styled(Box)`
  position: relative;
  width: 100%;
`;

export const Absolute = styled(Box)`
  position: absolute;
  width: 100%;
`;

export const Pointer = styled(Box)`
  cursor: pointer;
`;

export const Sticky = styled(Box)`
  position: sticky;
  top: 0;
`;

export const ShowOnHover = styled(Box)`
  opacity: 0;
  pointer-events: none;

  *:hover > & {
    opacity: 1;
    pointer-events: auto;
  }
`;
