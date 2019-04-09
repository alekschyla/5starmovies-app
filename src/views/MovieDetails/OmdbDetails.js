import React from 'react';
import { Link } from 'react-router-dom';

const OmdbDetails = (props) => {
    return (
        <div>
            <img src={props.Poster} />
            <p>Tytuł filmu: {props.Title}</p>
            <p>Typ: {props.Type}</p>
            <p>Gatunek: {props.Genre}</p>
            <p>Rok produkcji: {props.Year}</p>
            <p>Czas trwania: {props.Runtime}</p>
            <p>Kraj podukcji: {props.Country}</p>
            <p>Język: {props.Language}</p>
            <p>Reżyseria: {props.Director}</p>
            <p>Scenariusz: {props.Writer}</p>
            <p>Główni aktorzy: {props.Actors}</p>
            <button>Dodaj filmy do listy: "DO OBEJRZENIA"</button>
            <Link to={`/add-rating/:${props.imdbID}`}><button>Dodaj ocenę i komentarz do filmu</button></Link>
        </div>
    )
}

export default OmdbDetails;
