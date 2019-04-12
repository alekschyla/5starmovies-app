import React from 'react';
import { database } from '../../firebaseConfig';
import { Redirect } from 'react-router-dom';
import { Paper, Fab, TextField } from '@material-ui/core';
import styles from '../../styles';


class AddRating extends React.Component {
    state = {
        imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        movieTitle: this.props.location.search.replace('?', '').replace(/%20/g, ' '),
        rating: 1,
        comment: "",
        userName: "",
        userEmail: "",
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
                <TextField
                    select
                    label="Oceń film:"
                    value={this.state.rating}
                    style={styles['AddRating-rating']}
                    onChange={this.handleChange('rating')}
                    variant="filled"
                >
                    {
                        Array(5).fill(1).map((el, index) => (
                            <option
                                key={index}
                                value={index + 1}
                            >
                                {index + 1}
                            </option>
                        ))
                    }
                </TextField>
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
                <TextField
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
                />
                <Fab
                    style={styles['AddRating-button']}
                    color='primary'
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