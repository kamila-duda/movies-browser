import React from "react";
import { ButtonWrapper, StyledButton, PageCounter, Quantity, StyledFontAwesomeIcon, PaginationText } from "./styled";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
    return (
        <ButtonWrapper>
            <StyledButton noActive>
                <StyledFontAwesomeIcon noActive icon={faAngleLeft} />
                <StyledFontAwesomeIcon noActive forMobile icon={faAngleLeft} />
                <PaginationText>First</PaginationText>
            </StyledButton>
            <StyledButton noActive>
                <StyledFontAwesomeIcon noActive icon={faAngleLeft} />
                <PaginationText>Previous</PaginationText>
            </StyledButton>
            <PageCounter>
                Page
                <Quantity>1</Quantity>
                of
                <Quantity>500</Quantity>
            </PageCounter>
            <StyledButton>
                <StyledFontAwesomeIcon  icon={faAngleRight} />
                <PaginationText>Next</PaginationText>
            </StyledButton>
            <StyledButton last>
                <StyledFontAwesomeIcon icon={faAngleRight} />
                <StyledFontAwesomeIcon forMobile icon={faAngleRight} />
                <PaginationText>Last</PaginationText>
            </StyledButton>
        </ButtonWrapper>
    )
};

export default Pagination