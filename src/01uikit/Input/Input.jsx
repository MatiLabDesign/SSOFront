import React from "react";
import { StyledInput } from "../01styled-components/StyledInput";
import { StyledLabel } from "../01styled-components/StyledLabel";

const Input = ({ placeholder, id, type, label }) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput placeholder={placeholder} id={id} type={type} />
    </div>
  );
};

export default Input;
