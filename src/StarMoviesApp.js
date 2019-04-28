import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import Search from './views/Search';
import WatchList from './views/WatchList';
import AddRating from './views/AddRating';
import MovieDetails from './views/MovieDetails';
import FavMovies from './views/FavMovies';

const routes = [
    [true, "/", Dashboard],
    [false, "/search", Search],
    [false, "/watch-list", WatchList],
    [false, "/fav-movies", FavMovies],
    [true, "/add-rating/:id", AddRating],
    [true, ["/movie", "/movie/", "/movie/:id"], MovieDetails]
];

const StarMoviesApp = () => (
    <Router>
        <Navigation />
        {
            routes.map((route, index) => (
                <Route
                    key={index}
                    exact={route[0]}
                    path={route[1]}
                    component={route[2]}
                />
            ))
        }
    </Router>

);

export default StarMoviesApp