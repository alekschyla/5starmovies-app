import React from 'react';
import { Redirect } from 'react-router-dom';
import { Paper, Fab, TextField } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import styles from '../../styles';
import { connect } from 'react-redux';
import { onClickSubmitFormAsyncActionCreator, setRedirectActionCreator, setDataCheckActionCreator } from '../../state/addRating';
import { fetchMovieAsyncActionCreator } from '../../state/movieDetailsFetch';
import { setImdbIDActionCreator } from '../../state/movieDetails';
import Error from '../../components/Error';
import Loading from "../../components/Loading";

class AddRating extends React.Component {
    state = {
        rating: 0,
        comment: "",
    }

    componentDidMount() {
        if (this.props._data === null || (this.props._data && this.props._responseError === "False")) {
            this.props._setImdbID(this.props.match.params.id);
            this.props._fetchMovieDetails();
        }
    }

    componentWillUnmount() {
        this.props._setRedirect(false);
        this.props._setDataCheck(true);
    };

    handleChange = (key) => (event) => this.setState({ [key]: event.target.value });

    changeRating = (newRating, name) => {
        this.setState({
            rating: newRating,
        })
    };

    render() {
        return (
            <div>
                {
                    this.props._redirect ?
                        <Redirect to={`/movie/:${this.props._imdbID}`} />
                        : this.props._isLoading ?
                            <Loading />
                            : this.props._movieTitle ?
                                <Paper
                                    style={styles['AddRating-paper']}
                                >
                                    <h1
                                        style={styles['AddRating-textfield']}
                                    >
                                        Oceń film: {this.props._movieTitle}
                                    </h1>
                                    <div
                                        style={styles['AddRating-textfield']}
                                    >
                                        <StarRatings
                                            rating={this.state.rating}
                                            starRatedColor='yellow'
                                            starHoverColor='green'
                                            changeRating={this.changeRating}
                                            numberOfStars={5}
                                            name='rating'
                                            isSelectable={true}
                                        />
                                    </div>
                                    <TextField
                                        multiline
                                        rows="4"
                                        label={"Twój komentarz do filmu"}
                                        style={styles['AddRating-textfield']}
                                        type={'text'}
                                        placeholder={'Tu wpisz komentarz do filmu (nie jest wymagany)'}
                                        value={this.state.comment}
                                        onChange={this.handleChange('comment')}
                                        variant="filled"
                                    />
                                    <Fab
                                        style={styles['AddRating-button']}
                                        color='secondary'
                                        variant='extended'
                                        onClick={() => this.props._onClickSubmitForm(this.state.rating, this.state.comment)}
                                    >
                                        Zapisz
                                    </Fab>
                                    {
                                        !this.props._dataCheck ?
                                            <Error
                                                isError={!this.props._dataCheck}
                                                message={"Nie można zapisać: podane dane są nieprawidłowe lub nie wypełniono wszystkich wymaganych pól."}
                                            />
                                            : null
                                    }
                                </Paper>
                                : <Error
                                    isError={true}
                                />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _data: state.movieDetailsFetch.data,
    _isLoading: state.movieDetailsFetch.isLoading,
    _responseError: state.movieDetailsFetch.data && state.movieDetailsFetch.data.Response,
    _movieTitle: state.movieDetailsFetch.data && state.movieDetailsFetch.data.Title,
    _dataCheck: state.addRating.dataCheck,
    _redirect: state.addRating.redirect,
    _imdbID: state.movieDetails.imdbID,
});

const mapDispatchToProps = dispatch => ({
    _onClickSubmitForm: (rating, comment) => dispatch(onClickSubmitFormAsyncActionCreator(rating, comment)),
    _setRedirect: (boolean) => dispatch(setRedirectActionCreator(boolean)),
    _setDataCheck: (boolean) => dispatch(setDataCheckActionCreator(boolean)),
    _fetchMovieDetails: () => dispatch(fetchMovieAsyncActionCreator()),
    _setImdbID: (id) => dispatch(setImdbIDActionCreator(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddRating);