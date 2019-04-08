import React from 'react'
// import FormSearch from "../../components/FormSearch";
import SearchedList from "../../components/SearchedList";

class Search extends React.Component {
    state = {
        movies: null,
        isLoading: false,
        isError: false,
        searchTerm: '',
    };

    getSearchTerm = (event) => this.setState({ searchTerm: event.target.value });

    render() {
        return (
            <div>
                {/* <FormSearch */}
                searchTerm={this.state.searchTerm}
                getSearchTerm={this.getSearchTerm}
                <SearchedList />
                />

            </div>
        )
    }
}

export default Search