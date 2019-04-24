import makeFetchDuck from './makeFetchDuck';

const {
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movieDetails', 'http://www.omdbapi.com/?apikey=a3748959&i=');

export const fetchMovieAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;

    dispatch(fetchAsyncActionCreator(imdbID));
};

export default reducer;