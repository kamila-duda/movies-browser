import React from "react";
import { StyledContainer } from "./styled";

const Container = (props) => {
  return (
    <StyledContainer detailsPage={props.detailsPage === true ? "detailsPage" : ""}>
      {props.children}
    </StyledContainer>
  )
};

export default Container;
