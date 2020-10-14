import React from "react";
import { ButtonWrapper, StyledButton, PageCounter, Quantity, StyledFontAwesomeIcon, PaginationText } from "./styled";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
    return (
        <ButtonWrapper>
            <StyledButton noactive={"noactive"}>
                <StyledFontAwesomeIcon noactive={"noactive"} icon={faAngleLeft} />
                <StyledFontAwesomeIcon noactive={"noactive"} formobile={"formobile"} icon={faAngleLeft} />
                <PaginationText>First</PaginationText>
            </StyledButton>
            <StyledButton noactive={"noactive"}>
                <StyledFontAwesomeIcon noactive={"noactive"} icon={faAngleLeft} />
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
                <StyledFontAwesomeIcon formobile={"formobile"} icon={faAngleRight} />
                <PaginationText>Last</PaginationText>
            </StyledButton>
        </ButtonWrapper>
    )
};

export default Pagination