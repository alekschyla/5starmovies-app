import React from 'react';
import OmdbDetails from './OmdbDetails';
import MovieComments from './MovieComments';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import styles from '../../styles';
import { fetchMovieAsyncActionCreator } from '../../state/movieDetailsFetch';
import { fetchMovieCommentsAsyncActionCreator } from '../../state/movieCommentsFetch';
import { setImdbIDActionCreator } from '../../state/movieDetails';

class MovieDetails extends React.Component {
    componentDidMount() {
        this.props._setImdbID(this.props.match.params.id);
        this.props._fetchMovieDetails();
        this.props._fetchMovieComments();
    };

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
    _movieComments: state.movieCommentsFetch.data,
    _isLoading: state.movieDetailsFetch.isLoading,
    _isError: state.movieDetailsFetch.isError,
    _isLoadingComments: state.movieCommentsFetch.isLoading,
    _isErrorComments: state.movieCommentsFetch.isError,
});

const mapDispatchToProps = dispatch => ({
    _fetchMovieDetails: () => dispatch(fetchMovieAsyncActionCreator()),
    _fetchMovieComments: () => dispatch(fetchMovieCommentsAsyncActionCreator()),
    _setImdbID: (id) => dispatch(setImdbIDActionCreator(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MovieDetails);