import React from "react";
import spinner from "assets/images/svg/spinner.svg";
import { StyledWrapper, StyledSpinner } from "./styled";

const Spinner = () => {
  return <StyledWrapper>
    <StyledSpinner src={spinner} alt="loading" />
  </StyledWrapper>;
};

export default Spinner;
