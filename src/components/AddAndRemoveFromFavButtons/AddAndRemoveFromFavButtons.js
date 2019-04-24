import React, { Component } from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { connect } from 'react-redux';
import { getFavouritesFromFirebaseAsyncActionCreator, addToFavouritesAsyncActionCreator, removeFromFavouritesAsyncActionCreator } from '../../state/movieDetails';

class AddAndRemoveFromFavButtons extends Component {

    componentDidMount() {
        this.props._saveFavourites();
    };

    isFilmOnFavourites() {
        let arr = Object.entries(this.props._favourites || {}).filter(arr => arr[0] === this.props._imdbID);
        return arr.length === 0;
    };

    render() {
        return (
            <div>
                {this.isFilmOnFavourites() ?
                    <AddButton
                        addToFavourites={this.props._addToFavourites}
                    />
                    :
                    <RemoveButton
                        removeFromFavourites={this.props._removeFromFavourites}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _imdbID: state.movieDetails.imdbID,
    _favourites: state.movieDetails.favourites,
});

const mapDispatchToProps = dispatch => ({
    _saveFavourites: () => dispatch(getFavouritesFromFirebaseAsyncActionCreator()),
    _addToFavourites: () => dispatch(addToFavouritesAsyncActionCreator()),
    _removeFromFavourites: () => dispatch(removeFromFavouritesAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAndRemoveFromFavButtons);
