import React from 'react'
import FormSearch from "../../components/FormSearch";
import SearchedList from "../../components/SearchedList"

let defaultYear = (1950 + ((new Date().getFullYear() + 5) - 1950) / 2);
console.log(defaultYear);


class Search extends React.Component {
    state = {
        movies: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
        type: '',
        year: [defaultYear, defaultYear],
        page: 1
    };

    getSearchTerm = (event) => this.setState({ searchTerm: event.target.value });

    getType = (event) => this.setState({ type: event.target.value });

    getYear = (year) => {
        this.setState({ year });
    };

    getMoviesBySearchTerm = (searchTerm) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}`)
            .then(response => response.json())
            .then(arrMovies => this.setState({ movies: arrMovies.Search }));
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
                    movies={this.state.movies}
                />

                <SearchedList
                    movies={this.state.movies}
                    history={this.props.history}
                />
            </div>
        )
    }
}

export default Search