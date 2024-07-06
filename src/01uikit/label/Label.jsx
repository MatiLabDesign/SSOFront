import React from "react";
import { StyledLabel } from "../01styled-components/StyledLabel";

const Label = ({ label }) => {
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
    </div>
  );
};

export default Label;
