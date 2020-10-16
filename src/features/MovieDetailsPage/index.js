import React from "react";
import HeroBanner from "common/HeroBanner";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import moviePoster from "assets/images/jpg/poster.jpg";
import starIcon from "assets/images/svg/star.svg"
import peoplePoster from "assets/images/png/posterPeople.png";

const MovieDetailsPage = () => {
	const movie = {
		poster: moviePoster,
		header: "Mulan",
		year: "2020",
		productionCountries: "China, United States of Amercia",
		releaseDate: "24.10.2020",
		tags: ["film", "film"],
		detalReview: starIcon,
		description:
			`A young Chinese maiden disguises herself as a male warrior in order to save her father. 
      Disguises herself as a male warrior in order to save her father. 
      A young Chinese maiden disguises herself as a male warrior in order to save her father.`,
	};

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
			<HeroBanner />
			<Container detailsPage={true}>
				<Tile
					horizontal={"horizontal"}
					poster={movie.poster}
					detailsTitle={movie.header}
					detailsYear={movie.year}
					detailsProduction={movie.productionCountries}
					detailsReleaseDate={movie.releaseDate}
					tags={movie.tags}
					detalReview={movie.detalReview}
					description={movie.description}
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