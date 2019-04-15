import React from 'react';
import SearchedList from "../../components/SearchedList";

import { database } from '../../firebaseConfig';

class FavMovies extends React.Component {
    state = {
        movies: null,
    }

    componentDidMount() {
        database.ref('favourites').on(
            'value',
            (snapshot) => {
                Promise.all(
                    Object.keys(snapshot.val())
                        .map(
                            movieId => (
                                fetch(`http://www.omdbapi.com/?apikey=526cfe10&i=${movieId}`)
                                    .then(r => r.json())
                            )
                        )
                )
                    .then((movies) => this.setState({
                        movies: movies
                    }))
            }
        )
    }

    render() {
        return (
            <div>
                <SearchedList
                    movies={this.state.movies}
                />
            </div>
        )
    }
}

export default FavMovies;