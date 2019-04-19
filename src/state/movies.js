import makeFetchDuck from './makeFetchDuck'

const {
    fetchAsyncActionCreator,
    reducer,
} = makeFetchDuck('movies', 'http://www.omdbapi.com/?apikey=526cfe10&s=')

export const fetchMoviesAsyncActionCreator = fetchAsyncActionCreator

export default reducer