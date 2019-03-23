import styled from "styled-components";
import theme from "./theme";
import PropTypes from "prop-types";

const Input = styled.input`
  appearance: none;
  padding: 7px 16px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: ${props => theme.colors[props.type]}
  background-color: ${props =>
    theme.colors[props.type === "black" ? "white" : "black"]}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props =>
      theme.colors[
        props.type === "black" ? "white" : "black"
      ]}, 0 0 0 3px ${props => theme.colors[props.type]};
  }
`;

Input.propTypes = {
  type: PropTypes.oneOf(["black", "white"])
};

export default Input;
