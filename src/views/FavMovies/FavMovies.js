import React from 'react';
import { getFavouriteMoviesListFromFirebaseAsyncActionCreator } from '../../state/movieList';

import UnifiedList from '../UnifiedList'

const WatchList = () => (
  <UnifiedList
    actionCreator={getFavouriteMoviesListFromFirebaseAsyncActionCreator}
    nameOfMovieList={'favouriteMoviesList'}
    description={'Ulubione filmy i seriale:'}
  />
)

export default WatchList;