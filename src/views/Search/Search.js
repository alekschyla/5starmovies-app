import React from 'react'
import FormSearch from "../../components/FormSearch";

class Search extends React.Component {
    state = {
        movies: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
    };

    getSearchTerm = (event) => this.setState({searchTerm: event.target.value});

    render(){
        return(
            <div>
                <FormSearch
                    searchTerm={this.state.searchTerm}
                    getSearchTerm={this.getSearchTerm}
                />

            </div>
        )
    }
}

export default Search