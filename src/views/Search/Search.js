import React from 'react'
import FormSearch from "../../components/FormSearch";

class Search extends React.Component {
    state = {
        movies: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
        type: '',
        year: 0
    };

    getSearchTerm = (event) => this.setState({searchTerm: event.target.value});

    getType = (event) => this.setState({type: event.target.value});

    getYear = (event, year) => {
        this.setState({ year });
    };

    getMoviesBySearchTerm = (searchTerm) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}`)
            .then(response => response.json())
            .then(arrMovies => this.setState({movies: arrMovies.Search}));
    };

    getMoviesByType = (type, searchTerm) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&type=${type}`)
            .then(response => response.json())
            .then(arrMovies => this.setState({movies: arrMovies.Search}));
    };

    getMoviesByYear = (year, searchTerm) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&y=${year}`)
            .then(response => response.json())
            .then(arrMovies => this.setState({movies: arrMovies.Search}));
    };

    render(){
        return(
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

            </div>
        )
    }
}

export default Search