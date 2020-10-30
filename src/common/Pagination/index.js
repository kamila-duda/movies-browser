import React from "react";
import { useDispatch } from "react-redux";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useQueryParameter, useReplaceQueryParameter } from "hooks/useQueryParameter";
import {
  ButtonWrapper,
  StyledButton,
  PageCounter,
  Quantity,
  StyledFontAwesomeIcon,
  PaginationText,
} from "./styled";

const Pagination = ({
  currentPage,
  lastPage,
  setCurrentPageFirst,
  decreaseCurrentPage,
  increaseCurrentPage,
  setCurrentPageLast,
}) => {
  const dispatch = useDispatch();
  const replaceQueryParameter = useReplaceQueryParameter();
  const page = useQueryParameter("page");

  const onPageChange = (page) => {
    replaceQueryParameter({
      key: "page",
      value: page.toString(),
    });
  };

  return (
    <ButtonWrapper>
      <StyledButton
        disabled={+page === 1 ? "disabled" : ""}
        onClick={() => {
          dispatch(setCurrentPageFirst())
          onPageChange(1);
        }}
      >
        <StyledFontAwesomeIcon
          disabled={+page === 1 ? "disabled" : ""}
          icon={faAngleLeft}
        />
        <StyledFontAwesomeIcon
          disabled={+page === 1 ? "disabled" : ""}
          formobile={"formobile"}
          icon={faAngleLeft}
        />
        <PaginationText>First</PaginationText>
      </StyledButton>
      <StyledButton
        disabled={+page === 1 ? "disabled" : ""}
        onClick={() => {
          dispatch(decreaseCurrentPage())
          onPageChange(currentPage - 1);
        }}
      >
        <StyledFontAwesomeIcon
          disabled={+page === 1 ? "disabled" : ""}
          icon={faAngleLeft}
        />
        <PaginationText>Previous</PaginationText>
      </StyledButton>
      <PageCounter>
        Page
                <Quantity>{page === null ? currentPage : page}</Quantity>
                of
                <Quantity>{lastPage}</Quantity>
      </PageCounter>
      <StyledButton
        disabled={+page === lastPage ? "disabled" : ""}
        onClick={() => {
          dispatch(increaseCurrentPage())
          onPageChange(currentPage + 1);
        }}
      >
        <StyledFontAwesomeIcon
          icon={faAngleRight}
          disabled={+page === lastPage ? "disabled" : ""}
        />
        <PaginationText>Next</PaginationText>
      </StyledButton>
      <StyledButton
        last
        disabled={+page === lastPage ? "disabled" : ""}
        onClick={() => {
          dispatch(setCurrentPageLast(lastPage))
          onPageChange(lastPage);
        }}

      >
        <StyledFontAwesomeIcon
          icon={faAngleRight}
          disabled={+page === lastPage ? "disabled" : ""}
        />
        <StyledFontAwesomeIcon
          formobile={"formobile"}
          disabled={+page === lastPage ? "disabled" : ""}
          icon={faAngleRight}
        />
        <PaginationText>Last</PaginationText>
      </StyledButton>
    </ButtonWrapper>
  )
};

export default Pagination