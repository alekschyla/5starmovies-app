import React from 'react';
import { getWatchlistMovieListFromFirebaseAsyncActionCreator } from '../../state/movieList';

import UnifiedList from '../UnifiedList'

const WatchList = () => (
  <UnifiedList
    actionCreator={getWatchlistMovieListFromFirebaseAsyncActionCreator}
    nameOfMovieList={'watchlistMovieList'}
    description={'Filmy i seriale do obejrzenia:'}
  />
)

export default WatchList;