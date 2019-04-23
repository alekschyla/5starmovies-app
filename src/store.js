import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './state/auth';
import { startListeningToAuthChangeAsyncActionCreator } from './state/auth';
import movies from './state/movies';
import movieDetailsFetch from './state/movieDetailsFetch';
import movieDetails from './state/movieDetails';

const rootReducer = combineReducers({
    auth,
    movies,
    movieDetailsFetch,
    movieDetails,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

store.dispatch(startListeningToAuthChangeAsyncActionCreator());