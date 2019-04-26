import React from 'react';
import LinkButton from './LinkButton';
import Chart1 from './AreaChart';
import Chart2 from './PieChart';
import styles from '../../styles';
import { data as dataForChart1 } from './dataForChart1';
import { data as dataForChart2, colors } from './dataForChart2';
import { connect } from 'react-redux';

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
                    <Chart1
                        data={dataForChart1}
                    />
                    <Chart2
                        data={dataForChart2}
                        colors={colors}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);