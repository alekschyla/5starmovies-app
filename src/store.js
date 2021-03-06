import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth, { startListeningToAuthChangeAsyncActionCreator }  from './state/auth';
import movies from './state/movies';
import movieDetailsFetch from './state/movieDetailsFetch';
import movieDetails from './state/movieDetails';
import movieCommentsFetch from './state/movieCommentsFetch';
import addRating from './state/addRating';
import movieList from './state/movieList';
import dashboard from './state/dashboard';
import userProfile from './state/userProfile';

const rootReducer = combineReducers({
    auth,
    movies,
    movieDetailsFetch,
    movieDetails,
    movieCommentsFetch,
    addRating,
    movieList,
    dashboard,
    userProfile,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.dispatch(startListeningToAuthChangeAsyncActionCreator());