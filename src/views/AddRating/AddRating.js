import React from 'react';
import { Redirect } from 'react-router-dom';
import { Paper, Fab, TextField } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import styles from '../../styles';
import { connect } from 'react-redux';
import { onClickSubmitFormAsyncActionCreator, setRedirectActionCreator, setDataCheckActionCreator } from '../../state/addRating';

class AddRating extends React.Component {
    state = {
        rating: 0,
        comment: "",
    }

    componentDidMount(){
        // @TODO if no state.movieDetailsFetch.data then fetch them and display loader!
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
            <Paper
                style={styles['AddRating-paper']}
            >
                {
                    this.props._redirect
                        ? <Redirect to={`/movie/:${this.props._imdbID}`} />
                        : null
                }

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
                    !this.props._dataCheck
                        ? <Paper style={styles['AddRating-paper']}>
                            Nie można zapisać: podane dane są nieprawidłowe lub nie wypełniono wszystkich wymaganych pól.
                        </Paper>
                        : null
                }
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    _movieTitle: state.movieDetailsFetch.data && state.movieDetailsFetch.data.Title,
    _dataCheck: state.addRating.dataCheck,
    _redirect: state.addRating.redirect,
    _imdbID: state.movieDetails.imdbID,
});

const mapDispatchToProps = dispatch => ({
    _onClickSubmitForm: (rating, comment) => dispatch(onClickSubmitFormAsyncActionCreator(rating, comment)),
    _setRedirect: (boolean) => dispatch(setRedirectActionCreator(boolean)),
    _setDataCheck: (boolean) => dispatch(setDataCheckActionCreator(boolean)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddRating);