import React from "react";
import { useDispatch } from "react-redux";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonWrapper, StyledButton, PageCounter, Quantity, StyledFontAwesomeIcon, PaginationText } from "./styled";

const Pagination = ({
  currentPage,
  lastPage,
  setCurrentPageFirst,
  decreaseCurrentPage,
  increaseCurrentPage,
  setCurrentPageLast }) => {
  const dispatch = useDispatch();
  return (
    <ButtonWrapper>
      <StyledButton
        disabled={currentPage === 1 ? "disabled" : ""}
        onClick={() => dispatch(setCurrentPageFirst())}
      >
        <StyledFontAwesomeIcon
          disabled={currentPage === 1 ? "disabled" : ""}
          icon={faAngleLeft}
        />
        <StyledFontAwesomeIcon
          disabled={currentPage === 1 ? "disabled" : ""}
          formobile={"formobile"}
          icon={faAngleLeft}
        />
        <PaginationText>First</PaginationText>
      </StyledButton>
      <StyledButton
        disabled={currentPage === 1 ? "disabled" : ""}
        onClick={() => dispatch(decreaseCurrentPage())}
      >
        <StyledFontAwesomeIcon
          disabled={currentPage === 1 ? "disabled" : ""}
          icon={faAngleLeft}
        />
        <PaginationText>Previous</PaginationText>

      </StyledButton>
      <PageCounter>
        Page
                <Quantity>{currentPage}</Quantity>
                of
                <Quantity>{lastPage}</Quantity>
      </PageCounter>
      <StyledButton
        disabled={currentPage === lastPage ? "disabled" : ""}
        onClick={() => dispatch(increaseCurrentPage())}
      >
        <StyledFontAwesomeIcon
          icon={faAngleRight}
          disabled={currentPage === lastPage ? "disabled" : ""}
        />
        <PaginationText>Next</PaginationText>
      </StyledButton>
      <StyledButton
        last
        disabled={currentPage === lastPage ? "disabled" : ""}
        onClick={() => dispatch(setCurrentPageLast(lastPage))}
      >
        <StyledFontAwesomeIcon
          icon={faAngleRight}
          disabled={currentPage === lastPage ? "disabled" : ""}
        />
        <StyledFontAwesomeIcon
          formobile={"formobile"}
          disabled={currentPage === lastPage ? "disabled" : ""}
          icon={faAngleRight}
        />
        <PaginationText>Last</PaginationText>
      </StyledButton>
    </ButtonWrapper>
  )
};

export default Pagination