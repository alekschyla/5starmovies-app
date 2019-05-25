import makeFetchDuck from './makeFetchDuck';

const {
    clearDataActionCreator,
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movieDetails', 'http://www.omdbapi.com/?apikey=a3748959&i=');

export const fetchMovieAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;

    dispatch(fetchAsyncActionCreator(imdbID));
};

export const clearMovieDetailsActionCreator = clearDataActionCreator;

export default reducer;