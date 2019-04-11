import React from 'react';
import OmdbDetails from './OmdbDetails';
import MovieComments from './MovieComments';
import { Paper } from '@material-ui/core';
import styles from '../../styles';

const omdbApiPath = 'http://www.omdbapi.com/?apikey=a3748959&i=';
const firebaseApiPath = 'https://starmovies-app.firebaseio.com/';

class MovieDetails extends React.Component {
    state = {
        imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        movieData: null,
        movieComments: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`${omdbApiPath}${this.state.imdbID}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response !== "False") this.setState({ movieData: data })
            })
            .catch(() => this.setState({ isError: true }));

        fetch(`${firebaseApiPath}comments/${this.state.imdbID}.json`)
            .then(response => response.json())
            .then(data => this.setState({ movieComments: data }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                {
                    this.state.imdbID === ""
                        ? "Nie wskazano żadnego filmu do wyświetlenia. Przejdź do wyszukiwarki filmów i kliknij SZCZEGÓŁY, aby zobaczyć szczegóły filmu."
                        : this.state.isError
                            ? "Wystąpił błąd, spróbuj ponownie."
                            : this.state.isLoading
                                ? "Ładujemy dane, prosimy o cierpliwość..."
                                : !this.state.movieData
                                    ? "Nie udało się wyświetlić danych. Wróć do wyszukiwarki filmów i spróbuj ponownie."
                                    : !this.state.movieComments
                                        ? <div>
                                            <OmdbDetails
                                                movieData={this.state.movieData}
                                            />
                                            <Paper
                                                style={styles['OmdbDetails-paper']}
                                            >
                                                Do tego filmu nie dodano jeszcze żadnych komentarzy.
                                            </Paper>
                                        </div>
                                        :
                                        <div>
                                            <OmdbDetails
                                                movieData={this.state.movieData}
                                            />
                                            <MovieComments
                                                movieComments={this.state.movieComments}
                                            />
                                        </div>
                }
            </div>
        )
    }
}

export default MovieDetails;