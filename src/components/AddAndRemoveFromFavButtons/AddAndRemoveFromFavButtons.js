import React, { Component } from 'react';
import { database } from '../../firebaseConfig'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'

const refToMovies = database.ref('/favourites');

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
        database.ref(`/favourites/${id}`).remove()
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
