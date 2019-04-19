import React from 'react'

import FormSearch from "../../components/FormSearch";
import SearchedList from "../../components/SearchedList";

import { connect } from 'react-redux'
import { fetchMoviesAsyncActionCreator } from '../../state/movies'


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
        // fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}`)
        //     .then(response => response.json())
        //     .then(arrMovies => this.setState({ movies: arrMovies.Search }));
    };

    getMoviesByType = (type, searchTerm) => {
        if (searchTerm !== '') {
            fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&type=${type}`)
                .then(response => response.json())
                .then(arrMovies => this.setState({ movies: arrMovies.Search }));
        }
    };

    getMoviesByYear = (searchTerm) => {
        if (searchTerm !== '') {
            let years = [];
            let allMovies = [];
            let promises = [];

            for (let i = this.state.year[0]; i <= this.state.year[1]; i++) {
                years = years.concat(i);
            }

            years.forEach(year => {
                promises.push(
                    fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&y=${year}`)
                        .then(response => response.json())
                        .then(arrMovies => {
                            if (arrMovies.Search !== undefined) {
                                allMovies = allMovies.concat(arrMovies.Search);
                            }
                        })
                );
            });

            Promise.all(promises).then(() =>
                this.setState({ movies: allMovies })
            );
        }
    };

    getPage = (searchTerm, page) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&page=${page}`)
            .then(response => response.json())
            .then(arrMovies => this.setState({ movies: arrMovies.Search }));
    };

    render() {
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
                    movies={this.props._movies}
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
})
const mapDispatchToProps = dispatch => ({
    _fetchMovies: (queryParams) => dispatch(fetchMoviesAsyncActionCreator(queryParams))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,

)(Search)