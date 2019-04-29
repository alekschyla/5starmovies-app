import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Fab } from '@material-ui/core';
import styles from '../../styles';
import AddAndRemoveButtons from '../../components/AddAndRemoveButtons';
import AddAndRemoveFromFavButtons from '../../components/AddAndRemoveFromFavButtons';
import StarRatings from 'react-star-ratings';
import Grid from '@material-ui/core/Grid';

const placeholderLink = "https://image.flaticon.com/icons/svg/230/230399.svg";

const handleBrokenImage = e => (e.target.src = placeholderLink);


const OmdbDetails = (props) => {
    return (
        <Paper
            style={styles['OmdbDetails-paper']}
        >
            <Grid container spacing={24}>
                <Grid item xs={12} md={4}>
                    <div
                        style={styles['OmdbDetails-movieDetails__img']}
                    >
                        <img
                            src={props.movieData.Poster}
                            alt={props.movieData.Title}
                            onError={handleBrokenImage}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={0}>
                        <Grid
                            item
                            xs={6}
                            style={styles['OmdbDetails-movieDetails__desc']}
                        >

                            <p style={styles['OmdbDetails-paragraph']}>Średnia ocena użytkowników</p>
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
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            style={styles['OmdbDetails-movieDetails__text']}
                        >
                            <div style={styles['OmdbDetails-paragraph']}>
                                {
                                    props.averageRating ?
                                        <StarRatings
                                            rating={props.averageRating || 0}
                                            starRatedColor='yellow'
                                            numberOfStars={5}
                                            starDimension="30px"
                                            starSpacing="10px"
                                            name='rating'
                                        />
                                        : "Brak ocen."
                                }
                            </div>

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

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            justify={'center'}
                            style={styles['OmdbDetails-movieDetails__img']}
                        >
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
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default OmdbDetails;
