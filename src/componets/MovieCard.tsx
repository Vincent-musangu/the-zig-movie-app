import React from "react";
import "../scss/card.scss";
import { Image, Container } from "react-bootstrap";
import { Movie, ContextConsumer } from "../App";
import { Link } from "react-router-dom";

export const Cards: React.FC<Movie> = props => {
	return (
		<>
			<ContextConsumer>
				{context =>
					context && (
						<Container>
							{" "}
							<Link
								to={`/movies/${props.title}`}
								style={{ color: "#555" }}
								onClick={() => context.movieDetail(props.id)}
							>
								<Image
									className="card_image"
									src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
									alt={props.title}
									thumbnail
								/>
							</Link>
							<div className="card_title">
								<Link
									to={`/movies/${props.title}`}
									style={{ color: "#fff9" }}
									onClick={() => context.movieDetail(props.id)}
								>
									{props.title}
								</Link>

								<p style={{ color: "#777", marginTop: "0px" }}>
									{props.release_date?.slice(0, 4)}
								</p>
							</div>
						</Container>
					)
				}
			</ContextConsumer>
		</>
	);
};
