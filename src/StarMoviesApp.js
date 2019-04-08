import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import Dashboard from './views/Dashboard';
import Search from './views/Search';
import WatchList from './views/WatchList';
import AddRating from './views/AddRating';


const StarMoviesApp = () => (

    <Router>
        <Navigation />
        <Route exact path={"/"} component={Dashboard}/>
        <Route path={"/search"} component={Search}/>
        <Route path={"/watch-list"} component={WatchList}/>
        <Route path={"/add-rating"} component={AddRating}/>
    </Router>

);

export default StarMoviesApp