import React from "react";
import spinner from "../../images/spinner.svg";
import { StyledSpinner } from "./styled";

const Spinner = () => {
  return <StyledSpinner src={spinner} alt="loading" />;
};

export default Spinner;
