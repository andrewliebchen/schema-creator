import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "./theme";

const Input = styled.input`
  box-sizing: border-box;
  appearance: none;
  padding: 7px 16px;
  font-size: inherit;
  border: 1px solid;
  border-radius: 4px;
  color: ${props => theme.colors[props.colorTheme]}
  background-color: ${props =>
    props.colorTheme === "black" ? theme.colors.white : theme.colors.black};
  width: ${props => props.width};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${props =>
      props.colorTheme === "black"
        ? theme.colors.white
        : theme.colors.black}, 0 0 0 3px ${props =>
  theme.colors[props.colorTheme]};
  }
`;

Input.defaultProps = {
  colorTheme: "black"
};

Input.propTypes = {
  colorTheme: PropTypes.oneOf(["black", "white"]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;
