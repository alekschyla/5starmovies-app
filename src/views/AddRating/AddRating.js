import React from 'react';
import { database } from '../../firebaseConfig';
import { Redirect } from 'react-router-dom';
import { Paper, Fab } from '@material-ui/core';
import styles from '../../styles';

const omdbApiPath = 'http://www.omdbapi.com/?apikey=a3748959&i=';

class AddRating extends React.Component {
    state = {
        imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        rating: null,
        comment: "",
        userName: "",
        userEmail: "",
        redirect: false,
        dataCheck: false,
        // movieData: null,
        // isLoading: false,
        // isError: false,
    }

    // componentDidMount() {
    //     this.setState({ isLoading: true });

    //     fetch(`${omdbApiPath}${this.state.imdbID}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.Response !== "False") this.setState({ movieData: data })
    //         })
    //         .catch(() => this.setState({ isError: true }))
    //         .finally(() => this.setState({ isLoading: false }))
    // }

    handleRatingChange = (event) => this.setState({ rating: event.target.value })

    handleCommentInput = (event) => this.setState({ comment: event.target.value ? event.target.value : "" })

    handleUserNameInput = (event) => this.setState({ userName: event.target.value })

    handleUserEmailInput = (event) => this.setState({ userEmail: event.target.value })

    onClickSubmitForm = () => {
        const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.state.rating && this.state.userName && this.state.userEmail && emailCheck
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
                style={styles['']}
            >
                {
                    this.state.redirect
                        ? <Redirect to={`/movie/:${this.state.imdbID}`} />
                        : null
                }

                Oceń film:
                <select
                    style={styles['']}
                    onChange={this.handleRatingChange}
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
                </select>
                <input
                    style={styles['']}
                    type={'text'}
                    placeholder={'Tu wpisz komentarz do filmu (opcjonalnie)'}
                    value={this.state.comment}
                    onChange={this.handleCommentInput}
                />
                <input
                    style={styles['']}
                    type={'text'}
                    placeholder={'Podaj swoje Imię'}
                    value={this.state.userName}
                    onChange={this.handleUserNameInput}
                />
                <input
                    style={styles['']}
                    type={'email'}
                    placeholder={'Podaj swój e-mail'}
                    value={this.state.userEmail}
                    onChange={this.handleUserEmailInput}
                />
                <Fab
                    style={styles['']}
                    color='primary'
                    variant='extended'
                    onClick={this.onClickSubmitForm}
                >
                    Zapisz
                </Fab>
                {
                    !this.state.dataCheck
                        ? <Paper>Podane dane są nieprawidłowe lub nie wypełniono wszystkich wymaganych pól, nie można zapisać.</Paper>
                        : null
                }
            </Paper>
        )
    }
}

export default AddRating;