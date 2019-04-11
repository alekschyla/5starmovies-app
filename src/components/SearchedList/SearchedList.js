import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'


const placeholderLink = "https://image.flaticon.com/icons/svg/230/230399.svg";

const handleBrokenImage = e => (e.target.src = placeholderLink);



const SearchedList = (props) => {

    return (
        <div>
            {
                props.movies &&
                props.movies.map(
                    movie => (
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
                                to={`/movie/:${movie.imdbID}`}>
                                <Button
                                    variant="contained" color="primary">
                                    Wyświetl szczegóły
                                </Button>
                            </Link>
                        </ListItem>
                    )
                )
            }

        </div>
    )
}

export default SearchedList