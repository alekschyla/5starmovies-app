import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'



const SearchedList = (props) => {

    return (
        <div>
            {
                props.movies.map(
                    movie => (
                        <ListItem>
                            <ListItemAvatar>
                                <img
                                src={movie.Poster}
                                />


                            </ListItemAvatar>
                            <ListItemText
                                primary={movie.Title}
                                secondary={movie.Year}
                            />
                            <button onClick={()=>this.props.history.push(`../movie/:${movie.imdbID}`)}>Wyswietl szczegoly</button>
                        </ListItem>
                    )
                )
            }

        </div>
    )
}

export default SearchedList