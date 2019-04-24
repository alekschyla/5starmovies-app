import React from 'react';
import SearchedList from "../../components/SearchedList";
import { connect } from 'react-redux';
import { getWatchlistMovieListFromFirebaseAsyncActionCreator } from '../../state/movieList';

class WatchList extends React.Component {

    componentDidMount() {
        this.props._getWatchlistMovieList();
    }

    render() {
        return (
            <div>
                <SearchedList
                    movies={this.props._watchlistMovieList}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _watchlistMovieList: state.movieList.watchlistMovieList,
});

const mapDispatchToProps = dispatch => ({
    _getWatchlistMovieList: () => dispatch(getWatchlistMovieListFromFirebaseAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WatchList);