import React, { Component } from 'react';
import AddButton from './AddButton';
import RemoveButton from './RemoveButton';
import { connect } from 'react-redux';
import { addToWatchListAsyncActionCreator, removeFromWatchListAsyncActionCreator, getWatchlistFromFirebaseAsyncActionCreator } from '../../state/movieDetails';

class AddAndRemoveButtons extends Component {

    componentDidMount() {
        this.props._saveWatchlist();
    };

    isFilmOnWatchList() {
        let arr = Object.entries(this.props._watchlist || {}).filter(arr => arr[0] === this.props._imdbID);
        return arr.length === 0;
    };

    render() {
        return (
            <div>
                {this.isFilmOnWatchList() ?
                    <AddButton
                        addToWatchList={this.props._addToWatchList}
                    />
                    :
                    <RemoveButton
                        removeFromWatchList={this.props._removeFromWatchList}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _imdbID: state.movieDetails.imdbID,
    _watchlist: state.movieDetails.watchlist,
});

const mapDispatchToProps = dispatch => ({
    _saveWatchlist: () => dispatch(getWatchlistFromFirebaseAsyncActionCreator()),
    _addToWatchList: () => dispatch(addToWatchListAsyncActionCreator()),
    _removeFromWatchList: () => dispatch(removeFromWatchListAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddAndRemoveButtons);