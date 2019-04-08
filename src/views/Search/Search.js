import React from 'react'
import FormSearch from "../../components/FormSearch";

class Search extends React.Component {
    state = {
        movies: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
        type: '',
        year: null
    };

    getSearchTerm = (event) => this.setState({searchTerm: event.target.value});

    getType = (event) => this.setState({type: event.target.value});

    render(){
        return(
            <div>
                <FormSearch
                    searchTerm={this.state.searchTerm}
                    getSearchTerm={this.getSearchTerm}
                    movies={this.state.movies}
                    type={this.state.type}
                    getType={this.getType}
                    year={this.state.year}
                />

            </div>
        )
    }
}

export default Search