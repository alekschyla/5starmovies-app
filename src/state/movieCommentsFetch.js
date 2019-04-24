import makeFetchDuck from './makeFetchDuck';

const {
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movieComments', 'https://starmovies-app.firebaseio.com/comments/');

export const fetchMovieCommentsAsyncActionCreator = fetchAsyncActionCreator;

export default reducer;