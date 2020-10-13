import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { Cards } from "../componets/MovieCard";
import { ContextConsumer } from "../App";
import { Movie } from "../App";
import { GiStarFormation } from "react-icons/gi";
import Particles from "react-particles-js";
import "../App.scss";
export const Home = () => {
  return (
    <ContextConsumer>
      {(context) =>
        context && (
          <div>
            <Jumbotron
              fluid
              className="jumbotron"
              style={{ background: `${"./images/24.jpg"}` }}
            >
              <h1>Popular movies </h1>

              <Particles
                params={{
                  particles: {
                    number: {
                      value: 50,
                    },
                    size: {
                      value: 3,
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse",
                      },
                    },
                  },
                }}
              />
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
