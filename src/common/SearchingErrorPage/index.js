import React from "react";
import searchErrorImage from "assets/images/svg/Picture.svg"

import { Wrapper, HeaderTitle, StyledImage } from "./styled"

const SearchingErrorPage = () => {

    return (
        <Wrapper>
            <HeaderTitle>Sorry, there are no results for "Muan"</HeaderTitle>
            <StyledImage src={searchErrorImage} alt="Searching Error" />
        </Wrapper>
    )

};

export default SearchingErrorPage;
