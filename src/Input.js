import styled from "styled-components";
import theme from "./theme";

const Input = styled.input`
  appearance: none;
  padding: 7px 16px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px white, 0 0 0 3px ${theme.colors.black};
  }
`;

export default Input;
