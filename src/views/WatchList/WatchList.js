import React from 'react'

import { database } from '../../firebaseConfig'

class WatchList extends React.Component {
    state = {
        watchList: null
    }

    componentDidMount() {
        database.ref('watchlist').on(
            'value',
            (snapshot) => this.setState({
                watchList: snapshot.val()
            })
        )
    }

    render() {
        return (
            <div>


            </div>
        )
    }
}

export default WatchList