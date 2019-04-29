import React from 'react';
import OmdbDetails from './OmdbDetails';
import MovieComments from './MovieComments';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import styles from '../../styles';
import { fetchMovieAsyncActionCreator } from '../../state/movieDetailsFetch';
import { fetchMovieCommentsAsyncActionCreator } from '../../state/movieCommentsFetch';
import { setImdbIDActionCreator } from '../../state/movieDetails';
import Loading from "../../components/Loading";
import SnackBar from "../../components/SnackBar";

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
                        ? <SnackBar
                            warning={true}
                            message={"Nie wskazano żadnego filmu do wyświetlenia. Przejdź do wyszukiwarki filmów i kliknij SZCZEGÓŁY, aby zobaczyć szczegóły filmu."}
                        />
                        : this.props._isError
                            ? <SnackBar
                                error={this.props._isError}
                            />
                            : this.props._isLoading
                                ? <Loading />
                                : !this.props._movieData
                                    ? <SnackBar
                                        warning={true}
                                        message={"Nie udało się wyświetlić danych. Wróć do wyszukiwarki filmów i spróbuj ponownie."}
                                    />
                                    : !this.props._movieComments
                                        ? <div>
                                            <OmdbDetails
                                                movieData={this.props._movieData}
                                                averageRating={0}
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
                                                averageRating={Object.values(this.props._movieComments).reduce((ratings, comment) => ratings += comment.mark, 0) / Object.values(this.props._movieComments).length}
                                            />
                                            <MovieComments
                                                movieComments={this.props._movieComments}
                                                userUid={this.props._userUid}
                                            />
                                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _userUid: state.auth.user && state.auth.user.uid,
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