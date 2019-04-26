import React from 'react';
import SearchedList from "../../components/SearchedList";
import { connect } from 'react-redux';
import { getFavouriteMoviesListFromFirebaseAsyncActionCreator } from '../../state/movieList';

class FavMovies extends React.Component {
    componentDidMount() {
        this.props._getFavouriteMoviesList();
    }

    render() {
        return (
            <div>
                <SearchedList
                    movies={this.props._favouriteMoviesList}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _favouriteMoviesList: state.movieList.favouriteMoviesList,
});

const mapDispatchToProps = dispatch => ({
    _getFavouriteMoviesList: () => dispatch(getFavouriteMoviesListFromFirebaseAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FavMovies);