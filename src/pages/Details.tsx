import React from "react";
import styled from "styled-components";
import { ContextConsumer, Movie } from "../App";
import { Container } from "react-bootstrap";

import { MdStar } from "react-icons/md";

export const Details = (props: Movie) => {
	return (
		<>
			<ContextConsumer>
				{context =>
					context && (
						<Container>
							<Wraper>
								<MovieCard>
									{" "}
									<CardImage
										src={`https://image.tmdb.org/t/p/w500/${context.details.poster_path}`}
										alt={context.details.title}
									/>
								</MovieCard>
								<Description>
									{" "}
									<Title>
										<Official href={context.details.homepage} target="_blank">
											{context.details.title}
										</Official>

										<Year>({context.details.release_date.slice(0, 4)})</Year>
									</Title>
									<Rate>
										<h3>
											{context.details.vote_average}
											<MdStar color="#fff9" size={25} />
										</h3>
									</Rate>{" "}
									<br />
									<Genres>
										{" "}
										{context.details.genres.map(
											(res: { id: number; name: string }) => (
												<span>{res.name} </span>
											)
										)}
									</Genres>
									<Overview>
										<h5>Overview</h5>
										{context.details.overview}
									</Overview>
								</Description>
								{/* <div>{context.credit}</div> */}
							</Wraper>
						</Container>
					)
				}
			</ContextConsumer>
		</>
	);
};

const Official = styled.a`
	text-decoration: none;
	color: inherit;
	:hover {
		text-style: none;
		text-decoration: none;
		color: #fffd;
	}
`;
const MovieCard = styled.div`
	width: 250px;
	height: 380px;
	border-radius: 3px;
	margin-right: 80px;
`;
const CardImage = styled.img`
	width: inherit;
	height: inherit;
	object-fit: cover;

	border-radius: inherit;
	margin: -1px 0 0 -1px;
`;

const Description = styled.div`
	width: 50%;
	display: block;
`;
const Wraper = styled.div`
	display: flex;
	color: #fff9;
`;
const Title = styled.h1`
	font-weight: bold;
`;
const Year = styled.p`
	font-weight: bold;
	font-size: 27px;
	display: inline;
`;
const Overview = styled.div`
	text-overflow: wrap;

	font-size: 15px;
	margin-top: 10px;
`;
const Rate = styled.div`
	display:inline-flex
	font-weight: bold;
	font-size: 17px;
	
`;
const Genres = styled.h6`
	display: inline-block;
`;
