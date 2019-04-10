import React from 'react';

class AddRating extends React.Component {
    state = {
        rating: null,
        comment: "",
        userName: "",
        userEmail: "",
    }

    render() {
        return (
            <div>
                <select
                    onChange={this.handleRatingChange}
                >
                    {
                        Array(5).fill(1).map((el, index) => (
                            <option value={`${index}`}>{index}</option>
                        ))
                    }
                </select>
                <input
                    type={''}
                    value={this.state.comment}
                    onChange={this.handleCommentInput}
                />
                <input
                    type={''}
                    value={this.state.comment}
                    onChange={this.handleCommentInput}
                />
                <input
                    type={''}
                    value={this.state.comment}
                    onChange={this.handleCommentInput}
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