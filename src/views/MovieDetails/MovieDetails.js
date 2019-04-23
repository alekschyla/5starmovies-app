import React from 'react';
import OmdbDetails from './OmdbDetails';
import MovieComments from './MovieComments';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import styles from '../../styles';
import { fetchMovieAsyncActionCreator } from '../../state/movieDetailsFetch';
import { setImdbIDActionCreator } from '../../state/movieDetails';

const omdbApiPath = 'http://www.omdbapi.com/?apikey=a3748959&i=';
const firebaseApiPath = 'https://starmovies-app.firebaseio.com/';

class MovieDetails extends React.Component {
    state = {
        // imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        // movieData: null,
        movieComments: null,
        isLoading: false,
        isError: false,
    };

    componentDidMount() {
        this.props._setImdbID(this.props.match.params.id);
        this.props._fetchMovieDetails(this.props._imdbID);

        // this.setState({ isLoading: true });

        // fetch(`${omdbApiPath}${this.state.imdbID}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.Response !== "False") this.setState({ movieData: data })
        //     })
        //     .catch(() => this.setState({ isError: true }));

        fetch(`${firebaseApiPath}comments/${this.props._imdbID}.json`)
            .then(response => response.json())
            .then(data => this.setState({ movieComments: data }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        return (
            <div>
                {
                    this.props._imdbID === ""
                        ? "Nie wskazano żadnego filmu do wyświetlenia. Przejdź do wyszukiwarki filmów i kliknij SZCZEGÓŁY, aby zobaczyć szczegóły filmu."
                        : this.props._isError
                            ? "Wystąpił błąd, spróbuj ponownie."
                            : this.props._isLoading
                                ? "Ładujemy dane, prosimy o cierpliwość..."
                                : !this.props._movieData
                                    ? "Nie udało się wyświetlić danych. Wróć do wyszukiwarki filmów i spróbuj ponownie."
                                    : !this.props._movieComments
                                        ? <div>
                                            <OmdbDetails
                                                movieData={this.props._movieData}
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
                                                movieData={this.props._movieData}
                                            />
                                            <MovieComments
                                                movieComments={this.props._movieComments}
                                            />
                                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _imdbID: state.movieDetails.imdbID,
    _movieData: state.movieDetailsFetch.data,
    _movieComments: state.movieDetails.movieComments,
    _isLoading: state.movieDetailsFetch.isLoading,
    _isError: state.movieDetailsFetch.isError,
});

const mapDispatchToProps = dispatch => ({
    _fetchMovieDetails: (queryParams) => dispatch(fetchMovieAsyncActionCreator(queryParams)),
    _setImdbID: (id) => dispatch(setImdbIDActionCreator(id)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieDetails);