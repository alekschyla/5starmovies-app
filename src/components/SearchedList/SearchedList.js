import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'



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
                                />

                            </ListItemAvatar>
                            <ListItemText
                                primary={movie.Title}
                                secondary={movie.Year}
                            />
                            <Link to={`/movie/:${movie.imdbID}`}>Wyświetl szczegóły</Link>
                        </ListItem>
                    )
                )
            }

        </div>
    )
}

export default SearchedList