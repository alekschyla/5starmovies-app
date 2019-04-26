import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import Search from './views/Search';
import WatchList from './views/WatchList';
import AddRating from './views/AddRating';
import MovieDetails from './views/MovieDetails';
import FavMovies from './views/FavMovies';


const StarMoviesApp = () => (
    <Router>
        <Navigation />
        <Route
            exact
            path={"/"}
            component={Dashboard}
        />
        <Route
            path={"/search"}
            component={Search}
        />
        <Route
            path={"/watch-list"}
            component={WatchList}
        />
        <Route
            path={"/fav-movies"}
            component={FavMovies}
        />
        <Route
            exact
            path={"/add-rating/:id"}
            component={AddRating}
        />
        <Route
            exact
            path={["/movie", "/movie/", "/movie/:id"]}
            component={MovieDetails}
        />

    </Router>

);

export default StarMoviesApp