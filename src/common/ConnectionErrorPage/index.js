
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toMoviesList, toPeopleList } from "routes";
import Picture from "./image/Danger.svg"
import { StyledImage, ErrorTitle, Wrapper, ErrorMessage, HomePageButton } from "./styled";
import { fetchPopularMovies } from "features/moviesSlice";
import { fetchPopularPeople } from "features/peopleSlice";

const ConnectionErrorPage = ({ pageType }) => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <StyledImage src={Picture} alt="ConnectionErrorImage" />
            <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
            <ErrorMessage>Please check your network connection and try again</ErrorMessage>
            {pageType === "movies" ? (
                <Link
                    to={toMoviesList()}
                    onClick={() => dispatch(fetchPopularMovies())}
                >
                    <HomePageButton>Back to home page</HomePageButton>
                </Link>
            ) : (
                    <Link
                        to={toPeopleList()}
                        onClick={() => dispatch(fetchPopularPeople())}
                    >
                        <HomePageButton>Back to home page</HomePageButton>
                    </Link>
                )}
        </Wrapper>
    )
};

export default ConnectionErrorPage