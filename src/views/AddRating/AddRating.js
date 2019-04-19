import React from 'react';
import { database, auth } from '../../firebaseConfig';
import { Redirect } from 'react-router-dom';
import { Paper, Fab, TextField } from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import styles from '../../styles';

const user = auth.currentUser;

class AddRating extends React.Component {
    state = {
        imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        movieTitle: this.props.location.search.replace('?', '').replace(/%20/g, ' '),
        rating: 0,
        comment: "",
        userName: user.displayName,
        userEmail: user.email,
        redirect: false,
        dataCheck: true,
    }

    handleChange = (key) => (event) => this.setState({ [key]: event.target.value })

    onClickSubmitForm = () => {
        const re1 = /[a-zA-Z]{2,}/;
        const re2 = /\S+@\S+\.\S+/;
        re1.test(this.state.userName) && re2.test(this.state.userEmail)
            ? database.ref(`comments/`).child(`${this.state.imdbID}`).push({
                mark: this.state.rating,
                desc: this.state.comment,
                name: this.state.userName,
                email: this.state.userEmail
            }).then(() => this.setState({ redirect: true }))
            : this.setState({ dataCheck: false })
    }

    changeRating = (newRating, name) => {
        this.setState({
            rating: newRating,
        })
    }

    render() {
        return (
            <Paper
                style={styles['AddRating-paper']}
            >
                {
                    this.state.redirect
                        ? <Redirect to={`/movie/:${this.state.imdbID}`} />
                        : null
                }

                <h1
                    style={styles['AddRating-textfield']}
                >
                    Oceń film: {this.state.movieTitle}
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
                {/* <TextField
                    style={styles['AddRating-textfield']}
                    type={'text'}
                    label={'Podaj swoje Imię'}
                    value={this.state.userName}
                    onChange={this.handleChange('userName')}
                    variant="filled"
                />
                <TextField
                    style={styles['AddRating-textfield']}
                    type={'email'}
                    label={'Podaj swój e-mail'}
                    value={this.state.userEmail}
                    onChange={this.handleChange('userEmail')}
                    variant="filled"
                /> */}
                <Fab
                    style={styles['AddRating-button']}
                    color='secondary'
                    variant='extended'
                    onClick={this.onClickSubmitForm}
                >
                    Zapisz
                </Fab>
                {
                    !this.state.dataCheck
                        ? <Paper style={styles['AddRating-paper']}>
                            Nie można zapisać: podane dane są nieprawidłowe lub nie wypełniono wszystkich wymaganych pól.
                        </Paper>
                        : null
                }
            </Paper>
        )
    }
}

export default AddRating;