import React from 'react';
import OmdbDetails from './OmdbDetails';

const omdbApiPath = 'http://www.omdbapi.com/?apikey=a3748959&i=';
const firebaseApiPath = 'https://starmovies-app.firebaseio.com/';

class MovieDetails extends React.Component {
    state = {
        imdbID: (this.props.match.params.id).replace(/:/, ''),
        movieData: null,
        movieComments: null,
        isLoading: false,
        isError: false,
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(`${omdbApiPath}${this.state.imdbID}`)
            .then(response => response.json())
            .then(data => this.setState({ movieData: data }))
            .catch(() => this.setState({ isError: true }));

        fetch(`${firebaseApiPath}comments/${this.state.imdbID}.json`)
            .then(response => response.json())
            .then(data => this.setState({ movieComments: data }))
            .catch(() => this.setState({ isError: true }))
            .finally(() => this.setState({ isLoading: false }))
    }

    makeKeysArray() {
        let keys = [];
        keys = Object.entries(this.state.movieComments).map(([key, value]) => keys.concat(key));
        return keys;
    }
    render() {
        return (
            <div>
                {this.state.isError
                    ? "Error"
                    : this.state.isLoading
                        ? "Loading"
                        : !this.state.movieData
                            ? "Data not loaded yet"
                            : !this.state.movieComments
                                ? <div>
                                    <OmdbDetails
                                        Poster={this.state.movieData.Poster}
                                        Title={this.state.movieData.Title}
                                        Type={this.state.movieData.Type}
                                        Genre={this.state.movieData.Genre}
                                        Year={this.state.movieData.Year}
                                        Runtime={this.state.movieData.Runtime}
                                        Country={this.state.movieData.Country}
                                        Language={this.state.movieData.Language}
                                        Director={this.state.movieData.Director}
                                        Writer={this.state.movieData.Writer}
                                        Actors={this.state.movieData.Actors}
                                        imdbID={this.state.movieData.imdbID}
                                    />
                                    "Do tego filmu nie dodano jeszcze żadnych komentarzy"
                                    </div>
                                :
                                <div>
                                    <OmdbDetails
                                        Poster={this.state.movieData.Poster}
                                        Title={this.state.movieData.Title}
                                        Type={this.state.movieData.Type}
                                        Genre={this.state.movieData.Genre}
                                        Year={this.state.movieData.Year}
                                        Runtime={this.state.movieData.Runtime}
                                        Country={this.state.movieData.Country}
                                        Language={this.state.movieData.Language}
                                        Director={this.state.movieData.Director}
                                        Writer={this.state.movieData.Writer}
                                        Actors={this.state.movieData.Actors}
                                        imdbID={this.state.movieData.imdbID}
                                    />
                                    <div>Oceny i komentarze do filmu:
                                    {this.makeKeysArray().map((key, index) => {
                                        return (
                                            <div key={[key[0]]}>
                                                <p>Komentarz {Number([index]) + 1}</p>
                                                <p>Ocena użytkownika: {this.state.movieComments[key[0]].mark}</p>
                                                <p>Komentarz użytkownika: {this.state.movieComments[key[0]].desc}</p>
                                                <p>Autor/ka komentarza: {this.state.movieComments[key[0]].name}</p>
                                                <p>E-mail użytkownika: {this.state.movieComments[key[0]].email}</p>
                                            </div>
                                        )
                                    })}
                                    </div>
                                </div>
                }
            </div>
        )
    }
}

export default MovieDetails;