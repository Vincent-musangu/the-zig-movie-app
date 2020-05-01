import React from "react";
import { ContextConsumer, Movie } from "../App";
import Spinner from "react-bootstrap/Spinner";
import { Image } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
export const Search: React.FC<Movie> = props => {
	return (
		<ContextConsumer>
			{context =>
				context && (
					<Link
						to={`/movies/${props.title}`}
						style={{
							color: "#333",
							backgroundColor: "white",
							float: "right",
							width: "100%",
							padding: "5px  10px",
							// margin: "5px 0",
							transition: " 0.5s ease",
							fontSize: "14px"
						}}
						onClick={() => context.movieDetail(props.id)}
					>
						<p>
							<FiSearch size={14} /> {props.title}
						</p>
						<hr />
					</Link>
				)
			}
		</ContextConsumer>
	);
};
