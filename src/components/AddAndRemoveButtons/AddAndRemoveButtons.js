import React, { Component } from 'react';
import { database } from '../../firebaseConfig';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { connect } from 'react-redux';
import { setWatchlistActionCreator } from '../../state/movieDetails';

class AddAndRemoveButtons extends Component {

    componentDidMount() {
        const refToMovies = database.ref(`users/${this.props._userUid}/watchlist`);
        refToMovies.on('value', (snapshot) => {
            this.props._saveWatchlist(snapshot.val());
        });
    }

    addToWatchList = (imdbID) => {
        const refToMovies = database.ref(`users/${this.props._userUid}/watchlist`);
        refToMovies.child(imdbID).set(true);
    };

    removeFromWatchList = (imdbID) => {
        database.ref(`users/${this.props._userUid}/watchlist/${imdbID}`).remove()
    };

    isFilmOnWatchList() {
        let arr = Object.entries(this.props._watchlist || {}).filter(arr => arr[0] === this.props._imdbID);
        return arr.length === 0;
    }

    render() {
        return (
            <div>
                {this.isFilmOnWatchList() ?
                    <AddButton
                        addToWatchList={() => this.addToWatchList(this.props._imdbID)}
                    />
                    :
                    <RemoveButton
                        removeFromWatchList={() => this.removeFromWatchList(this.props._imdbID)}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _userUid: state.auth.user.uid,
    _imdbID: state.movieDetails.imdbID,
    _watchlist: state.movieDetails.watchlist,
});

const mapDispatchToProps = dispatch => ({
    _saveWatchlist: (watchlist) => dispatch(setWatchlistActionCreator(watchlist)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAndRemoveButtons);