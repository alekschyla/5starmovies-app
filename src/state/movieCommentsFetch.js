import makeFetchDuck from './makeFetchDuck';

const {
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movieComments', 'https://starmovies-app.firebaseio.com/comments/');

export const fetchMovieCommentsAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;

    dispatch(fetchAsyncActionCreator(`${imdbID}.json`));
};

export default reducer;