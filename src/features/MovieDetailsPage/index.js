import React from "react";
import HeroBanner from "common/HeroBanner";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import peoplePoster from "assets/images/png/posterPeople.png";
import { useSelector } from "react-redux";
import { selectMovies } from "features/moviesSlice";

const MovieDetailsPage = () => {
	const movies = useSelector(selectMovies);
	const movie = movies[1];
	const baseURL = "http://image.tmdb.org/t/p/w500";
	const backdropURL = "http://image.tmdb.org/t/p/original";

	const people = [
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
		{
			poster: peoplePoster,
			header: "Liu Yifei",
		},
	];

	return (
		<>
			<HeroBanner backdrop={`${backdropURL}${movie.backdrop_path}`}/>
			<Container detailsPage={true}>
				<Tile
					horizontal={"horizontal"}
					poster={`${baseURL}${movie.poster_path}`}
					detailsTitle={movie.title}
					detailsYear={movie.release_date}
					detailsReleaseDate={movie.release_date}
					tags={movie.genre_ids}
					detalReview={movie.vote_count}
					description={movie.overview}
				/>

				<Tiles
					peopleList={true}
					title="Cast"
					body={people.map((person) => (
						<Tile peopleList={true} poster={person.poster} header={person.header} subheader={"Mulan"} />
					))
					}
				/>

				<Tiles
					peopleList={true}
					title="Crew"
					body={people.map((person) => (
						<Tile peopleList={true} poster={person.poster} header={person.header} subheader={"Mulan"} />
					))
					}
				/>
			</Container>
		</>
	)
};

export default MovieDetailsPage;