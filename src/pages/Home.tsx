import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Cards } from "../componets/MovieCard";
import { ContextConsumer } from "../App";
import { Movie } from "../App";
import { GiStarFormation } from "react-icons/gi";
// import not_found from "../images/not-found.jpg";
import "../App.scss";
export const Home = () => {
	return (
		<ContextConsumer>
			{context =>
				context && (
					<div>
						<Jumbotron fluid className="jumbotron">
							<Container>
								{" "}
								<GiStarFormation size={40} color="red" />
								<h2>Popular Movies</h2>
								<h5>A The Zig Challenge</h5>
							</Container>
						</Jumbotron>

						{context.movies?.map((movies: Movie) => (
							<div className=" movies" key={movies.id}>
								<Cards
									id={movies.id}
									// details={() => context.movieDetail(movies.id)}
									popularity={movies.popularity}
									poster_path={movies.poster_path}
									vote_average={movies.vote_average}
									title={movies.title}
									release_date={movies.release_date}
								/>
							</div>
						))}
					</div>
				)
			}
		</ContextConsumer>
	);
};
