import React from 'react';

import LinkButton from './LinkButton';
import AreaChart from './AreaChart';
import PieChart from './PieChart';
import styles from '../../styles';
import { connect } from 'react-redux';
import { getDataForAreaChartFirebaseAsyncActionCreator, getDataForPieChartFirebaseAsyncActionCreator } from '../../state/dashboard';

const links = [
    { value: 'Wyszukaj filmy', to: '/search' },
    { value: 'Sprawdź filmy do obejrzenia', to: '/watch-list' },
    { value: 'Wyświetl ulubione filmy', to: '/fav-movies' }
];

class Dashboard extends React.Component {
    componentDidMount() {
        this.props._getDataForAreaChart();
        this.props._getDataForPieChart();
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
                    <PieChart
                        data={this.props._dataForPieChart}
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
    _getDataForAreaChart: () => dispatch(getDataForAreaChartFirebaseAsyncActionCreator()),
    _getDataForPieChart: () => dispatch(getDataForPieChartFirebaseAsyncActionCreator()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);