import React from 'react';
import LinkButton from './LinkButton';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Dodaj ocenę/komentarz do filmu', to: '/add-rating' }
]
const styles = {
    div: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}
class Dashboard extends React.Component {
    render() {
        return (
            <div
                style={styles.div}
            >
                {links.map(el => {
                    return (<LinkButton value={el.value} to={el.to} />)
                })}
            </div>
        )
    }
}

export default Dashboard