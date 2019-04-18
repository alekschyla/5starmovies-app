import React from 'react';
import SearchedList from "../../components/SearchedList";

import { database, auth } from '../../firebaseConfig';

class WatchList extends React.Component {
    state = {
        movies: null,
    }

    componentDidMount() {
        const user = auth.currentUser;
        
        database.ref(`users/${user.uid}/watchlist`).on(
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
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default WatchList