import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import styles from '../../styles';
import Grid from '@material-ui/core/Grid';


const placeholderLink = "https://image.flaticon.com/icons/svg/230/230399.svg";

const handleBrokenImage = e => (e.target.src = placeholderLink);



const SearchedList = (props) => {

    return (
        <div
            style={styles['FormSearch-container']}
        >
            {
                props.movies &&
                props.movies.map(
                    movie => (
                        <div
                            key={movie.imdbID}
                        >
                            <Grid container spacing={8}>
                                <Grid item xs={12} md={6}>
                                    <ListItem>
                                        <Grid item xs={12} md={6}>
                                            <ListItemAvatar>
                                                <Grid item xs={12} md={6}>
                                                    <Avatar
                                                        src={movie.Poster}
                                                        imgProps={{ onError: handleBrokenImage }}
                                                    />
                                                </Grid>

                                            </ListItemAvatar>
                                        </Grid>
                                        <ListItemText
                                            primary={movie.Title}
                                            secondary={movie.Year}
                                        />
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/movie/${movie.imdbID}`}>
                                            <Fab
                                                variant='extended' color="secondary">
                                                Wyświetl szczegóły
                                </Fab>
                                        </Link>
                                    </ListItem>
                                </Grid>
                                <hr />
                            </Grid>
                        </div>
                    )
                )
            }

        </div>
    )
}

export default SearchedList