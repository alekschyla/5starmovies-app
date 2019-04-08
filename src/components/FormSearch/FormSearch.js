import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MUISearch from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';

function FormSearch(props) {
    const getMoviesBySearchTerm = (searchTerm, arrMovies) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}`)
            .then(response => response.json())
            .then(movies => arrMovies = movies.Search)
            .then(arrMovies => console.log(arrMovies))
    };

    const getMoviesByType = (type, searchTerm, arrMovies) => {
        fetch(`http://www.omdbapi.com/?apikey=526cfe10&s=${searchTerm}&type=${type}`)
            .then(response => response.json())
            .then(movies => arrMovies = movies.Search)
            .then(arrMovies => console.log(arrMovies))
    };

    return (
        <div
            style={{width: '70%', margin: '15px auto', padding: '10px', boxShadow: '2px 2px 5px #333', borderRadius: '5px'}}
        >
            <TextField
                placeholder={'wpisz tytuł'}
                value={props.searchTerm}
                onChange={props.getSearchTerm}
                margin="normal"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MUISearch/>
                        </InputAdornment>
                    ),
                }}
                style={{width: '90%', margin: '10px'}}
            />

            <Button
                onClick={() => getMoviesBySearchTerm(props.searchTerm, props.movies)}
                variant="contained"
                color="primary"
            >
                wyszukaj
            </Button>

            <NativeSelect
                style={{
                    margin: '10px'}
                }
                value={props.type}
                onChange={(event) => {
                    props.getType(event);
                }}
                onClick={() => getMoviesByType(props.type, props.searchTerm, props.movies)}
            >
                <option value="">Typ</option>
                <option value={'movie'}>Film</option>
                <option value={'series'}>Serial</option>
                <option value={'episode'}>Odcinek</option>
            </NativeSelect>
        </div>
    );
}

export default FormSearch