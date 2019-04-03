import React from 'react';
import Fab from '@material-ui/core/Fab';


class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Fab
                    color='primary'
                    variant='extended'
                >Wyszukaj filmy
            </Fab>
                <Fab
                    color='primary'
                    variant='extended'
                >Sprawdź filmy do obejrzenia
            </Fab>
                <Fab
                    color='primary'
                    variant='extended'
                >Dodaj ocenę/komentarz do filmu
            </Fab>
                Dashboard
        </div>
        )
    }
}

export default Dashboard