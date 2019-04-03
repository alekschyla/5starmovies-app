import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/search"}>
                    <Fab
                        color='primary'
                        variant='extended'
                    >
                        Wyszukaj filmy
                    </Fab>
                </Link>
                <Link to={"/watch-list"}><Fab
                    color='primary'
                    variant='extended'
                >Sprawdź filmy do obejrzenia
                </Fab></Link>
                <Link to={"/add-rating"}><Fab
                    color='primary'
                    variant='extended'
                >Dodaj ocenę/komentarz do filmu
                </Fab></Link>
                Dashboard
        </div>
        )
    }
}

export default Dashboard