import React from 'react';
import { database } from '../../firebaseConfig';

class AddRating extends React.Component {
    state = {
        imdbID: this.props.match.params.id ? (this.props.match.params.id).replace(/:/, '') : "",
        rating: null,
        comment: "",
        userName: "",
        userEmail: "",
    }

    handleRatingChange = (event) => this.setState({ rating: event.target.value })

    handleCommentInput = (event) => this.setState({ comment: event.target.value ? event.target.value : "" })

    handleUserNameInput = (event) => this.setState({ userName: event.target.value })

    handleUserEmailInput = (event) => this.setState({ userEmail: event.target.value })

    onClickSubmitForm = () => database.child().push(true);

    render() {
        return (
            <div>
                Oceń film:
                <select
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
                    type={'text'}
                    placeholder={'Tu wpisz komentarz do filmu'}
                    value={this.state.comment}
                    onChange={this.handleCommentInput}
                />
                <input
                    type={'text'}
                    placeholder={'Podaj swoje Imię'}
                    value={this.state.userName}
                    onChange={this.handleUserNameInput}
                />
                <input
                    type={'text'}
                    placeholder={'Podaj swój e-mail'}
                    value={this.state.userEmail}
                    onChange={this.handleUserEmailInput}
                />
                <button
                    onClick={this.onClickSubmitForm}
                >
                    Zapisz
                </button>
            </div>
        )
    }
}

export default AddRating;