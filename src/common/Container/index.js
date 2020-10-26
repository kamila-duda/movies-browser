import React from "react";
import { StyledContainer } from "./styled";

const Container = (props) => {
  return (
    <StyledContainer
      detailsPage={props.detailsPage === true ? "detailsPage" : ""}
      peopleDetails={props.peopleDetails === true ? "peopleDetails" : ""}
    >
      {props.children}
    </StyledContainer>
  );
};

export default Container;
