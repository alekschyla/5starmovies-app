import makeFetchDuck from './makeFetchDuck'

const {
    fetchAllAsyncActionCreator,
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movies', 'http://www.omdbapi.com/?apikey=526cfe10&s=');

export const fetchMoviesAsyncActionCreator = fetchAsyncActionCreator;

export const fetchAllMoviesAsyncActionCreator = fetchAllAsyncActionCreator;

export default reducer;
