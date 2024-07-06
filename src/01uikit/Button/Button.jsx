import React from "react";
import { StyledButton } from "../01styled-components/StyledButton";

const Button = ({ text, id, onClick }) => {
  return (
    <StyledButton
      className="btn-principal"
      id={id}
      onClick={() => {
        onClick
      }}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
