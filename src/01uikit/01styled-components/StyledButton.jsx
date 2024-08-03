import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  bottom: 0;
  padding: 12px 35px;
  background-color: #006755;
  color: #fff;
  border-radius: 5px;
  border: none;
  
  font-weight: bold;
  &:hover {
    background-color: #034036;
    color: #fff;
  }
`;

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
