import React from "react";
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
}) => {
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
          onPageChange(+page - 1);
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
                <Quantity>{page === null ? 1 : page}</Quantity>
                of
                <Quantity>{lastPage}</Quantity>
      </PageCounter>
      <StyledButton
        disabled={+page === lastPage ? "disabled" : ""}
        onClick={() => {
          onPageChange(page === null ? 1 + 1 : +page + 1);
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