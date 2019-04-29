import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Fab from '@material-ui/core/Fab';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import styles from '../../styles';


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
                            <Link
                                style={{ textDecoration: "none" }}
                                to={`/movie/${movie.imdbID}`}
                            >
                                <ListItem
                                    button={true}
                                >
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

                                </ListItem>
                            </Link>
                            <hr />
                        </div >
                    )
                )
            }

        </div >
    )
}

export default SearchedList