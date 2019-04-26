import React from 'react'

import FormSearch from "../../components/FormSearch";
import SearchedList from "../../components/SearchedList";

import { connect } from 'react-redux'
import { fetchMoviesAsyncActionCreator, fetchAllMoviesAsyncActionCreator } from '../../state/movies'

class Search extends React.Component {
    state = {
        searchTerm: '',
        type: '',
        year: [1950, new Date().getFullYear() + 5],
    };

    getSearchTerm = (event) => this.setState({ searchTerm: event.target.value });

    getType = (event) => this.setState({ type: event.target.value });

    getYear = (year) => {
        this.setState({ year });
    };

    getMoviesBySearchTerm = (searchTerm) => {
        this.props._fetchMovies(searchTerm)
    };

    getMoviesByType = (type, searchTerm) => {
        this.props._fetchMovies(`${searchTerm}&type=${type}`)
    };

    getMoviesByYear = (searchTerm) => {
        if (searchTerm !== '') {
            let years = [];

            for (let i = this.state.year[0]; i <= this.state.year[1]; i++) {
                years = years.concat(i);
            }

            this.props._fetchAllMoviesByYear(
                years.map(year => `${searchTerm}&y=${year}`)
            );
        }
    };

    render() {
        // @HACK
        const movies = this.props._movies && this.props._movies.filter(
            movie => Number(movie.Year.slice(0, 4)) >= this.state.year[0]
        );

        return (
            <div>
                <FormSearch
                    searchTerm={this.state.searchTerm}
                    getSearchTerm={this.getSearchTerm}
                    getMoviesBySearchTerm={this.getMoviesBySearchTerm}
                    type={this.state.type}
                    getType={this.getType}
                    getMoviesByType={this.getMoviesByType}
                    year={this.state.year}
                    getYear={this.getYear}
                    getMoviesByYear={this.getMoviesByYear}
                    movies={this.props._movies}
                />

                <SearchedList
                    movies={movies}
                    history={this.props.history}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _movies: state.movies.data && state.movies.data.Search,
    _isLoading: state.movies.isLoading,
    _isError: state.movies.isError,
});

const mapDispatchToProps = dispatch => ({
    _fetchMovies: (queryParams) => dispatch(fetchMoviesAsyncActionCreator(queryParams)),
    _fetchAllMoviesByYear: (queryParams) => dispatch(fetchAllMoviesAsyncActionCreator(queryParams))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Search)