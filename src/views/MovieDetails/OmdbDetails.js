import React from 'react';
import { Link } from 'react-router-dom';
import AddAndRemoveButtons from '../../components/AddAndRemoveButtons'

const OmdbDetails = (props) => {
    return (
        <div>
            <img src={props.movieData.Poster} alt={props.movieData.Title} />
            <p>Tytuł filmu: {props.movieData.Title}</p>
            <p>Typ: {props.movieData.Type}</p>
            <p>Gatunek: {props.movieData.Genre}</p>
            <p>Rok produkcji: {props.movieData.Year}</p>
            <p>Czas trwania: {props.movieData.Runtime}</p>
            <p>Kraj podukcji: {props.movieData.Country}</p>
            <p>Język: {props.movieData.Language}</p>
            <p>Reżyseria: {props.movieData.Director}</p>
            <p>Scenariusz: {props.movieData.Writer}</p>
            <p>Główni aktorzy: {props.movieData.Actors}</p>
            <AddAndRemoveButtons
                id={props.movieData.imdbID}
            />
            <Link to={`/add-rating/:${props.movieData.imdbID}`}><button>Dodaj ocenę i komentarz do filmu</button></Link>
        </div>
    )
};

export default OmdbDetails;
