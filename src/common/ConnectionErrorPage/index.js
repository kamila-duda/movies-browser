import React from "react";
import Picture from "./image/Danger.svg"
import { StyledImage, ErrorTitle, Wrapper, ErrorMessage, HomePageButton } from "./styled";

const ConnectionErrorPage = () => {
    return (
        <Wrapper>
            <StyledImage src={Picture} alt="ConnectionErrorImage" />
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <ErrorMessage>Please check your network connection and try again</ErrorMessage>
            <HomePageButton>Back to home page</HomePageButton>
        </Wrapper>
    )
};

export default ConnectionErrorPage