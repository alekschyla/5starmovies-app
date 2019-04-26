import makeFetchDuck from './makeFetchDuck';

const {
    clearDataActionCreator,
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movieComments', 'https://starmovies-app.firebaseio.com/comments/');

export const fetchMovieCommentsAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;

    dispatch(fetchAsyncActionCreator(`${imdbID}.json`));
};

export const clearMovieCommentsDataActionCreator = clearDataActionCreator;

export default reducer;