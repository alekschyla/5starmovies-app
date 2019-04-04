import React from 'react';
import LinkButton from './LinkButton';
import Chart1 from './AreaChart';
import Chart2 from './PieChart';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Dodaj ocenę/komentarz do filmu', to: '/add-rating' }
]
const styles = {
    'Dashboard-main-div': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    'Dashboard-buttons-div': {
        display: 'flex',
        justifyContent: 'center',
    },
    'Dashboard-charts-div': {
        display: 'flex',
        justifyContent: 'space-around',
    }
}
class Dashboard extends React.Component {
    render() {
        return (
            <div
                style={styles['Dashboard-main-div']}
            >
                <div
                    style={styles['Dashboard-buttons-div']}
                >
                    {links.map(el => {
                        return (<LinkButton value={el.value} to={el.to} />)
                    })}
                </div>
                <div
                    style={styles['Dashboard-charts-div']}
                >
                    <Chart1 />
                    <Chart2 />
                </div>
            </div>
        )
    }
}

export default Dashboard