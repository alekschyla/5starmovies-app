import React, {Component} from 'react';
import {database} from '../../firebaseConfig'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'

const refToMovies = database.ref('/watchlist');

class AddAndRemoveButtons extends Component {
    state = {
        watchlist: null
    };

    componentDidMount() {
        refToMovies.on('value', (snapshot) => {
            this.setState({watchlist: snapshot.val()})
        });
    }

    addToWatchList = (id) => {
        refToMovies.child(id).set(true);
    };

    removeFromWatchList = (id) => {
        database.ref(`/watchlist/${id}`).remove()
    };

    isFilmOnWatchList() {
        let arr = Object.entries(this.state.watchlist || {}).filter(arr => arr[0] === this.props.id);
        return arr.length === 0;
    }

    render() {
        return (
            <div>
                {this.isFilmOnWatchList() ?
                    <AddButton
                        addToWatchList={() => this.addToWatchList(this.props.id)}
                    />
                    :
                    <RemoveButton
                        removeFromWatchList={() => this.removeFromWatchList(this.props.id)}
                    />
                }
            </div>
    )
    }
}

export default AddAndRemoveButtons;
