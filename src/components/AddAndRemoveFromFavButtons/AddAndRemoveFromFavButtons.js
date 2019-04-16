import React, { Component } from 'react';
import { database, auth } from '../../firebaseConfig'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'

// const user = auth.currentUser;
const user = {
    uid : '4QPu2IpxTwf6sEDPQkRzwgUnOqL2'
}
const refToMovies = database.ref(`users/${user.uid}/favourites`);

class AddAndRemoveFromFavButtons extends Component {
    state = {
        favourites: null
    };

    componentDidMount() {
        refToMovies.on('value', (snapshot) => {
            this.setState({ favourites: snapshot.val() })
        });
    }

    addToFavourites = (id) => {
        refToMovies.child(id).set(true);
    };

    removeFromFavourites = (id) => {
        database.ref(`users/${user.uid}/favourites/${id}`).remove()
    };

    isFilmOnFavourites() {
        let arr = Object.entries(this.state.favourites || {}).filter(arr => arr[0] === this.props.id);
        return arr.length === 0;
    }

    render() {
        return (
            <div>
                {this.isFilmOnFavourites() ?
                    <AddButton
                        addToFavourites={() => this.addToFavourites(this.props.id)}
                    />
                    :
                    <RemoveButton
                        removeFromFavourites={() => this.removeFromFavourites(this.props.id)}
                    />
                }
            </div>
        )
    }
}

export default AddAndRemoveFromFavButtons;
