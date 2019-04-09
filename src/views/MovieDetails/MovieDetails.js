import React from 'react';

// const defaultPath = 'http://localhost:3000/movie/';
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
                                    <img src={this.state.movieData.Poster} />
                                    <p>Tytuł filmu: {this.state.movieData.Title}</p>
                                    <p>Typ: {this.state.movieData.Type}</p>
                                    <p>Gatunek: {this.state.movieData.Genre}</p>
                                    <p>Rok produkcji: {this.state.movieData.Year}</p>
                                    <p>Czas trwania: {this.state.movieData.Runtime}</p>
                                    <p>Kraj podukcji: {this.state.movieData.Country}</p>
                                    <p>Język: {this.state.movieData.Language}</p>
                                    <p>Reżyseria: {this.state.movieData.Director}</p>
                                    <p>Scenariusz: {this.state.movieData.Writer}</p>
                                    <p>Główni aktorzy: {this.state.movieData.Actors}</p>
                                    <button>Dodaj filmy do listy: "DO OBEJRZENIA"</button>
                                    <button>Dodaj ocenę i komentarz do filmu</button>
                                    "Do tego filmu nie dodano jeszcze żadnych komentarzy"
                                    </div>
                                :
                                <div>
                                    <img src={this.state.movieData.Poster} />
                                    <p>Tytuł filmu: {this.state.movieData.Title}</p>
                                    <p>Typ: {this.state.movieData.Type}</p>
                                    <p>Gatunek: {this.state.movieData.Genre}</p>
                                    <p>Rok produkcji: {this.state.movieData.Year}</p>
                                    <p>Czas trwania: {this.state.movieData.Runtime}</p>
                                    <p>Kraj podukcji: {this.state.movieData.Country}</p>
                                    <p>Język: {this.state.movieData.Language}</p>
                                    <p>Reżyseria: {this.state.movieData.Director}</p>
                                    <p>Scenariusz: {this.state.movieData.Writer}</p>
                                    <p>Główni aktorzy: {this.state.movieData.Actors}</p>
                                    <button>Dodaj filmy do listy: "DO OBEJRZENIA"</button>
                                    <button>Dodaj ocenę i komentarz do filmu</button>
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