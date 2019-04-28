import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import styles from '../../styles';

import placeholderLink from '../../images/noPoster.svg';

const handleBrokenImage = e => (e.target.src = placeholderLink);

const SearchedList = (props) => {
    return (
        <div
            style={styles['FormSearch-container']}
        >
            <strong>{props.description}</strong>
            {
                props.movies === undefined ?
                    'Nie znaleziono filmów ani seriali'
                    :
                    props.movies &&
                    props.movies.map(
                        movie => (
                            <div
                                key={movie.imdbID}
                            >
                                <hr />
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar
                                            src={movie.Poster}
                                            imgProps={{ onError: handleBrokenImage }}
                                        />

                                    </ListItemAvatar>
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
                            </div>
                        )
                    )
            }
        </div>
    )
}

export default SearchedList;