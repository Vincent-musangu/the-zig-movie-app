import React, { ChangeEvent } from "react";
import "../scss/navigation.scss";
import { GiStarFormation } from "react-icons/gi";

import { Navbar, FormControl, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../App";

export const Navigation: React.FC = () => {
	return (
		<>
			<ContextConsumer>
				{context =>
					context && (
						<Navbar bg="danger" fixed="top" variant="dark">
							<Nav className="mr-auto">
								<Navbar.Brand as={Link} to="/home">
									<GiStarFormation size={40} color="white" />
									Five Stars Movies
								</Navbar.Brand>{" "}
							</Nav>
							<Form style={{ display: "flex", flexDirection: "row" }}>
								<FormControl
									size="sm"
									type="text"
									placeholder="Search"
									className="mr-sm-2"
									style={{
										backgroundColor: "transparent",
										color: "white"
									}}
									onChange={(event: ChangeEvent<HTMLInputElement>) => {
										context.setSearch(event.target.value);
									}}
								/>{" "}
							</Form>
						</Navbar>
					)
				}
			</ContextConsumer>
		</>
	);
};
export const SideNavBar: React.FC = () => {
	return (
		<>
			<div id="sidebar">
				<nav>
					<Nav.Link className="sidenavlinks container"> Recommended</Nav.Link>
					<Nav.Link className="sidenavlinks container"> Trending</Nav.Link>
					<Nav.Link className="sidenavlinks container">New Releases</Nav.Link>
				</nav>
			</div>
		</>
	);
};
