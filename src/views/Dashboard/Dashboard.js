import React from 'react';
import LinkButton from './LinkButton';
import AreaChart from './AreaChart';
import Chart2 from './PieChart';
import styles from '../../styles';
import { data as dataForChart2, colors } from './dataForChart2';
import { connect } from 'react-redux';
import { getLoginsLogFromFirebaseAsyncActionCreator } from '../../state/dashboard';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Wyświetl ulubione filmy', to: '/fav-movies' }
];

class Dashboard extends React.Component {
    componentDidMount() {
        this.props._getLoginsLog();
    };

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
                    <AreaChart
                        data={this.props._dataForAreaChart}
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
    _dataForAreaChart: state.dashboard.dataForAreaChart,
    _dataForPieChart: state.dashboard.dataForPieChart,
});

const mapDispatchToProps = dispatch => ({
    _getLoginsLog: () => dispatch(getLoginsLogFromFirebaseAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);