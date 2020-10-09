import React from "react";
import { ButtonWrapper, StyledButton, Arrow, PageCounter, Quantity } from "./styled";

const Pagination = () => {
    return (
        <ButtonWrapper>
            <StyledButton noActive>
                <Arrow noActive>{"<"}</Arrow>
                First
            </StyledButton>
            <StyledButton noActive>
                <Arrow noActive>{"<"}</Arrow>
                Previous
            </StyledButton>
            <PageCounter>
                Page
                <Quantity>1</Quantity>
                of
                <Quantity>500</Quantity>
            </PageCounter>
            <StyledButton>
                <Arrow>{">"}</Arrow>
                Next
            </StyledButton>
            <StyledButton last>
                <Arrow>{">"}</Arrow>
                Last
            </StyledButton>
        </ButtonWrapper>
    )
};

export default Pagination