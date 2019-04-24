import React, { Component } from 'react';
import { database } from '../../firebaseConfig';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { connect } from 'react-redux';
import { setFavouritesActionCreator } from '../../state/movieDetails';

class AddAndRemoveFromFavButtons extends Component {

    componentDidMount() {
        const refToMovies = database.ref(`users/${this.props._userUid}/favourites`);
        refToMovies.on('value', (snapshot) => {
            this.props._saveFavourites(snapshot.val());
        });
    }

    addToFavourites = (imdbID) => {
        const refToMovies = database.ref(`users/${this.props._userUid}/favourites`);
        refToMovies.child(imdbID).set(true);
    };

    removeFromFavourites = (imdbID) => {
        database.ref(`users/${this.props._userUid}/favourites/${imdbID}`).remove()
    };

    isFilmOnFavourites() {
        let arr = Object.entries(this.props._favourites || {}).filter(arr => arr[0] === this.props._imdbID);
        return arr.length === 0;
    }

    render() {
        return (
            <div>
                {this.isFilmOnFavourites() ?
                    <AddButton
                        addToFavourites={() => this.addToFavourites(this.props._imdbID)}
                    />
                    :
                    <RemoveButton
                        removeFromFavourites={() => this.removeFromFavourites(this.props._imdbID)}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _userUid: state.auth.user.uid,
    _imdbID: state.movieDetails.imdbID,
    _favourites: state.movieDetails.favourites,
});

const mapDispatchToProps = dispatch => ({
    _saveFavourites: (favourites) => dispatch(setFavouritesActionCreator(favourites)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAndRemoveFromFavButtons);
