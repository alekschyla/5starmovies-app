import React from 'react';
import LinkButton from './LinkButton';
import Chart1 from './AreaChart';
import Chart2 from './PieChart';
import styles from '../../styles';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Wyświetl ulubione filmy', to: '/fav-movies' }
];

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
                        return (<LinkButton key={el.value} value={el.value} to={el.to} />)
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