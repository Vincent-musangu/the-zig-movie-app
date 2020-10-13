import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // RouteComponentProps,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
// import { useParams } from "react-router";
import "./App.scss";
import axios from "axios";
import { Navigation } from "./componets/Navigation";

import { Home } from "./pages/Home";
import { Search } from "./componets/Search";

// import createHistory from "history/createBrowserHistory";
import { Details } from "./pages/Details";

// export const history = createHistory();
export const contextProvider = React.createContext<any>(null);
export const ContextConsumer = contextProvider.Consumer;

export interface Movie {
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  poster_path?: string;
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: any;
  title?: string;
  vote_average?: number;
  overview?: string;
  release_date?: string;
}
type TParams = { id: string };

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [details, setDetails] = useState<Movie>();
  const [credit, setCredit] = useState();
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(1);
  const [searched, setSearched] = useState<Movie[]>();
  // const movieId = useRouteMatch<TParams>();
  // console.log(movieId);
  //infinite scroll implimentationl;
  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      setPages(pages + 1);
    }
  };
  useEffect(() => {
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=e76c5953047a45b321529afcee0a5460&query=${search} `
      )
      .then((res) => {
        const results = res.data.results;
        setSearched(results);
        // console.log("found", searched);
      });
    // console.log("sent", search);
  }, [search, searched]);
  useEffect(() => {
    // popular movie request
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e76c5953047a45b321529afcee0a5460&language=en-US&page=${pages}`
      )
      .then((res) => {
        // console.log(res.data.results[0]);
        const movieData = res.data.results;

        setMovies((movies) => movies.concat(movieData));
        // console.log(movies);
      });
    movieDetail(" ");
  }, [pages]);
  // Function for geting movie details by id
  const movieDetail = (id: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e76c5953047a45b321529afcee0a5460`
      )
      .then((res) => {
        // console.log(details);
        setDetails(res.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=e76c5953047a45b321529afcee0a5460`
      )
      .then((res) => {
        // console.log(res.data);
        setCredit(res.data);
      });
    // return details;
  };
  const AppContext = {
    movies,
    details,
    searched,
    search,
    movieDetail,
    setSearch,
    credit,
  };
  return (
    <>
      <contextProvider.Provider value={AppContext}>
        <Router>
          <Navigation />
          <div className="app ">
            {AppContext.searched === undefined || "" || null ? (
              ""
            ) : (
              <div id="search">
                {AppContext.searched?.map((searched: Movie) => (
                  <div key={searched.id} className="container ">
                    <Search
                      id={searched.id}
                      poster_path={searched.poster_path}
                      title={searched.title}
                      release_date={searched.release_date}
                    />
                  </div>
                ))}
              </div>
            )}
            <Switch>
              <Route exact path="/home" component={Home} />
              <Redirect exact from="/" to="/home" />
              {details == null ? (
                <Redirect to="/home" />
              ) : (
                <Route
                  exact
                  path={`/movies/:${AppContext.details?.id}`}
                  component={Details}
                />
              )}
              <Route exact path={`/movie`} component={Details} />
            </Switch>
            {/* <Container>
							<div id="loadMore" onClick={() => setPages(pages + 1)}>
								<p>Load more </p>
							</div>
						</Container> */}
          </div>
        </Router>
        {/* <footer>staff</footer> */}
      </contextProvider.Provider>
    </>
  );
};

export default App;
