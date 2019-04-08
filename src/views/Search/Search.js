import React from 'react'

import SearchedList from "../../components/SearchedList"

class Search extends React.Component {
    state = {
        movies: [
            {
                "Title": "Crazy, Stupid, Love.",
                "Year": "2011",
                "imdbID": "tt1570728",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
                "Year": "1964",
                "imdbID": "tt0057012",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
            }
        ],
        isLoading: false,
        isError: false,
        searchTerm: '',
    };

    getSearchTerm = (event) => this.setState({ searchTerm: event.target.value });

    render() {
        return (
            <div>
                <SearchedList
                    movies={this.state.movies}
                />
            </div>
        )
    }
}

export default Search