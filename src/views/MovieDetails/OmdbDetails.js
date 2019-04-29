import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Fab } from '@material-ui/core';
import styles from '../../styles';
import AddAndRemoveButtons from '../../components/AddAndRemoveButtons';
import AddAndRemoveFromFavButtons from '../../components/AddAndRemoveFromFavButtons';

const placeholderLink = "https://image.flaticon.com/icons/svg/230/230399.svg";

const handleBrokenImage = e => (e.target.src = placeholderLink);


const OmdbDetails = (props) => {
    return (
        <Paper
            style={styles['OmdbDetails-paper']}
        >
            <div
                style={styles['OmdbDetails-movieDetails__img']}
            >
                <img
                    src={props.movieData.Poster}
                    alt={props.movieData.Title}
                    onError={handleBrokenImage}
                />
            </div>
            <div
                style={styles['OmdbDetails-movieDetails__desc']}
            >
                <p style={styles['OmdbDetails-paragraph']}>Tytuł filmu</p>
                <p style={styles['OmdbDetails-paragraph']}>Typ</p>
                <p style={styles['OmdbDetails-paragraph']}>Gatunek</p>
                <p style={styles['OmdbDetails-paragraph']}>Rok produkcji</p>
                <p style={styles['OmdbDetails-paragraph']}>Czas trwania</p>
                <p style={styles['OmdbDetails-paragraph']}>Kraj podukcji</p>
                <p style={styles['OmdbDetails-paragraph']}>Język</p>
                <p style={styles['OmdbDetails-paragraph']}>Reżyseria</p>
                <p style={styles['OmdbDetails-paragraph']}>Scenariusz</p>
                <p style={styles['OmdbDetails-paragraph']}>Główni aktorzy</p>
                <p style={styles['OmdbDetails-paragraph']}>Zarys fabuły</p>
            </div>
            <div
                style={styles['OmdbDetails-movieDetails__text']}
            >
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Title}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Type}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Genre}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Year}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Runtime}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Country}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Language}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Director}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Writer}</p>
                <p style={styles['OmdbDetails-paragraph']}>{props.movieData.Actors}</p>
                <p style={styles['OmdbDetails-plot-paragraph']}>{props.movieData.Plot}</p>

                <AddAndRemoveFromFavButtons
                    id={props.movieData.imdbID}
                />

                <AddAndRemoveButtons
                    id={props.movieData.imdbID}
                />

                <Link
                    to={`/add-rating/:${props.movieData.imdbID}`}
                    style={styles['OmdbDetails-link']}
                >
                    <Fab
                        color='secondary'
                        variant='extended'
                        style={styles['OmdbDetails-button']}
                    >
                        Dodaj ocenę i komentarz do filmu
                </Fab>
                </Link>
            </div>
        </Paper>
    )
};

export default OmdbDetails;
